import { Request, Response } from "express";
import { ListByPlaylistIdUseCase } from "./listByPlaylistIdUseCase";

class ListByPlaylistIdController {
    constructor(private listByPlaylistIdUseCase: ListByPlaylistIdUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try{
            const { playlist_id } = request.params;

            const musicsInPlaylist = await this.listByPlaylistIdUseCase.execute({ playlist_id })

            return response.json(musicsInPlaylist)
        } catch(error) {
            return response.status(400).json({ error: error.message })
        }
    }
}

export { ListByPlaylistIdController };