import { Router } from "express";
import { createMusicController } from "../modules/music/useCases/CreateMusic";
import { listAllMusics } from "../modules/music/useCases/listAllMusics";
import { listByPlaylistId } from "../modules/music/useCases/listByPlaylistId";
import { listMusicByPlaylistName } from "../modules/music/useCases/listMusicByPlaylistName";

const musicRoutes = Router();

musicRoutes.post('/', (request, response) => {
    createMusicController().handle(request, response);
})

musicRoutes.get('/', (request, response) => {
    listAllMusics().handle(request, response)
})

musicRoutes.get('/:playlist_id', (request, response) => {
    listByPlaylistId().handle(request, response);
})

musicRoutes.get('/playlist/:playlist_name', (request, response) => {
    listMusicByPlaylistName().handle(request, response);
})


export { musicRoutes };