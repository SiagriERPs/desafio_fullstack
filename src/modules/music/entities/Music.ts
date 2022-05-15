import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Playlist } from './Playlist';

@Entity('music')
class Music {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at?: Date;

    @ManyToOne(() => Playlist, (playlist) => playlist.id)
    @JoinColumn({ name: "playlist_id" })
    playlist_id?: string;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Music };