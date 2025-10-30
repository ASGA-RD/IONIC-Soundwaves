import React, { useState } from 'react';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSearchbar, IonList, IonItem, IonLabel, IonAvatar, IonRow, IonCol, IonIcon, IonModal, IonCheckbox, IonButtons} from '@ionic/react';
import { filterOutline } from 'ionicons/icons'; // icones, respetivamente, back to top & filtro
import './Tracks.css';

const Tracks: React.FC = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false); // estado de uso do modal de filtros

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
      <IonContent>
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
                <IonButton>Clear</IonButton>
                <IonButton>Apply</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
                <IonItem>
                  <IonLabel> Hip-Hop </IonLabel>
                  <IonCheckbox/>
                </IonItem>
                <IonItem>
                  <IonLabel> Soul</IonLabel>
                  <IonCheckbox/>
                </IonItem> 
                <IonItem>
                  <IonLabel> Jazz </IonLabel>
                  <IonCheckbox/>
                </IonItem> 
                <IonItem>
                  <IonLabel> R&B </IonLabel>
                  <IonCheckbox/>
                </IonItem> 
            </IonList>
          </IonContent>
        </IonModal>

        {/* search */}
        <div className="search search-box">
          <IonSearchbar
            placeholder="Search by title, artist or album"/>
        </div>

        {/* list */}
        <IonList inset>
            <IonItem>
              <IonAvatar slot="start">
                <img src="/tracks-cover/t2.jpg" alt="t1" />
              </IonAvatar>
              <IonLabel>
                <h2>Backseat Scriptures | Urban Relics </h2>
                <p>Midnight Syntax — Hip-Hop</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <img src="/tracks-cover/t1.jpg" alt="t1" />
              </IonAvatar>
              <IonLabel>
                <h2>Velvet Avenue | Golden Hour Tapes </h2>
                <p>The Indigo Notes — Soul</p>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonAvatar slot="start">
                <img src="/tracks-cover/t3.jpg" alt="t1" />
              </IonAvatar>
              <IonLabel>
                <h2>Honeyline | Soft Electric </h2>
                <p>Velvet Motion — R&B</p>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonAvatar slot="start">
                <img src="/tracks-cover/t4.jpg" alt="t1" />
              </IonAvatar>
              <IonLabel>
                <h2>Late Hour Swing | Late Hour Stories </h2>
                <p>The Groove Parliament — Jazz</p>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonAvatar slot="start">
                <img src="/tracks-cover/t5.jpg" alt="t1" />
              </IonAvatar>
              <IonLabel>
                <h2>Roots Mosaic | Island Static </h2>
                <p>Dub Assembly — Soul</p>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonAvatar slot="start">
                <img src="/tracks-cover/t6.jpg" alt="t1" />
              </IonAvatar>
              <IonLabel>
                <h2>Satin Skyline | Velvet Skyline </h2>
                <p>Ivy & Jade — R&B</p>
              </IonLabel>
            </IonItem>
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tracks;

/* project By Guilherme Andrade - A045395 */