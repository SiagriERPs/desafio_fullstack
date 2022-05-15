import { getRepository, Repository } from "typeorm";
import { Playlist } from "../../entities/Playlist";
import { IPlaylistRepository } from "../IPlaylistRepository";

interface ICreatePlaylistDTO {
    name: string;
}

class PlaylistRepository implements IPlaylistRepository {

    private repository: Repository<Playlist>;

    constructor() {
        this.repository = getRepository(Playlist);
    }

    async create({ name }: ICreatePlaylistDTO): Promise<void> {
        const existPlaylist = await this.repository.findOne({ name });

        if(existPlaylist) {
            throw new Error('Playlist already exists!');
        }

        const newPlaylist = this.repository.create({ name });

        await this.repository.save(newPlaylist);
    }
    
    async list(): Promise<Playlist[]> {
        const playlists = await this.repository.find();

        return playlists;
    }

}

export { PlaylistRepository };