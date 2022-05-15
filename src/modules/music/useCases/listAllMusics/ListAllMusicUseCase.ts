import { Music } from "../../entities/Music";
import { MusicRepository } from "../../repositories/implementations/MusicRepository";



class ListAllMusicUseCase {
    constructor(private musicRepository: MusicRepository) {}

    async execute(): Promise<Music[]> {
        const musics = await this.musicRepository.list();

        return musics;
    }
}

export { ListAllMusicUseCase }