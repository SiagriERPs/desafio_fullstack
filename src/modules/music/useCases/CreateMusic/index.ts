import { MusicRepository } from "../../repositories/implementations/MusicRepository";
import { CreateMusicController } from "./CreateMusicController";
import { CreateMusicUseCase } from "./CreateMusicUseCase";

export function createMusicController() {
    const createMusicRepository = new MusicRepository();
    const createMusicUseCase = new CreateMusicUseCase(createMusicRepository);
    const createMusicController = new CreateMusicController(createMusicUseCase);

    return createMusicController;
}