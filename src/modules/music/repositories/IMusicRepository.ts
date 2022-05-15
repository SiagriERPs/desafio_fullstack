import { Music } from "../entities/Music";

interface ICreateMusicDTO {
    name: string;
    playlist_id?: string;
}

interface IMusicRepository {
    listByPlaylistId(playlist_id: string): Promise<Music[]>;
    listByPlaylistName(playlist_name: string): Promise<Music[]>;
    list(): Promise<Music[]>;
    create(data: ICreateMusicDTO): Promise<void>;
}

export { IMusicRepository };