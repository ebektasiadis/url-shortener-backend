import {Urls} from "@prisma/client";

export interface IUrlsService {
    createUrl(url: string): Promise<Urls>;
    findUrl(id: number): Promise<Urls | null>;
}

export interface IUrlsRepository {
    createUrl(url: string): Promise<Urls>;
    findUrl(id: number): Promise<Urls | null>;
}