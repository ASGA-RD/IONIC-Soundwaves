import { Swiper, SwiperSlide } from "swiper/react"; // dependência swiper - slider
import "swiper/css";

import React, { useState, useMemo, useEffect } from 'react';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonModal, IonList, IonItem, IonLabel} from '@ionic/react';
import { useLocation } from 'react-router-dom'; //navigate to album , hook para path
import './Albums.css';
import albumsData from "../data/albums.json";

interface Album {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  cover: string;
  releaseDate: string;
  tracks: { n: number; title: string; duration: string }[];
}

const Albums: React.FC = () => {
  const location = useLocation(); //hook do navigate to album
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null); // state null album selecionado
  const [isModalOpen, setIsModalOpen] = useState(false); // estado de uso do modal dos albums

  //função opening do modal
  const openModal = (album: Album) => {
    setSelectedAlbum(album); //substituir o null por "album"
    setIsModalOpen(true);
  };

  //função closing do modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAlbum(null);
  };

  //agrupar por genre / usar memoria
  const groupedAlbums = useMemo(() => {
    return albumsData.reduce((acc: { [key: string]: Album[] }, album) => {
      const genre = album.genre;
      if (!acc[genre]) {
        acc[genre] = [];
      }
      acc[genre].push(album);
      return acc;
    }, {});
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const albumId = params.get('album');
    if (albumId) {
      const album = albumsData.find(a => a.id === albumId); //conecta os .json
      if (album) {
        openModal(album);
      }
    }
  }, [location.search]);

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

        <IonGrid>

        {/* title */}
        <div className="main-title">
          <h2 className="main-title">Albums</h2>
        </div>

          {/* genre sections */}
          {Object.entries(groupedAlbums).map(([genre, albums], index) => (
            <IonRow key={genre}>
              <IonCol size="12">
                <h3 className="genre-title genre-box">{genre}</h3>
                <Swiper
                  //espaçamento entre imgs
                  spaceBetween={-100}
                  slidesPerView={1}
                  loop={true}

                  //para diferentes tamanhos de tele, n de slides / 640px;768px;1024px
                  breakpoints={{640: {slidesPerView: 2}, 768: {slidesPerView: 3}, 1024: {slidesPerView: 4}}}>
                  
                  {albums.map((album) => (
                    //abrir o modal no click + img
                    <SwiperSlide key={album.id}>
                      <div className="album-slide" onClick={() => openModal(album)}>
                        <img src={album.cover} alt={album.title} className="album-cover" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

              </IonCol>
            </IonRow>
          ))}

        </IonGrid>

        {/* ------ modal ------ */}
        <IonModal isOpen={isModalOpen} onDidDismiss={closeModal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>{selectedAlbum?.title}</IonTitle>
              <IonButton slot="end" fill="clear" onClick={closeModal}>
                Close
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {selectedAlbum && (
              <IonGrid className="ion-padding">
                <IonRow>
                  <IonCol size="12" sizeMd="4">
                    <img src={selectedAlbum.cover} alt={selectedAlbum.title} className="modal-album-cover" />
                  </IonCol>
                  <IonCol className="modal-album-info" size="12" sizeMd="8">
                    <h3 className="modal-h3">{selectedAlbum.title}</h3>
                    <p className="modal-p"><strong>Artist:</strong> {selectedAlbum.artist}</p>
                    <p className="modal-p"><strong>Genre:</strong> {selectedAlbum.genre}</p>
                    <p className="modal-p"><strong>Release Date:</strong> {selectedAlbum.releaseDate}</p>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <h4 className="modal-h4">Tracks</h4>
                    <IonList>
                      {selectedAlbum.tracks.map((track) => (
                        <IonItem key={track.n}>
                          <IonLabel className="modal-tracks">
                            {track.n}. {track.title} - {track.duration}
                          </IonLabel>
                        </IonItem>
                      ))}
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