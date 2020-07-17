import React from 'react';
import { IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonButtons, IonBackButton } from '@ionic/react';
import { useParams } from 'react-router-dom';

import { CORSE_DATA } from './Courses';

const CourseGoals: React.FC = () => {
    const selectedCourseId = useParams<{ courseId: string}>().courseId;

    const selectedCourse = CORSE_DATA.find(c => c.id === selectedCourseId);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="ion-text-center">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>{selectedCourse ? selectedCourse.title : 'No Course Found'}</IonTitle>
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