import { Request, Response } from "express";
import { ListMusicByPlaylistNameUseCase } from "../../music/useCases/listMusicByPlaylistName/ListMusicByPlaylistNameUseCase";
import axios from 'axios';


class OpenWeatherController {
    constructor(private listMusicByPlaylistNameUseCase: ListMusicByPlaylistNameUseCase) {}

    async handle(request: Request, response: Response) {
        const API_key = 'c1b84cb8664d105528565de1fa1e3988';
        const { city_name, lat, lon, mode } = request.body;
        try {
            if(mode === 'city_name') {
                const temp = await this.cityNameMode(city_name, API_key);
                const musicListByTemp = await this.musicPlaylistByTemp(temp.main.temp)

                const returnInfo = {
                    city: temp.name,
                    temp: temp.main.temp,
                    style: musicListByTemp.style,
                    playlist: musicListByTemp.playlist
                }

                return response.json(returnInfo);
            }else if(mode === 'latitude&longitude') {
                const temp = await this.latitudeAndLongitudeMode(lat, lon, API_key)
                const musicListByTemp = await this.musicPlaylistByTemp(temp.main.temp)

                const returnInfo = {
                    city: temp.name,
                    temp: temp.main.temp,
                    style: musicListByTemp.style,
                    playlist: musicListByTemp.playlist
                }

                return response.json(returnInfo);
            }
            
            return response.json({ message: 'Invalid request mode!' });
        } catch(error) {
            return response.status(400).json({ error: error.message })
        }
    }

    async cityNameMode(city: string, API_key: string): Promise<any> {
        const lang = 'pt_br'
        
        const responseData = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}`)
        
        const lat = responseData.data[0].lat
        const lon = responseData.data[0].lon
        
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&lang=${lang}&units=metric`)
        
        return weather.data;
    }

    async latitudeAndLongitudeMode(lat: string, lon: string, API_key: string) {
        const lang = 'pt_br'
        
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&lang=${lang}&units=metric`)
        
        return weather.data;
    }

    async musicPlaylistByTemp(temp: number) {
        if(temp > 30) {
            const playlist = await this.listMusicByPlaylistNameUseCase.execute({ playlist_name: 'Músicas para festa' })
            return { style: 'Músicas para festa', playlist }
        }else if(15 <= temp && temp <= 30) {
            const playlist = await this.listMusicByPlaylistNameUseCase.execute({ playlist_name: 'Pop' })
            return { style: 'Pop', playlist }
        }else if(10 <= temp && temp < 15) {
            const playlist = await this.listMusicByPlaylistNameUseCase.execute({ playlist_name: 'Rock' })
            return { style: 'Rock', playlist }
        }else{
            const playlist = await this.listMusicByPlaylistNameUseCase.execute({ playlist_name: 'Música Clássica' })
            return { style: 'Músicas clássicas', playlist }
        }
    }
}

export { OpenWeatherController }