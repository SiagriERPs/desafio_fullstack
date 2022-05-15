import { Playlist } from "../entities/Playlist";


interface ICreatePlaylistDTO {
    name: string;
}

interface IPlaylistRepository {
    create({ name }: ICreatePlaylistDTO): Promise<void>;
    list(): Promise<Playlist[]>;
}

export { IPlaylistRepository };