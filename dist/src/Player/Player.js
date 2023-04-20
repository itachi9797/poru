"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const Connection_1 = require("./Connection");
const Queue_1 = __importDefault(require("../guild/Queue"));
const events_1 = require("events");
const Filters_1 = require("./Filters");
const Response_1 = require("../guild/Response");
class Player extends events_1.EventEmitter {
    data;
    poru;
    node;
    connection;
    queue;
    filters;
    guildId;
    voiceChannel;
    textChannel;
    currentTrack;
    previousTrack;
    isPlaying;
    isPaused;
    isConnected;
    loop;
    position;
    ping;
    timestamp;
    mute;
    deaf;
    volume;
    constructor(poru, node, options) {
        super();
        this.poru = poru;
        this.node = node;
        this.queue = new Queue_1.default();
        this.connection = new Connection_1.Connection(this);
        this.guildId = options.guildId;
        this.filters = this.poru.options.customFilter
            ? new this.poru.options.customFilter(this)
            : new Filters_1.Filters(this);
        this.voiceChannel = options.voiceChannel;
        this.textChannel = options.textChannel;
        this.currentTrack = null;
        this.previousTrack = null;
        this.deaf = options.deaf || false;
        this.mute = options.mute || false;
        this.volume = 100;
        this.isPlaying = false;
        this.isPaused = false;
        this.position = 0;
        this.ping = 0;
        this.timestamp = null;
        this.isConnected = false;
        this.loop = "NONE";
        this.data = {};
        this.on("playerUpdate", (packet) => {
            (this.isConnected = packet.state.connected),
                (this.position = packet.state.position),
                (this.ping = packet.state.ping);
            this.timestamp = packet.state.time;
            //this event will be useful for creating web player
            this.poru.emit("playerUpdate", this);
        });
        this.on("event", (data) => this.eventHandler(data));
    }
    async play() {
        if (!this.queue.length)
            return;
        this.currentTrack = this.queue.shift();
        if (!this.currentTrack.track)
            this.currentTrack = await this.currentTrack.resolve(this.poru);
        if (this.currentTrack.track) {
            this.node.rest.updatePlayer({
                guildId: this.guildId,
                data: {
                    encodedTrack: this.currentTrack.track,
                },
            });
            this.isPlaying = true;
            this.position = 0;
        }
        else {
            return this.play();
        }
    }
    connect(options = this) {
        let { guildId, voiceChannel, deaf, mute } = options;
        this.send({
            guild_id: guildId,
            channel_id: voiceChannel,
            self_deaf: deaf || true,
            self_mute: mute || false,
        });
        this.isConnected = true;
        this.poru.emit("debug", this.guildId, `[Poru Player] Player has been connected`);
    }
    stop() {
        this.position = 0;
        this.isPlaying = false;
        this.node.rest.updatePlayer({
            guildId: this.guildId,
            data: { encodedTrack: null },
        });
        return this;
    }
    pause(toggle = true) {
        this.node.rest.updatePlayer({
            guildId: this.guildId,
            data: { paused: toggle },
        });
        this.isPlaying = !toggle;
        this.isPaused = toggle;
        return this;
    }
    seekTo(position) {
        if (this.position + position >= this.currentTrack.info.length)
            position = this.currentTrack.info.length;
        this.node.rest.updatePlayer({ guildId: this.guildId, data: { position } });
    }
    setVolume(volume) {
        if (volume < 0 || volume > 1000)
            throw new Error("[Poru Exception] Volume must be between 0 to 1000");
        this.node.rest.updatePlayer({ guildId: this.guildId, data: { volume } });
        this.volume = volume;
        return this;
    }
    setLoop(mode) {
        if (!mode)
            throw new Error(`[Poru Player] You must have to provide loop mode as argument of setLoop`);
        if (!["NONE", "TRACK", "QUEUE"].includes(mode))
            throw new Error(`[Poru Player] setLoop arguments are NONE,TRACK AND QUEUE`);
        switch (mode) {
            case "NONE": {
                this.loop = "NONE";
                break;
            }
            case "TRACK": {
                this.loop = "TRACK";
                break;
            }
            case "QUEUE": {
                this.loop = "QUEUE";
                break;
            }
            default: {
                this.loop = "NONE";
            }
        }
        return this;
    }
    setTextChannel(channel) {
        this.textChannel = channel;
        return this;
    }
    setVoiceChannel(channel, options) {
        if (this.isConnected && channel == this.voiceChannel)
            throw new ReferenceError(`Player is already connected to ${channel}`);
        this.voiceChannel = channel;
        if (options) {
            this.mute = options.mute ?? this.mute;
            this.deaf = options.deaf ?? this.deaf;
        }
        this.connect({
            deaf: this.deaf,
            guildId: this.guildId,
            voiceChannel: this.voiceChannel,
            textChannel: this.textChannel,
            mute: this.mute,
        });
        return this;
    }
    set(key, value) {
        return (this.data[key] = value);
    }
    get(key) {
        return this.data[key];
    }
    disconnect() {
        if (!this.voiceChannel)
            return;
        this.pause(true);
        this.isConnected = false;
        this.send({
            guild_id: this.guildId,
            channel_id: null,
            self_mute: false,
            self_deaf: false,
        });
        this.voiceChannel = null;
        return this;
    }
    destroy() {
        this.disconnect();
        this.node.rest.destroyPlayer(this.guildId);
        this.poru.emit("debug", this.guildId, `[Poru Player] destroyed the player`);
        this.poru.emit("playerDestroy", this);
        this.poru.players.delete(this.guildId);
    }
    restart() {
        if (!this.currentTrack.track && !this.queue.length)
            return;
        if (!this.currentTrack.track)
            return this.play();
        this.node.rest.updatePlayer({
            guildId: this.guildId,
            data: {
                position: this.position,
                encodedTrack: this.currentTrack.track,
            },
        });
    }
    moveNode(name) {
        let node = this.poru.nodes.get(name);
        if (!node || node.name === this.node.name)
            return;
        if (!node.isConnected)
            throw new Error("Provided Node not is not connected");
        try {
            this.node.rest.destroyPlayer(this.guildId);
            this.poru.players.delete(this.guildId);
            this.node = node;
            this.poru.players.set(this.guildId, this);
            this.restart();
        }
        catch (e) {
            this.destroy();
            throw e;
        }
    }
    async AutoMoveNode() {
        if (this.poru.leastUsedNodes.length === 0)
            throw new Error("[Poru Error] No nodes are avaliable");
        const node = this.poru.nodes.get(this.poru.leastUsedNodes[0].name);
        if (!node)
            return await this.destroy();
        await this.moveNode(node.name);
    }
    async autoplay(requester) {
        try {
            let data = `https://www.youtube.com/watch?v=${this.previousTrack.info.identifier || this.currentTrack.info.identifier}&list=RD${this.previousTrack.info.identifier || this.currentTrack.info.identifier}`;
            let response = await this.poru.resolve({
                query: data,
                requester,
                source: this.poru.options.defaultPlatform || "ytmsearch",
            });
            if (!response ||
                !response.tracks ||
                ["LOAD_FAILED", "NO_MATCHES"].includes(response.loadType))
                return this.stop();
            let track = response.tracks[Math.floor(Math.random() * Math.floor(response.tracks.length))];
            this.queue.push(track);
            this.play();
            return this;
        }
        catch (e) {
            return this.stop();
        }
    }
    eventHandler(data) {
        switch (data.type) {
            case "TrackStartEvent": {
                this.isPlaying = true;
                this.poru.emit("trackStart", this, this.currentTrack);
                break;
            }
            case "TrackEndEvent": {
                this.previousTrack = this.currentTrack;
                if (this.loop === "TRACK") {
                    this.queue.unshift(this.previousTrack);
                    this.poru.emit("trackEnd", this, this.currentTrack);
                    return this.play();
                }
                else if (this.currentTrack && this.loop === "QUEUE") {
                    this.queue.push(this.previousTrack);
                    this.poru.emit("trackEnd", this, this.currentTrack, data);
                    return this.play();
                }
                if (this.queue.length === 0) {
                    this.isPlaying = false;
                    return this.poru.emit("queueEnd", this);
                }
                else if (this.queue.length > 0) {
                    this.poru.emit("trackEnd", this, this.currentTrack);
                    return this.play();
                }
                this.isPlaying = false;
                this.poru.emit("queueEnd", this);
                break;
            }
            case "TrackStuckEvent": {
                this.poru.emit("trackError", this, this.currentTrack, data);
                this.stop();
                break;
            }
            case "TrackExceptionEvent": {
                this.poru.emit("trackError", this, this.currentTrack, data);
                this.stop();
                break;
            }
            case "WebSocketClosedEvent": {
                if ([4015, 4009].includes(data.code)) {
                    this.send({
                        guild_id: data.guildId,
                        channel_id: this.voiceChannel,
                        self_mute: this.mute,
                        self_deaf: this.deaf,
                    });
                }
                this.poru.emit("socketClose", this, this.currentTrack, data);
                this.pause(true);
                this.poru.emit("debug", `Player -> ${this.guildId}`, "Player paused Cause Channel deleted Or Client was kicked");
                break;
            }
            default: {
                throw new Error(`An unknown event: ${data}`);
            }
        }
    }
    async resolve({ query, source, requester }) {
        const regex = /^https?:\/\//;
        if (regex.test(query)) {
            let response = await this.node.rest.get(`/v3/loadtracks?identifier=${encodeURIComponent(query)}`);
            return new Response_1.Response(response, requester);
        }
        else {
            let track = `${source || "ytsearch"}:${query}`;
            let response = await this.node.rest.get(`/v3/loadtracks?identifier=${encodeURIComponent(track)}`);
            return new Response_1.Response(response, requester);
        }
    }
    send(data) {
        this.poru.send({ op: 4, d: data });
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map