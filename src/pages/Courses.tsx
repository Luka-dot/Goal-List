import React from 'react';
import { IonHeader, IonContent, IonToolbar, IonTitle, IonButton, IonPage, IonGrid, IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';
// import { useHistory } from 'react-router-dom';

const Courses: React.FC = () => {
    // const history= useHistory();

    // const changePageHandler = () => {
    //     history.push('/course-goals');
    // };

    const CORSE_DATA = [
        { id: 'c1', title: 'IONIC course' },
        { id: 'c2', title: 'This is another test title' },
        { id: 'c3', title: 'Just a test data' },
        { id: 'c4', title: 'IONIC with React' },
        { id: 'c5', title: 'All this is just dummy data' },
    ];

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="ion-text-center">
                    <IonTitle>Courses page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonContent className="ion-text-center">
                    {/* <h3>it is working !</h3>
                <IonButton routerLink="/course-goals">To goals</IonButton>
                <IonButton onClick={changePageHandler} > To goals</IonButton> */}
                    <IonGrid>
                        {CORSE_DATA.map(course => (
                            <IonRow key={course.id}>
                                <IonCol size-md="4" offset-md="4">
                                    <IonCard>
                                        <IonCardContent>
                                            <h2>{course.title}</h2>
                                            <IonButton size="small" shape="round" routerLink="">View Course Goals</IonButton>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        ))}
                    </IonGrid>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default Courses;