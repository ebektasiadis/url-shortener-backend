import {Router} from "express";
import prismaClient from "../database";

const router = Router();

type Entity = {
    id: number;
    url: URL;
}

router.get("/:id", async (req, res) => {
    const id = Number(req.params.id);

    const url = await prismaClient.urls.findFirst({
        where: {
            id
        }
    })

    if(!url) {
        res.sendStatus(404);
        return;
    }

    res.json(url);
})

router.post("/", async (req, res) => {
    if(!req.body.url || !URL.canParse(req.body.url)) {
        res.sendStatus(400);
        return;
    }

    let url = await prismaClient.urls.findFirst({
        where: {
            url: req.body.url
        }
    })

    if(url) {
        res.json({
            message: "URL already stored",
            url
        })
        return;
    }

     url = await prismaClient.urls.create({
        data: {
            url: req.body.url,
        }
    })

    res.json({
        message: "URL stored",
        url
    })
})

export default router;