import { Music } from "../../entities/Music";
import { MusicRepository } from "../../repositories/implementations/MusicRepository";

interface IRequest {
    playlist_name: string;
}

class ListMusicByPlaylistNameUseCase {
    constructor(private musicRepository: MusicRepository) {}

    async execute({ playlist_name }: IRequest): Promise<Music[]> {
        const musicsInPlaylist = await this.musicRepository.listByPlaylistName(playlist_name)

        return musicsInPlaylist;
    }
}

export { ListMusicByPlaylistNameUseCase };