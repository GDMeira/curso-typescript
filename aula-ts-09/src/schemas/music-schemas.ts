import Joi, { Schema } from "joi";
import { Music } from "protocols";


export const musicSchema: Schema = Joi.object<Music>({
    title: Joi.string().required(),
    artist: Joi.string().required()
})