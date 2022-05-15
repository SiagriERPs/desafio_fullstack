import { MusicRepository } from "../../repositories/implementations/MusicRepository";
import { ListMusicByPlaylistNameController } from "./ListMusicByPlaylistNameController";
import { ListMusicByPlaylistNameUseCase } from "./ListMusicByPlaylistNameUseCase";



export function listMusicByPlaylistName() {
    const listMusicByPlaylistNameRepository = new MusicRepository();
    const listMusicByPlaylistNameUseCase = new ListMusicByPlaylistNameUseCase(listMusicByPlaylistNameRepository);
    const listMusicByPlaylistNameController = new ListMusicByPlaylistNameController(listMusicByPlaylistNameUseCase);

    return listMusicByPlaylistNameController;
}