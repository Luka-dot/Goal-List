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
  {
    id: 'c1',
    title: 'Ionic + React - The Practical Guide',
    enrolled: new Date('03/22/2019'),
    goals: [
      { id: 'c1g1', text: 'Finish the course!  THIS IS SOOOO STUPID' },
      { id: 'c1g2', text: 'Learn a lot!' },
      { id: 'c1g3', text: 'Why is IONIC reload messed up???' },
      { id: 'c1g4', text: 'More and MORE data!' }
    ]
  },
  {
    id: 'c2',
    title: 'React.js - The Complete Guide',
    enrolled: new Date('05/15/2018'),
    goals: [
      { id: 'c2g1', text: 'Finish the course!' },
      { id: 'c2g2', text: 'Learn a lot!' }
    ]
  },
  {
    id: 'c3',
    title: 'JavaScript - The Complete Guide',
    enrolled: new Date('01/22/2020'),
    goals: [
      { id: 'c3g1', text: 'Finish the course!' },
      { id: 'c3g2', text: 'Learn a lot!' }
    ]
  }
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
                    <IonCardSubtitle>
                      Enrolled on{' '}
                      {course.enrolled.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                      })}
                    </IonCardSubtitle>
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
