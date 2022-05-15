import { Request, Response } from "express";
import { CreatePlaylistUseCase } from "./CreatePlaylistUseCase";


class CreatePlaylistController {
    constructor(private createPlaylistUseCase: CreatePlaylistUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try{
            const { name } = request.body;
    
            await this.createPlaylistUseCase.execute({ name })
    
            return response.status(201).send();
        } catch(error) {
            return response.status(400).json({ error: error.message })
        }
    }
}

export { CreatePlaylistController };