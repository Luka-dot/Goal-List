import React from 'react';
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonButton,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/react';
// import { useHistory } from 'react-router-dom';

export const COURSE_DATA = [
  { id: 'c1', title: 'Ionic + React - The Practical Guide' },
  { id: 'c2', title: 'React.js - The Complete Guide' },
  { id: 'c3', title: 'JavaScript - The Complete Guide' }
];

const Courses: React.FC = () => {
  // const history = useHistory();

  // const changePageHandler = () => {
  //   history.push('/course-goals');
  // };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {COURSE_DATA.map(course => (
            <IonRow key={course.id}>
              <IonCol size-md="4" offset-md="4">
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>{course.title}</IonCardTitle>
                    <IonCardSubtitle>Enrolled on 03/22/2019</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div className="ion-text-right">
                      <IonButton
                        fill="clear"
                        color="secondary"
                        routerLink={`/courses/${course.id}`}
                      >
                        View Course Goals
                      </IonButton>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
