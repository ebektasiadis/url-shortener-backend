import {Router} from "express";
import {UrlsService} from "./urls.service";

const router = Router();

router.get("/:id", async (req, res) => {
   if(!req.params.id || Number.isNaN(req.params.id)) {
       res.sendStatus(400);
       return;
   }

   const url = await UrlsService.findUrl(parseInt(req.params.id));

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

    const url = await UrlsService.createUrl(req.body.url);
    res.json(url);
})

export default router;