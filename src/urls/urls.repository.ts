import { Urls } from "@prisma/client"
import prismaClient from "../database";
import {IUrlsRepository} from "./urls.models";


export class UrlsRepository implements IUrlsRepository {
    async createUrl(url: string): Promise<Urls> {
        const response = await prismaClient.urls.findFirst({
            where: {
                url
            }
        })

        if (response) {
            return response;
        }

        return prismaClient.urls.create({
            data: {
                url
            }
        })
    }

    findUrl(id: number): Promise<Urls | null> {
        return prismaClient.urls.findFirst({
            where: {
                id
            }
        })
    }
}