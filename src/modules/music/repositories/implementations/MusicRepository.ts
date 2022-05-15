import { Repository, getRepository, getManager } from "typeorm";
import { Music } from "../../entities/Music";
import { IMusicRepository } from "../IMusicRepository";

interface ICreateMusicDTO {
    name: string;
    playlist_id?: string;
}

class MusicRepository implements IMusicRepository {

    private repository: Repository<Music>;
    private entityManager;

    constructor() {
        this.repository = getRepository(Music);
        this.entityManager = getManager();
    }

    async listByPlaylistName(playlist_name: string): Promise<Music[]> {
        const query = `select m.id, m.name, p.id as playlist_id, p.name as playlist_name  from music m
         join playlist p on p.id = m.playlist_id where p.name = '${playlist_name}'`

        const result = await this.repository.query(query)

        return result
    }

    async listByPlaylistId(playlist_id: string): Promise<Music[]> {
        const musicsInPlaylist = await this.repository.find({ playlist_id })

        return musicsInPlaylist;
    }

    async list(): Promise<Music[]> {
        const musics = await this.repository.find();

        return musics;
    }

    async create(data: ICreateMusicDTO): Promise<void> {
        const existMusic = await this.repository.findOne({ name: data.name })

        if(existMusic) {
            throw new Error('Music already exists!')
        }

        const newMusic = this.repository.create({
            ...data
        });

        await this.repository.save(newMusic)
    }

}

export { MusicRepository };