var Track = /** @class */ (function () {
    function Track(title, artist, release, isFav) {
        this.title = 'Untitled';
        this.artist = 'Uknown';
        this.title = title;
        this.artist = artist;
        this.release = release;
        this.isFav = isFav;
    }
    return Track;
}());
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.tracks = [];
    }
    Playlist.prototype.addToPlaylist = function (newTrack) {
        console.log("Adding ".concat(newTrack, " to Playlist"));
    };
    Playlist.prototype.removeFromPlaylist = function (TrackToRemove) {
        console.log("Remove ".concat(TrackToRemove, " from Playlist"));
    };
    return Playlist;
}());
var myTrack = new Track('James Hagen', 'Queen D', 1975);
var playlist = new Playlist();
playlist.addToPlaylist(myTrack);
