import { Playlist } from "../../entities/Playlist";
import { IPlaylistRepository } from "../../repositories/IPlaylistRepository";


class ListAllPlaylistUseCase {
    constructor(private playlistRepository: IPlaylistRepository) {}

    async execute(): Promise<Playlist[]> {
        return await this.playlistRepository.list();
    }
}

export { ListAllPlaylistUseCase };