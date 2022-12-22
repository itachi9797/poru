/// <reference types="node" />
import { Poru, ResolveOptions } from "./Poru";
import { Node } from "./Node";
import { Track } from "./guild/Track";
import { Connection } from "./Connection";
import Queue from "./guild/Queue";
import { EventEmitter } from "events";
import { Filters } from "./Filters";
import { Response } from "./guild/Response";
import { ConnectionOptions } from "./Poru";
declare type Loop = "NONE" | "TRACK" | "QUEUE";
export declare class Player extends EventEmitter {
    poru: Poru;
    node: Node;
    connection: Connection;
    queue: Queue;
    filters: Filters;
    guildId: string;
    voiceChannel: string;
    textChannel: string;
    currentTrack: Track;
    previousTrack: Track;
    isPlaying: boolean;
    isPaused: boolean;
    isConnected: boolean;
    loop: Loop;
    position: number;
    ping: number;
    timestamp: number;
    mute: boolean;
    deaf: boolean;
    volume: number;
    constructor(poru: Poru, node: Node, options: any);
    play(): Promise<void>;
    connect(options?: ConnectionOptions): void;
    stop(): this;
    pause(toggle?: boolean): this;
    seekTo(position: number): void;
    setVolume(volume: number): this;
    setLoop(mode: Loop): this;
    setTextChannel(channel: string): this;
    setVoiceChannel(channel: string): this;
    disconnect(): this;
    destroy(): void;
    restart(): void;
    move(): void;
    eventHandler(data: any): boolean | Promise<void>;
    resolve({ query, source, requester }: ResolveOptions): Promise<Response>;
    send(data: any): void;
}
export {};
