import { Response, Request } from "express";
import { ListAllPlaylistUseCase } from "./ListAllPlaylistsUseCase";


class ListAllPlaylistController {
    constructor(private listAllPlaylistUseCase: ListAllPlaylistUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const playlists = await this.listAllPlaylistUseCase.execute();

            return response.json(playlists);
        } catch(error) {
            return response.status(400).json({ error: error.message })
        }
    }
}

export { ListAllPlaylistController };