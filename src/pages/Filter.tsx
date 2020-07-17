import React from 'react';
import { filter } from 'ionicons/icons';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/react';

const Filter: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Filter</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2> This is Filter Page !</h2>
            </IonContent>
        </IonPage>
    )
}

export default Filter;