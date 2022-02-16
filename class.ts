interface WithId {
    id: string
}


class Track implements WithId {
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


class Playlist<T extends WithId> {
    items: T[] = [];

    addToPlaylist(newItem: T) {
        this.items.push(newItem);
    }

    removeFromPlaylist(idToRemove: string) {
        this.items = this.items.filter(item => item.id !== idToRemove),
    }
}


const myTrack = new Track('James Hagen', 'Queen D', 1975);
const playlist = new Playlist<Track>();

playlist.addToPlaylist(myTrack);

class VideoClip {
    name: string = 'Untitled';

    constructor(name: string) {
        this.name = name;
    }
}

const videoPlaylist = new Playlist<VideoClip>();

videoPlaylist.addToPlaylist(myTrack);
