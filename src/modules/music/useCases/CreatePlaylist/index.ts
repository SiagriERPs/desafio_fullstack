import { PlaylistRepository } from "../../repositories/implementations/PlaylistRepository";
import { CreatePlaylistController } from "./CreatePlaylistController";
import { CreatePlaylistUseCase } from "./CreatePlaylistUseCase";


export function createPlaylist() {
    const createPlaylistrepository = new PlaylistRepository();
    const createPlaylistUseCase = new CreatePlaylistUseCase(createPlaylistrepository);
    const createPlaylistController = new CreatePlaylistController(createPlaylistUseCase);

    return createPlaylistController;
}