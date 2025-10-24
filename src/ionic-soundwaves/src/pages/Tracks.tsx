import React, { useRef, useState } from 'react';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSearchbar, IonList, IonItem, IonLabel, IonAvatar, IonRow, IonCol, IonFab, IonFabButton, IonIcon, IonModal, IonCheckbox, IonButtons} from '@ionic/react';
import { chevronUpOutline, filterOutline } from 'ionicons/icons'; // icones, respetivamente, back to top & filtro
import { useHistory } from 'react-router-dom'; //navigate to album , dependência
import './Tracks.css';
import tracksData from '../data/tracks.json';
import albumsData from '../data/albums.json';

const SCROLL_THRESHOLD = 350; // mostrar fab back top button

const Tracks: React.FC = () => {
  const history = useHistory(); // history data para fazer ligação com album
  const [query, setQuery] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false); // estado de uso do botão de back to top
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false); // estado de uso do modal de filtros
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const contentRef = useRef<HTMLIonContentElement>(null);

  const uniqueGenres = ['Hip-Hop', 'Soul', 'R&B', 'Jazz'];

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  // filtro resultados search
  const filtered = tracksData.filter((t) => {
    const matchesSearch = [t.title, t.artist, t.genre, t.album].some((v) =>
      v.toLowerCase().includes(query.toLowerCase())
    );
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.includes(t.genre);
    return matchesSearch && matchesGenre;
  });

  // fab back top, esconder e mostrar
  const handleScroll = (e: CustomEvent) => {
    const top = (e as any).detail?.scrollTop ?? 0;
    setShowBackToTop(top > SCROLL_THRESHOLD);
  };

  // scroll top anm
  const scrollToTop = () => {
    contentRef.current?.scrollToTop(500);
  };

  // navigate to album modal
  const navigateToAlbum = (albumTitle: string) => {
    const album = albumsData.find(a => a.title === albumTitle);
    if (album) {
      history.push(`/albums?album=${album.id}`);
    }
  };

  return (
    <IonPage>
      {/* ------ Header ------ */}
      <IonHeader translucent>
        <IonToolbar className="toolbar-center">
        <IonButton routerLink="/home" fill="clear" className="logo-btn">
          <img src="/logo.png" alt="Ionic Soundwaves logo" className="logo-img"/>
          <div><IonTitle className="logo-title">Ionic Soundwaves</IonTitle></div>
        </IonButton>
        </IonToolbar>
      </IonHeader>

      {/* ------ main ------ */}
      <IonContent ref={contentRef} fullscreen scrollEvents={true} onIonScroll={handleScroll}>
        <div className="slogan">
          <p>underground • soul • hip-hop</p>
        </div>

        {/* nav buttons */}
        <IonRow className="top-nav-row">
          <IonCol size="6" sizeMd="3">
            <IonButton className="nav-row" expand="block" color="medium" fill="outline" routerLink="/tracks">Tracks</IonButton>
          </IonCol>
          <IonCol size="6" sizeMd="3">
            <IonButton className="nav-row" expand="block" routerLink="/albums">Albums</IonButton>
          </IonCol>
        </IonRow>

        {/* title */}
        <div className="main-title">
          <h2 className="main-title">Tracks</h2>
        </div>

        {/* filter but */}
        <div className="filter-section">
          <IonButton fill="clear" onClick={() => setIsFilterModalOpen(true)}>
            <IonIcon slot="icon-only" icon={filterOutline}></IonIcon>
          </IonButton>
        </div>

        {/* filter modal */}
        <IonModal className="filter-modal" isOpen={isFilterModalOpen} onDidDismiss={() => setIsFilterModalOpen(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle className="filter-title">Filter by Genre</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => { setSelectedGenres([/* vazio */]); setIsFilterModalOpen(false); }}>Clear</IonButton>
                <IonButton onClick={() => setIsFilterModalOpen(false)}>Apply</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              {uniqueGenres.map((genre) => (
                <IonItem key={genre}>
                  <IonLabel>{genre}</IonLabel>
                  <IonCheckbox slot="end" checked={selectedGenres.includes(genre)} onIonChange={() => toggleGenre(genre)} />
                </IonItem>
              ))}
            </IonList>
          </IonContent>
        </IonModal>

        {/* search */}
        <div className="search search-box">
          <IonSearchbar
            placeholder="Search by title, artist or album"
            value={query}
            debounce={150}
            onIonInput={(e) => setQuery(e.detail.value!)}
          />
        </div>

        {/* list */}
        <IonList inset>
          {filtered.map((t) => (
            <IonItem key={t.id} button onClick={() => navigateToAlbum(t.album)}>
              <IonAvatar slot="start">
                <img src={t.cover} alt={t.title} />
              </IonAvatar>
              <IonLabel>
                <h2>{t.title} | {t.album} </h2>
                <p>{t.artist} — {t.genre}</p>
              </IonLabel>
            </IonItem>
          ))}

          {filtered.length === 0 && (
            <IonItem>
              <IonLabel>No tracks found.</IonLabel>
            </IonItem>
          )}
        </IonList>

        {/* fab back top */}
        <IonFab slot="fixed" vertical="bottom" horizontal="end" className={`back-to-top ${showBackToTop ? 'show' : ''}`}>
          <IonFabButton aria-label="Back to top" onClick={scrollToTop}>
            <IonIcon icon={chevronUpOutline} />
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Tracks;