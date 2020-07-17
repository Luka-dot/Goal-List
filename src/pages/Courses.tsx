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
  { id: 'c1', title: 'Ionic + React - The Practical Guide', enrolled: new Date('03/22/2019'), goals: [
    { id: 'cg1', text: 'Finish this goal'},
    { id: 'cg4', text: 'Finish this goal and goaaalllllsssssss!!!!!!!!'},
    { id: 'cg4', text: 'Finish this goal and goaaalllllsssssss!!!!!!!!'}
  ] },
  { id: 'c2', title: 'React.js - The Complete Guide', enrolled: new Date('05/12/2019'), goals: [
    { id: 'cg2', text: 'Finish this goal and goaaallllls'}
  ] },
  { id: 'c3', title: 'JavaScript - The Complete Guide', enrolled: new Date('09/2/2019'), goals: [
    { id: 'cg3', text: 'Last goal for this.'}
  ] }
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
                    <IonCardSubtitle>Enrolled on {course.enrolled.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</IonCardSubtitle>
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
