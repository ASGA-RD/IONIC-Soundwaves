import { Swiper, SwiperSlide } from "swiper/react"; // dependência swiper - slider
import "swiper/css";

import React, { useState, useMemo, useEffect } from 'react';
import {IonPage, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonModal, IonList, IonItem, IonLabel} from '@ionic/react';
import './Albums.css';
import {logoSoundcloud } from 'ionicons/icons'; // icone

const Albums: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // estado de uso do modal dos albums

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
            <IonRow>
              <IonCol size="12">
                <h3 className="genre-title genre-box"> Hip-Hop</h3>
                <Swiper
                  //espaçamento entre imgs
                  spaceBetween={100}
                  slidesPerView={5}
                  loop={true}>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t2.jpg" alt="t2" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t1.jpg" alt="t1" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t3.jpg" alt="t3" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t4.jpg" alt="t4" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t5.jpg" alt="t5" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t6.jpg" alt="t6" className="album-cover" />
                      </div>
                    </SwiperSlide>
                </Swiper>

              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="12">
                <h3 className="genre-title genre-box"> Soul</h3>
                <Swiper
                  //espaçamento entre imgs
                  spaceBetween={100}
                  slidesPerView={5}
                  loop={true}>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t2.jpg" alt="t2" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t1.jpg" alt="t1" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t3.jpg" alt="t3" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t4.jpg" alt="t4" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t5.jpg" alt="t5" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t6.jpg" alt="t6" className="album-cover" />
                      </div>
                    </SwiperSlide>
                </Swiper>

              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="12">
                <h3 className="genre-title genre-box"> R&B</h3>
                <Swiper
                  //espaçamento entre imgs
                  spaceBetween={100}
                  slidesPerView={5}
                  loop={true}>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t2.jpg" alt="t2" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t1.jpg" alt="t1" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t3.jpg" alt="t3" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t4.jpg" alt="t4" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t5.jpg" alt="t5" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t6.jpg" alt="t6" className="album-cover" />
                      </div>
                    </SwiperSlide>
                </Swiper>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="12">
                <h3 className="genre-title genre-box"> Jazz</h3>
                <Swiper
                  //espaçamento entre imgs
                  spaceBetween={100}
                  slidesPerView={5}
                  loop={true}>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t2.jpg" alt="t2" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t1.jpg" alt="t1" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t3.jpg" alt="t3" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t4.jpg" alt="t4" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t5.jpg" alt="t5" className="album-cover" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="album-slide" onClick={() => setIsModalOpen(true)}>
                        <img src="tracks-cover/t6.jpg" alt="t6" className="album-cover" />
                      </div>
                    </SwiperSlide>
                </Swiper>

              </IonCol>
            </IonRow>

        </IonGrid>

        {/* ------ modal ------ */}
        <IonModal isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Urban Relics</IonTitle>
              <IonButton slot="end" fill="clear" onClick={() => setIsModalOpen(false)}>
                Close
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent>
              <IonGrid className="ion-padding">
                <IonRow>
                  <IonCol size="12" sizeMd="4">
                    <img src="tracks-cover/t2.jpg" alt="t2" className="modal-album-cover" />
                  </IonCol>
                  <IonCol className="modal-album-info" size="12" sizeMd="8">
                    <h3 className="modal-h3"> Urban Relics
                      <IonButton className="soundcloud-btn" fill="clear">
                        <IonIcon slot="icon-only" icon={logoSoundcloud}></IonIcon>
                      </IonButton>
                    </h3>
                    <div className="modal-cont">
                    <p className="modal-p"><strong>Artist:</strong> Midnight Syntax </p>
                    <p className="modal-p"><strong>Genre:</strong> Hip-Hop</p>
                    <p className="modal-p"><strong>Release Date:</strong> "2023-05-15"</p>
                    </div>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <h4 className="modal-h4">Tracks</h4>
                    <IonList>
                        <IonItem>
                          <IonLabel className="modal-tracks">
                                  1 | Backseat Scriptures | duration: 3:22
                          </IonLabel>
                        </IonItem>
                        <IonItem>
                          <IonLabel className="modal-tracks">
                                  2 | Graffiti Gospel | duration: 2:58
                          </IonLabel>
                        </IonItem>
                        <IonItem>
                          <IonLabel className="modal-tracks">
                                  3 | Metro Archive | duration: 3:45
                          </IonLabel>
                        </IonItem>
                    </IonList>
                  </IonCol>
                </IonRow>
              </IonGrid>
          </IonContent>
        </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default Albums;

/* project By Guilherme Andrade - A045395 */