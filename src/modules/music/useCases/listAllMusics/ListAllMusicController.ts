import { Request, Response } from "express";
import { ListAllMusicUseCase } from "./ListAllMusicUseCase";

class ListAllMusicController {
    constructor(private listAllMusicUseCase: ListAllMusicUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const musics = await this.listAllMusicUseCase.execute()

            return response.json(musics)
        } catch(error) {
            return response.status(400).json({ error: error.message })
        }
    }
}

export { ListAllMusicController };