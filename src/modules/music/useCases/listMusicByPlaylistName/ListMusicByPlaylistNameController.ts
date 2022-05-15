import { Request, Response } from "express";
import { ListMusicByPlaylistNameUseCase } from "./ListMusicByPlaylistNameUseCase";



class ListMusicByPlaylistNameController {
    constructor(private listMusicByPlaylistNameuseCase: ListMusicByPlaylistNameUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try{
            const { playlist_name } = request.params;

            const musicsInPlaylist = await this.listMusicByPlaylistNameuseCase.execute({ playlist_name })

            return response.json(musicsInPlaylist)
        } catch(error) {
            return response.status(400).json({ error: error.message })
        }
    }
}

export { ListMusicByPlaylistNameController }