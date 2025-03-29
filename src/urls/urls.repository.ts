import { Urls } from "@prisma/client"
import prismaClient from "../database";


export abstract class UrlsRepository {
    static async createUrl(url: string): Promise<Urls> {
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

    static findUrl(id: number): Promise<Urls | null> {
        return prismaClient.urls.findFirst({
            where: {
                id
            }
        })
    }
}