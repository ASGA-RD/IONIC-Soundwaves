import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/react';
import { Chart } from 'react-google-charts';
import { SpotifyService } from '../services/spotify.service';

const artistIds = [
  '2ye2Wgw4gimLv2eAKyk1NB',
  '2YZyLoL8N0Wb9xBt1NhZWg',
  '0nmQIMXWTXfhgOBdNzhGOs',
];

const Stats: React.FC = () => {
  const { index } = useParams<{ index: string }>();
  const artistId = artistIds[Number(index)];

  const [title, setTitle] = useState('Artist Stats');
  const [data, setData] = useState<any[]>([
    ['Type', 'Total'],
    ['Albums', 0],
    ['Singles', 0],
    ['Compilations', 0],
  ]);

  useEffect(() => {
    if (!artistId) return;

    const s = new SpotifyService();

    s.getArtistsData(artistId).then((res) => {
      const a = res?.data?.artist;

      setTitle(a?.profile?.name || 'Artist Stats');

      setData([
        ['Type', 'Total'],
        ['Albums', a?.discography?.albums?.totalCount ?? 0],
        ['Singles', a?.discography?.singles?.totalCount ?? 0],
        ['Compilations', a?.discography?.compilations?.totalCount ?? 0],
      ]);
    });
  }, [artistId]);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonButton routerLink="/albums" fill="outline">
          Back
        </IonButton>
            <Chart chartType="PieChart" data={data} width={"100%"} height={"80%"}
            options={{title: 'Discography Overview', backgroundColor: 'transparent',
                legend: {textStyle: { color: '#fff' }},
                titleTextStyle: { color: '#fff'}
                }}/>
      </IonContent>
    </IonPage>
  );
};

export default Stats;