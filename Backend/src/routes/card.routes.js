import { Router } from "express";
import { authentication, createCard, getAllCards, deleteCard} from "../controllers/card.controllers.js";
import {upload} from "../middlewares/multer.middlewares.js";

const router = Router();

router.route("/").get(getAllCards);
router.route("/auth").post(authentication);
router.route("/create").post(
    upload.fields([
        {
            name:  "image",
            maxCount: 1
        },
    ]),
    createCard
);
router.route("/:id").put(deleteCard);

export default router;
