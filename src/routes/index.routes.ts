import { Router } from 'express';
import { openWeather } from '../modules/Open Weather/useCase';
import { musicRoutes } from './music.routes';
import { playlistRoutes } from './playlist.routes';

const routes = Router();

routes.use('/music', musicRoutes)
routes.use('/playlist', playlistRoutes)

routes.post('/city', (request, response) => {
    openWeather().handle(request, response);
})

export { routes };