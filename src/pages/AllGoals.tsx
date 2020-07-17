import React from 'react';
import { IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonButtons, IonMenuButton } from '@ionic/react';

const AllGoals: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="ion-text-center">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>ALL Goals page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonContent className="ion-text-center">
                    <h3>ALL GOALS PAGE</h3>
                </IonContent>
            </IonContent>
        </IonPage>
    );
}

export default AllGoals;