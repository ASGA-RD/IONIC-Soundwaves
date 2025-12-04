import { Swiper, SwiperSlide } from "swiper/react"; // dependência swiper - slider
import "swiper/css";

import React, { useState, useMemo, useEffect } from 'react';
import {IonPage, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonModal, IonList, IonItem, IonLabel} from '@ionic/react';
import './Albums.css';
import { SpotifyService } from '../services/spotify.service';

const albumIds = '7h5xn0Olvx2p0eQcSt1Osy,2Lq2qX3hYhiuPckC8Flj21,6jZ1z25PyF4Yd3kHxt9rl1,0hvT3yIEysuuvkK73vgdcW,4eLPsYPBmXABThSJ821sqY,50YNY0xy9uJ0U9eFQBdLJa,7vfuTRXIAYJz5Uc8SddnTr,0ks45m1bsP2JsZpM5D2FFA,79ONNoS4M9tfIA1mYLBYVX,748dZDqSZy6aPXKcI9H80u,1aGapZGHBovnmhwqVNI6JZ,3Pi6o8NqDPlEBilGeMKi8q';

const Albums: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // estado de uso do modal dos albums
  const [albums, setAlbums] = useState<any[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<any | null>(null);

  // carregar álbuns
  useEffect(() => {
    const s = new SpotifyService();

    s.getAlbums(albumIds)
      .then((data) => {
        setAlbums(data.albums || []);
      })
      .catch((err) => {
        console.error(err);
        setAlbums([]);
      });
  }, []);

  // 1 row por artista
  const albumsByArtist = useMemo(() => {
    const groups: Record<string, any[]> = {};

    albums.forEach((album: any) => {
      const artistName = album.artists?.[0]?.name || 'Unknown';
      if (!groups[artistName]) {
        groups[artistName] = [];
      }
      groups[artistName].push(album);
    });

    return groups;
  }, [albums]);

  const handleOpenAlbumModal = (album: any) => {
    setSelectedAlbum(album);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAlbum(null);
  };

  return (
    <IonPage>
      {/* ------ header ------ */}
      <IonHeader translucent>
        <IonToolbar className="toolbar">
          {/* logo button (center) */}
        <IonButton routerLink="/home" fill="clear" className="logo-btn">
          <img src="/logo.png" alt="Ionic Soundwaves logo" className="logo-img"/>
          <div><IonTitle className="logo-title">Ionic Soundwaves</IonTitle></div>
        </IonButton>
        </IonToolbar>
      </IonHeader>

      {/* ------ main ------ */}
      <IonContent fullscreen>
        <div className="slogan">
          <p>underground • soul • hip-hop</p>
        </div>

          {/* nav buttons */}
          <IonRow className="top-nav-row">
            <IonCol size="6" sizeMd="3">
              <IonButton expand="block" routerLink="/tracks">Tracks</IonButton>
            </IonCol>
            <IonCol size="6" sizeMd="3">
              <IonButton expand="block" color="medium" fill="outline" routerLink="/albums">Albums</IonButton>
            </IonCol>
          </IonRow>

          {/* swiper grid */}
          <IonGrid>
          {/* title */}
          <div className="main-title">
            <h2 className="main-title">Albums</h2>
          </div>

          {/* 1 row por artista */}
          {Object.entries(albumsByArtist).map(([artistName, artistAlbums]) => (
              <IonRow key={artistName}>
                <IonCol size="12">
                  <h3 className="genre-title genre-box">{artistName}</h3>

                  <Swiper spaceBetween={100} slidesPerView={4} loop={false}>
                    {(artistAlbums as any[]).map((album) => ( 
                      <SwiperSlide key={album.id}>
                        <div className="album-slide" onClick={() => handleOpenAlbumModal(album)}>
                          <img src={album.images?.[0]?.url} alt={album.name} className="album-cover" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </IonCol>
              </IonRow>
            )
          )}
        </IonGrid>

        {/* ------ modal ------ */}
        <IonModal isOpen={isModalOpen} onDidDismiss={handleCloseModal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>{selectedAlbum?.name || 'Album'}</IonTitle>
              <IonButton slot="end" fill="clear" onClick={handleCloseModal}>
                Close
              </IonButton>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            {selectedAlbum && (
              <IonGrid className="ion-padding">
                <IonRow>
                  <IonCol size="12" sizeMd="4">
                    <img src={selectedAlbum.images?.[0]?.url} alt={selectedAlbum.name} className="modal-album-cover"/>
                  </IonCol>

                  <IonCol className="modal-album-info" size="12" sizeMd="8">
                    <h3 className="modal-h3"> {selectedAlbum.name} </h3>

                    <div className="modal-cont">
                      <p className="modal-p"> Artist:{' '} {selectedAlbum.artists?.[0]?.name || 'Unknown'} </p>
                      <p className="modal-p"> Release Date:{' '} {selectedAlbum.release_date || 'Unknown'} </p>
                    </div>

                    <div>
                      <IonButton size="small" fill="outline" expand="block" slot="icon-only" onClick={() => window.open(selectedAlbum?.external_urls.spotify, '_blank') }> ᯤSpotify </IonButton>
                    </div>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol>
                    <h4 className="modal-h4">Tracks</h4>
                    <IonList>
                      {(selectedAlbum.tracks?.items || []).map(
                        (track: any) => (
                          <IonItem key={track.id}>
                            <IonLabel className="modal-tracks">
                              {track.name}
                            </IonLabel>
                          </IonItem>
                        )
                      )}
                    </IonList>
                  </IonCol>
                </IonRow>
              </IonGrid>
            )}
          </IonContent>
        </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default Albums;

/* project By Guilherme Andrade - A045395 */