import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonCard } from '@ionic/react';
import {FC, useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

const URL = `http://api.icndb.com/jokes/`;


// fetch all articles
const fetchJokes  = () => {
  return axios({
    url: URL,
    method: 'get'
  }).then(response => {
    console.log(response);
    return response.data;
  })
};

const Home: FC = () => {

  const [ jokes, setJokes ] = useState([]);
  // const items: any[] = [];

  useEffect(() => {
    fetchJokes ().then(data => setJokes(data.value));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle>Chuck Norris Jokes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {
            jokes.map((a, index) => {
              return(
                <IonCard key={index}>
                <IonItem>
                  {a['joke']}
                  <br/> 
                </IonItem>
                </IonCard>
              )
            })
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;