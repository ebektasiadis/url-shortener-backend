import {Urls} from "@prisma/client";
import {IUrlsRepository, IUrlsService} from "./urls.models";
import {UrlsRepository} from "./urls.repository";

export class UrlsService implements IUrlsService {
    constructor(
        private readonly $urlRepository: IUrlsRepository
    ) {}


    public createUrl(url: string): Promise<Urls> {
        return this.$urlRepository.createUrl(url);
    }

    public findUrl(id: number): Promise<Urls | null> {
        return this.$urlRepository.findUrl(id);
    }
}
