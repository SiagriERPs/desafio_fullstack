import { MusicRepository } from "../../repositories/implementations/MusicRepository";
import { ListAllMusicController } from "./ListAllMusicController";
import { ListAllMusicUseCase } from "./ListAllMusicUseCase";


export function listAllMusics() {
    const listAllMusicsRepository = new MusicRepository();
    const listAllMusicsUseCase = new ListAllMusicUseCase(listAllMusicsRepository);
    const listAllMusicsController = new ListAllMusicController(listAllMusicsUseCase);

    return listAllMusicsController;
}