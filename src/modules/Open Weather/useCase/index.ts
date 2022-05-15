import { MusicRepository } from "../../music/repositories/implementations/MusicRepository";
import { ListMusicByPlaylistNameUseCase } from "../../music/useCases/listMusicByPlaylistName/ListMusicByPlaylistNameUseCase";
import { OpenWeatherController } from "./OpenWeatherController";



export function openWeather() {
    const openWeatherMusicRepository = new MusicRepository();
    const openWeatherMusicUseCase = new ListMusicByPlaylistNameUseCase(openWeatherMusicRepository);
    const openWeatherMusicController = new OpenWeatherController(openWeatherMusicUseCase);

    return openWeatherMusicController;
}