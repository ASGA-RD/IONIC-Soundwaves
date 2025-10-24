import React from 'react';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent,} from '@ionic/react';
import './Tracks.css';

const Home: React.FC = () => (
  <IonPage>
    {/* ------ header ------ */}
    <IonHeader translucent>
      <IonToolbar className="toolbar-center">
        {/* logo button (center) */}
        <IonButton routerLink="/home" fill="clear" className="logo-btn">
          <img
            src="/logo.png"
            alt="Ionic Soundwaves logo"
            className="logo-img"
          />
          <IonTitle className="logo-title">Ionic Soundwaves</IonTitle>
        </IonButton>
      </IonToolbar>
    </IonHeader>

    {/* ------ main ------ */}
    <IonContent fullscreen>
      <div className="slogan">
        <p>underground • soul • jazz</p>
      </div>

      <IonGrid className="ion-padding home-grid">
        {/* nav buttons */}
        <IonRow className="top-nav-row">
          <IonCol size="6" sizeMd="3">
            <IonButton expand="block" routerLink="/musics">Tracks</IonButton>
          </IonCol>
          <IonCol size="6" sizeMd="3">
            <IonButton expand="block" color="medium" fill="outline" routerLink="/albums">Albums</IonButton>
          </IonCol>
        </IonRow>

      </IonGrid>
    </IonContent>
  </IonPage>
);

export default Tracks;