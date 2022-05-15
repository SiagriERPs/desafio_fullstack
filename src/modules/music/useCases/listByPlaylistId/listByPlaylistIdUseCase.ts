import { Music } from "../../entities/Music";
import { IMusicRepository } from "../../repositories/IMusicRepository";



class ListByPlaylistIdUseCase {
    constructor(private musicRepository: IMusicRepository) {}

    async execute({ playlist_id }): Promise<Music[]> {
        const musicsInPlaylist =  await this.musicRepository.listByPlaylistId(playlist_id)

        return musicsInPlaylist;
    }
}

export { ListByPlaylistIdUseCase }