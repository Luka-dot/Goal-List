import React from 'react';
import { IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonButtons, IonBackButton } from '@ionic/react';

const CourseGoals: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="ion-text-center">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Goals page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonContent className="ion-text-center">
                    <h3>it is working - GOOOOAL !</h3>
                </IonContent>
            </IonContent>
        </IonPage>
    );
}

export default CourseGoals;