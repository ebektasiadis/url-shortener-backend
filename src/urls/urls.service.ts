import {Urls} from "@prisma/client";
import {UrlsRepository} from "./urls.repository";

export abstract class UrlsService {
    public static createUrl(url: string): Promise<Urls> {
        return UrlsRepository.createUrl(url);
    }

    public static findUrl(id: number): Promise<Urls | null> {
        return UrlsRepository.findUrl(id);
    }
}
