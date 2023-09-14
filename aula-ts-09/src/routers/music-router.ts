import { Router } from "express";
import musicController from "../controllers/music-controller";
import schemaValidation from "../middlewares/schemaValidation";
import { musicSchema } from "../schemas/music-schemas";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", schemaValidation(musicSchema), musicController.createMusic); 

export default musicRouter;