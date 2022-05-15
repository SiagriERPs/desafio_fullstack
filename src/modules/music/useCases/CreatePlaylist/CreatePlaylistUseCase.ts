import { IPlaylistRepository } from "../../repositories/IPlaylistRepository";


class CreatePlaylistUseCase {
    constructor(private repository: IPlaylistRepository) {}

    async execute({ name }): Promise<void> {
        await this.repository.create({ name });
    }
}

export { CreatePlaylistUseCase };