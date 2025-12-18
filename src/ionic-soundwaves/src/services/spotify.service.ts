import axios from 'axios';

export class SpotifyService {
  baseUrl = 'https://spotify23.p.rapidapi.com';
  apiKey = '921347acf3msh3c3573e19979965p111c8fjsnd6bf9d87eab9';
  host = 'spotify23.p.rapidapi.com';

  getAlbums(ids: string): Promise<any> {
    return axios({
      url: `${this.baseUrl}/albums/`,
      method: 'get',
      params: { ids },
      headers: {
        'x-rapidapi-key': this.apiKey,
        'x-rapidapi-host': this.host,
      },
    }).then((res) => res.data);
  }

  getArtists(ids: string): Promise<any> {
    return axios({
      url: `${this.baseUrl}/artists/`,
      method: 'get',
      params: { ids },
      headers: {
        'x-rapidapi-key': this.apiKey,
        'x-rapidapi-host': this.host,
      },
    }).then((res) => res.data);
  }

  getArtistsData(id: string): Promise<any> {
    return axios({
      url: `${this.baseUrl}/artist_discography_overview/`,
      method: 'get',
      params: { id },
      headers: {
        'x-rapidapi-key': this.apiKey,
        'x-rapidapi-host': this.host,
      },
    }).then((res) => res.data);
  }

  //------------------------------------------------------------------------------------------
  //helper
  //devolve as tracks com albumName, albumImages e genres
  async getTracksWithGenres(albumIds: string): Promise<any[]> {
    const data = await this.getAlbums(albumIds);
    const albums = data.albums || [];

    const allTracks = albums.flatMap((album: any) =>
      (album.tracks?.items || []).map((t: any) => ({
        ...t,
        albumName: album.name,
        albumImages: album.images,
        albumArtists: album.artists,
      }))
    );

    // ids dos artists
    const artistIds = Array.from(
      new Set(
        allTracks.flatMap((track: any) =>
          (track.artists || []).map((a: any) => a.id).filter(Boolean)
        )
      )
    );

    if (artistIds.length === 0) return allTracks;

    const artistsData = await this.getArtists(artistIds.join(','));
    const artists = artistsData.artists || [];

    const artistGenresMap = new Map<string, string[]>();
    artists.forEach((artist: any) => {
      artistGenresMap.set(artist.id, artist.genres || []);
    });

    return allTracks.map((track: any) => {
      const genresForTrack = (track.artists || []).flatMap((a: any) =>
        artistGenresMap.get(a.id) || []
      );
      const uniqueGenres = Array.from(new Set(genresForTrack));
      return { ...track, genres: uniqueGenres };
    });
  }

}

/* project By Guilherme Andrade - A045395 */