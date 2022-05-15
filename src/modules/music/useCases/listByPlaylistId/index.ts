import { MusicRepository } from "../../repositories/implementations/MusicRepository";
import { ListByPlaylistIdController } from "./listByPlaylistIdController";
import { ListByPlaylistIdUseCase } from "./listByPlaylistIdUseCase";

export function listByPlaylistId() {
    const listByPlaylistIdRepository = new MusicRepository();
    const listByPlaylistIdUseCase = new ListByPlaylistIdUseCase(listByPlaylistIdRepository);
    const listByPlaylistIdController = new ListByPlaylistIdController(listByPlaylistIdUseCase);

    return listByPlaylistIdController;
}