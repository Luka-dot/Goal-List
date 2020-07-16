import React from 'react';
import { IonHeader, IonContent, IonToolbar, IonTitle, IonButton, IonPage } from '@ionic/react';
// import { useHistory } from 'react-router-dom';

const Courses: React.FC = () => {
    // const history= useHistory();

    // const changePageHandler = () => {
    //     history.push('/course-goals');
    // };

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar className="ion-text-center">
                <IonTitle>Courses page</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonContent className="ion-text-center">
                <h3>it is working !</h3>
                <IonButton routerLink="/course-goals">To goals</IonButton>
                {/* <IonButton onClick={changePageHandler} > To goals</IonButton> */}
            </IonContent>
        </IonContent>
        </IonPage>
    );
};

export default Courses;