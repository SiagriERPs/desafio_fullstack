import { Router } from "express";
import { createPlaylist } from "../modules/music/useCases/CreatePlaylist";
import { listAllPlaylists } from "../modules/music/useCases/listAllPlaylists";


const playlistRoutes = Router();

playlistRoutes.post('/', (request, response) => {
    createPlaylist().handle(request, response);
})

playlistRoutes.get('/', (request, response) => {
    listAllPlaylists().handle(request, response);
})

export { playlistRoutes };