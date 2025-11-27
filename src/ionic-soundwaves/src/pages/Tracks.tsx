import React, { useState, useEffect } from 'react';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSearchbar, IonList, IonItem, IonLabel, IonAvatar, IonRow, IonCol, IonIcon, IonModal, IonCheckbox, IonButtons} from '@ionic/react';
import { filterOutline } from 'ionicons/icons';
import './Tracks.css';
import { SpotifyService } from '../services/spotify.service';

const albumIds = '0hvT3yIEysuuvkK73vgdcW,7lc43Wd0bsY6agW6UIbDH2,18XFe4CPBgVezXkxZP6rTb';

const Tracks: React.FC = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [tracks, setTracks] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  // tracks + géneros
  useEffect(() => {
    const s = new SpotifyService();
    s.getTracksWithGenres(albumIds)
      .then(setTracks)
      .catch((err) => {
        console.error(err);
        setTracks([]);
      });
  }, []);

  // lista filt + caps
  const term = search.toLowerCase().trim();
  const filteredTracks = term
    ? tracks.filter((track: any) => {
        const nameMatch = track.name.toLowerCase().includes(term);
        const albumMatch =
          track.albumName && track.albumName.toLowerCase().includes(term);
        const artistMatch =
          track.artists &&
          track.artists.some((a: any) => a.name?.toLowerCase().includes(term));
        return nameMatch || albumMatch || artistMatch;
      })
    : [];

  return (
    <IonPage>
      {/* ------ Header ------ */}
      <IonHeader translucent>
        <IonToolbar className="toolbar-center">
          <IonButton routerLink="/home" fill="clear" className="logo-btn">
            <img src="/logo.png" alt="Ionic Soundwaves logo" className="logo-img" />
            <div><IonTitle className="logo-title">Ionic Soundwaves</IonTitle></div>
          </IonButton>
        </IonToolbar>
      </IonHeader>

      {/* ------ main ------ */}
      <IonContent>
        <div className="slogan">
          <p>underground • soul • hip-hop</p>
        </div>

        {/* nav buttons */}
        <IonRow className="top-nav-row">
          <IonCol size="6" sizeMd="3">
            <IonButton
              className="nav-row"
              expand="block"
              color="medium"
              fill="outline"
              routerLink="/tracks"
            >
              Tracks
            </IonButton>
          </IonCol>
          <IonCol size="6" sizeMd="3">
            <IonButton className="nav-row" expand="block" routerLink="/albums">
              Albums
            </IonButton>
          </IonCol>
        </IonRow>

        {/* title */}
        <div className="main-title">
          <h2 className="main-title">Tracks</h2>
        </div>

        {/* filter but */}
        <div className="filter-section">
          <IonButton fill="clear" onClick={() => setIsFilterModalOpen(true)}>
            <IonIcon slot="icon-only" icon={filterOutline} />
          </IonButton>
        </div>

        {/* filter modal */}
        <IonModal
          className="filter-modal"
          isOpen={isFilterModalOpen}
          onDidDismiss={() => setIsFilterModalOpen(false)}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle className="filter-title">Filter by Genre</IonTitle>
              <IonButtons slot="end">
                <IonButton>Clear</IonButton>
                <IonButton>Apply</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem><IonLabel>Hip-Hop</IonLabel><IonCheckbox /></IonItem>
              <IonItem><IonLabel>Soul</IonLabel><IonCheckbox /></IonItem>
              <IonItem><IonLabel>Jazz</IonLabel><IonCheckbox /></IonItem>
              <IonItem><IonLabel>R&B</IonLabel><IonCheckbox /></IonItem>
            </IonList>
          </IonContent>
        </IonModal>

        {/* search */}
        <div className="search search-box">
          <IonSearchbar
            value={search}
            debounce={300}
            onIonChange={(e) => setSearch(e.detail.value || '')}
            placeholder="Search by title, artist or album"/>
        </div>

        {/* list */}
        <IonList>
          {filteredTracks.map((track: any) => (
            <IonItem key={track.id}>
              <IonAvatar>
                <img src={track.albumImages?.[0]?.url} alt={track.albumName} />
              </IonAvatar>

              <IonLabel>
                <h2>{track.name}</h2>
                <p>Album: {track.albumName}</p>
                <p>Artist:{' '} {track.artists?.length ? track.artists.map((a: any) => a.name).join(', ') : ''}</p>
                <p>Genre:{' '} {track.genres?.length ? track.genres.join(', ') : ''}</p>
              </IonLabel>

              {track.preview_url && (<IonButton slot="end" onClick={() => window.open(track.preview_url, '_blank')}>
                  Preview
                </IonButton>)}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tracks;

/* project By Guilherme Andrade - A045395 */