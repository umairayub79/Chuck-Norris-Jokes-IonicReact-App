import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonCard, IonLoading, IonSpinner } from '@ionic/react';
import {FC, useState, useEffect } from 'react';
import useAxios from 'axios-hooks'
import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

import "./Loader.css";


const URL = `http://api.icndb.com/jokes/`;

const Home: FC = () => {

 

  //fetch all jokes
const [{ data, loading, error }, fetchJokes] = useAxios(
  URL
)
  const [ jokes, setJokes ] = useState([]);
  // const items: any[] = [];

  useEffect(() => {
    fetchJokes ().then(data => setJokes(data.data.value));
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
        {loading ? (
          <div className="loader">
            <IonSpinner name="crescent"/>
          </div>
       
        ) : (
          jokes.map((a, index) => {
            return(
              <IonCard key={index}>
              <IonItem>
                {a['joke'] }
              </IonItem>
              </IonCard>
            )
          })
        
      )}


          
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;