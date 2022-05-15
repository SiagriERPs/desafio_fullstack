import { IMusicRepository } from "../../repositories/IMusicRepository";

interface IRequest {
    name: string;
    playlist_id?: string;
}

class CreateMusicUseCase {
    constructor(private musicRepository: IMusicRepository) {}

    async execute(data: IRequest): Promise<void> {
        await this.musicRepository.create({ ...data })
    }
}

export { CreateMusicUseCase };