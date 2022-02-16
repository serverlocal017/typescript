interface WithId<T> {
    id: T
}


class Track implements WithId<string> {
    id: string;
    title: string = 'Untitled';
    artist: string = 'Uknown';
    release: number | undefined;
    isFav?: boolean

    constructor(
        id: string,
        title: string,
        artist: string,
        release: number,
        isFav?: boolean
    ) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.release = release;
        this.isFav = isFav;
    }
}


class Playlist<T extends WithId<IdType>, IdType> {
    items: T[] = [];

    addToPlaylist(newItem: T) {
        this.items.push(newItem); 
    }

    removeFromPlaylist(idToRemove: IdType) {
        this.items = this.items.filter(item => item.id !== idToRemove);
    }
}


const myTrack = new Track('1', 'James Hagen', 'Queen D', 1975);
const playlist = new Playlist<Track, string>();

playlist.addToPlaylist(myTrack);

class VideoClip {
    id: number;
    name: string = 'Untitled';

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const videoPlaylist = new Playlist<VideoClip, number>();

videoPlaylist.addToPlaylist(new VideoClip(1, 'asdsadsda'))