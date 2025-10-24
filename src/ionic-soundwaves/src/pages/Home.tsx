import React from 'react';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent,} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => (
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
        </IonRow>

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
                <img src="src/data/tracks-cover/t27.jpg" alt="Release 1" className="news-img" />
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
                <img src="src/data/tracks-cover/t30.jpg" alt="Showcase 2" className="news-img" />
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
                <img src="src/data/tracks-cover/t7.jpg" alt="Hip-Hop Beats" className="news-img" />
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
                <img src="src/data/tracks-cover/t8.jpg" alt="Soul Showcase" className="news-img" />
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
                <img src="src/data/tracks-cover/t11.jpg" alt="Jazz Fusion" className="news-img" />
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
                <img src="src/data/tracks-cover/t19.jpg" alt="Rap Mixtape" className="news-img" />
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
                <img src="src/data/tracks-cover/t23.jpg" alt="Live Performance" className="news-img" />
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
                <img src="src/data/tracks-cover/t24.jpg" alt="R&B Release" className="news-img" />
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

export default Home;