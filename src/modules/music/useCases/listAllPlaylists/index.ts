import { PlaylistRepository } from "../../repositories/implementations/PlaylistRepository";
import { ListAllPlaylistController } from "./ListAllPlaylistController";
import { ListAllPlaylistUseCase } from "./ListAllPlaylistsUseCase";


export function listAllPlaylists() {
    const listAllPlaylists = new PlaylistRepository();
    const listAllPlaylistsUseCase = new ListAllPlaylistUseCase(listAllPlaylists);
    const listAllPlaylistsController = new ListAllPlaylistController(listAllPlaylistsUseCase);

    return listAllPlaylistsController;
}