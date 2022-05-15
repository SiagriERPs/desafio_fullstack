import { CreateMusicUseCase } from "./CreateMusicUseCase";
import { Request, Response } from 'express';


class CreateMusicController {
    constructor(private createMusicUseCase: CreateMusicUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, playlist_id } = request.body;
    
            await this.createMusicUseCase.execute({ name, playlist_id })
    
            return response.status(201).send();
        } catch(error) {
            return response.status(400).json({ error: error.message })
        }
    }

}

export { CreateMusicController };