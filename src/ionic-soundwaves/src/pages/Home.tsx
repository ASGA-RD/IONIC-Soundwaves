import React, { useState } from 'react';
import {IonPage, IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonModal} from '@ionic/react';
import './Home.css';
import { informationCircleOutline, logoYoutube, logoInstagram, logoSoundcloud, logoTwitter } from 'ionicons/icons'; // icone

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

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
                <img src="tracks-cover/t27.jpg" alt="Release 1" className="news-img" />
              </div>
              <IonCardHeader>
                <IonCardTitle>Release: Indigo Rooms</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="news-text">
                New LP by Warm Colours — dusty drums and soulful samples.
              </IonCardContent>
            </IonCard>
          </IonCol>

          {/* card 2 (right) */}
          <IonCol size="12" sizeMd="6">
            <IonCard className="news-card">
              <div className="news-img-wrap tall">
                <img src="tracks-cover/t30.jpg" alt="Showcase 2" className="news-img" />
              </div>
              <IonCardHeader>
                <IonCardTitle>Showcase: Night Room</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="news-text">
                Local Porto Bar "Shadows" brings hip-hop nostalgia to the floor.
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>

        {/* row 2 */}
        <IonRow>
          {/* card 3 */}
          <IonCol size="12" sizeMd="4">
            <IonCard className="news-card">
              <div className="news-img-wrap">
                <img src="tracks-cover/t7.jpg" alt="Hip-Hop Beats" className="news-img" />
              </div>
              <IonCardHeader>
                <IonCardTitle>Release: Concrete Poetry</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="news-text">
                Underground rapper drops beats with gritty samples and raw lyricism.
              </IonCardContent>
            </IonCard>
          </IonCol>

          {/* card 4 */}
          <IonCol size="12" sizeMd="4">
            <IonCard className="news-card">
              <div className="news-img-wrap">
                <img src="tracks-cover/t8.jpg" alt="Soul Showcase" className="news-img" />
              </div>
              <IonCardHeader>
                <IonCardTitle>Showcase: Indigo Rooms</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="news-text">
                Intimate venue hosts soulful sets with live instrumentation and hip-hop vibes.
              </IonCardContent>
            </IonCard>
          </IonCol>

          {/* card 5 */}
          <IonCol size="12" sizeMd="4">
            <IonCard className="news-card">
              <div className="news-img-wrap">
                <img src="tracks-cover/t11.jpg" alt="Jazz Fusion" className="news-img" />
              </div>
              <IonCardHeader>
                <IonCardTitle>Release: Blue Smoke</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="news-text">
                Local artists fuse jazz improvisation with hip-hop rhythms for a fresh sound.
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>

         {/* row 3 */}
        <IonRow>
          {/* card 6 */}
          <IonCol size="12" sizeMd="4">
            <IonCard className="news-card">
              <div className="news-img-wrap">
                <img src="tracks-cover/t19.jpg" alt="Rap Mixtape" className="news-img" />
              </div>
              <IonCardHeader>
                <IonCardTitle>Mixtape: Eastline Echoes</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="news-text">
                New mixtape captures the essence of urban hip-hop with storytelling beats.
              </IonCardContent>
            </IonCard>
          </IonCol>

          {/* card 7 */}
          <IonCol size="12" sizeMd="4">
            <IonCard className="news-card">
              <div className="news-img-wrap">
                <img src="tracks-cover/t23.jpg" alt="Live Performance" className="news-img" />
              </div>
              <IonCardHeader>
                <IonCardTitle>Event: Hip-Hop Night - Low End Lanterns</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="news-text">
                Monthly event featuring live hip-hop performances and DJ sets in the city.
              </IonCardContent>
            </IonCard>
          </IonCol>

          {/* card 8 */}
          <IonCol size="12" sizeMd="4">
            <IonCard className="news-card">
              <div className="news-img-wrap">
                <img src="tracks-cover/t24.jpg" alt="R&B Release" className="news-img" />
              </div>
              <IonCardHeader>
                <IonCardTitle>Release: Sugar Radio</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="news-text">
                Singer-songwriter releases smooth R&B tracks with soulful melodies and hip-hop influences.
              </IonCardContent>
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