import React, { useState, useEffect } from 'react';
import {IonPage, IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonModal} from '@ionic/react';
import './Home.css';
import { informationCircleOutline, logoYoutube, logoInstagram, logoSoundcloud, logoTwitter } from 'ionicons/icons'; // icone
import { SpotifyService } from '../services/spotify.service';

const albumIds = '7h5xn0Olvx2p0eQcSt1Osy,2Lq2qX3hYhiuPckC8Flj21,6jZ1z25PyF4Yd3kHxt9rl1,0hvT3yIEysuuvkK73vgdcW,4eLPsYPBmXABThSJ821sqY,3pLdWdkj83EYfDN6H2N8MR,50YNY0xy9uJ0U9eFQBdLJa,7vfuTRXIAYJz5Uc8SddnTr,0ks45m1bsP2JsZpM5D2FFA,79ONNoS4M9tfIA1mYLBYVX,748dZDqSZy6aPXKcI9H80u,05DePtm7oQMdL3Uzw2Jmsc,1aGapZGHBovnmhwqVNI6JZ,3Pi6o8NqDPlEBilGeMKi8q,55tK4Ab7XHTOKkw0xDz3AA';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [albums, setAlbums] = useState<any[]>([]);

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
            <IonButton expand="block" routerLink="/albums">Albums</IonButton>
          </IonCol>
          <IonCol size="6" sizeMd="0">
            <IonButton fill="clear" expand="block" className="info-btn" onClick={() => setShowModal(true)}>
              <IonIcon slot="icon-only" icon={informationCircleOutline}></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>

        {/* Info Modal */}
    <IonModal className="info-modal" isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About Ionic Soundwaves</IonTitle>
          <IonButton slot="end" fill="clear" onClick={() => setShowModal(false)}>Close</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonRow>
          <IonCol size="12" sizeMd="4">
            <img src="/team.jfif" alt="Ionic Soundwaves Team" className="modal-team-cover" />
          </IonCol>
          <IonCol>
            <p>Ionic Soundwaves was founded in 1993 with a passion for underground music. Our mission is to promote soulful and hip-hop artists from around the world, providing a platform for emerging talents to share their stories through beats and lyrics.</p>
            <p>Over the years, we've grown from a small local label to a recognized name in the industry, collaborating with artists around the world. We believe in the power of music to connect people and inspire change.</p>
            <p>Thank you for being part of our journey. Stay tuned for more releases and events!</p>
            <IonButton onClick={() => window.open('https://www.instagram.com', '_blank')}>
              <IonIcon slot="icon-only" icon={logoInstagram}></IonIcon>
            </IonButton>
            <IonButton onClick={() => window.open('https://www.youtube.com', '_blank')}>
              <IonIcon slot="icon-only" icon={logoYoutube}></IonIcon>
            </IonButton>
            <IonButton onClick={() => window.open('https://soundcloud.com', '_blank')}>
              <IonIcon slot="icon-only" icon={logoSoundcloud}></IonIcon>
            </IonButton>
            <IonButton onClick={() => window.open('https://twitter.com', '_blank')}>
              <IonIcon slot="icon-only" icon={logoTwitter}></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonModal>

        {/* title */}
        <div className="main-title">
          <h2 className="main-title">New & Releases</h2>
        </div>

      <IonGrid>
        {/* row 1 */}
        <IonRow>
          {/* card 1 (left) */}
          <IonCol size="12" sizeMd="6">
            <IonCard className="news-card">
              <div className="news-img-wrap tall">
                <img src={albums[0]?.images?.[0]?.url} alt={albums[0]?.name} className="news-img"/>
              </div>
              <IonCardHeader>
                <IonCardTitle><strong>Release:</strong> {albums[0]?.name} </IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="news-text"> {albums[0]?.uri} </IonCardContent>
            </IonCard>
          </IonCol>

          {/* card 2 (right) */}
          <IonCol size="12" sizeMd="6">
            <IonCard className="news-card">
              <div className="news-img-wrap tall">
                <img src={albums[4]?.images?.[0]?.url} alt={albums[4]?.name} className="news-img"/>
              </div>
              <IonCardHeader>
                <IonCardTitle><strong>Showcase:</strong> {albums[4]?.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="news-text"> {albums[4]?.uri} </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>

        {/* row 2 */}
        <IonRow>
          {/* card 3 */}
          <IonCol size="12" sizeMd="4">
            <IonCard className="news-card">
              <div className="news-img-wrap">
                <img src={albums[8]?.images?.[0]?.url} alt={albums[8]?.name} className="news-img"/>
              </div>
              <IonCardHeader>
                <IonCardTitle><strong>Release:</strong> {albums[8]?.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="news-text"> {albums[8]?.uri} </IonCardContent>
            </IonCard>
          </IonCol>

          {/* card 4 */}
          <IonCol size="12" sizeMd="4">
            <IonCard className="news-card">
              <div className="news-img-wrap">
                <img src={albums[10]?.images?.[0]?.url} alt={albums[10]?.name} className="news-img"/>
              </div>
              <IonCardHeader>
                <IonCardTitle><strong>Showcase:</strong> {albums[10]?.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="news-text"> {albums[10]?.uri} </IonCardContent>
            </IonCard>
          </IonCol>

          {/* card 5 */}
          <IonCol size="12" sizeMd="4">
            <IonCard className="news-card">
              <div className="news-img-wrap">
                <img src={albums[2]?.images?.[0]?.url} alt={albums[2]?.name} className="news-img"/>
              </div>
              <IonCardHeader>
                <IonCardTitle><strong>Release:</strong> {albums[2]?.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="news-text"> {albums[2]?.uri} </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>

      </IonGrid>
    </IonContent>
  </IonPage>
);
}
export default Home;

/* project By Guilherme Andrade - A045395 */