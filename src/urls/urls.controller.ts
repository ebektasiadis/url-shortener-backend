import {Router} from "express";
import {IUrlsService} from "./urls.models";

export class UrlsController {
    private readonly $router: Router;

    constructor(
        private readonly $urlsService: IUrlsService
    ) {
        this.$router = Router();
    }

    addHandlers(): this {
        this.$router.get("/:id", async (req, res) => {
            if(!req.params.id || Number.isNaN(req.params.id)) {
                res.sendStatus(400);
                return;
            }

            const url = await this.$urlsService.findUrl(parseInt(req.params.id));

            if(!url) {
                res.sendStatus(404);
                return;
            }

            res.json(url);
        })

        this.$router.post("/", async (req, res) => {
            if(!req.body.url || !URL.canParse(req.body.url)) {
                res.sendStatus(400);
                return;
            }

            const url = await this.$urlsService.createUrl(req.body.url);
            res.json(url);
        })

        return this;
    }

    buildRouter(): Router {
        return this
            .$router;
    }
}