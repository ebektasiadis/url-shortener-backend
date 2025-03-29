import {UrlsRepository} from "./urls.repository";
import {UrlsService} from "./urls.service";
import {UrlsController} from "./urls.controller";

const urlsRepository = new UrlsRepository();
const urlsService = new UrlsService(urlsRepository);
export default new UrlsController(urlsService)
    .addHandlers()
    .buildRouter()