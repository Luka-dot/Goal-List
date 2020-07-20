import React, { useState, useRef, useContext } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonBackButton,
  IonList,
  IonButton,
  IonIcon,
  IonFab,
  IonFabButton,
  isPlatform,
  IonAlert,
  IonToast
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { addOutline } from 'ionicons/icons';

import { COURSE_DATA } from './Courses';
import EditModal from '../components/EditModal';
import EditableGoalItem from '../components/EditableGoalItem';
import CourseContext from '../data/courses-context';
import CoursesContext from '../data/courses-context';

const CourseGoals: React.FC = () => {
  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(Object);

  const coursesCtx = useContext(CoursesContext);

  const slidingOptionsRef= useRef<HTMLIonItemSlidingElement>(null);

  const selectedCourseId = useParams<{ courseId: string }>().courseId;

  const selectedCourse = coursesCtx.courses.find(c => c.id === selectedCourseId);

  const startDeleteGoalHandler = () => {
    setStartedDeleting(true);
  };

  const deleteGoalHandler = () => {
    setStartedDeleting(false);
    setToastMessage('Deleted goal!');
  };

  const startEditGoalHandler = (goalId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const goal = selectedCourse?.goals.find(g => g.id === goalId);
    slidingOptionsRef.current?.closeOpened();
    if (!goal) {
      return;
    }
    setIsEditing(true);
    setSelectedGoal(goal);
  };

  const markCompleteHandler = () => {
    console.log('completed...')
};

  const cancelEditGoalHandler = () => {
    setIsEditing(false);
    setSelectedGoal(null);
  };

  const startAddGoalHandler = () => {
    setIsEditing(true);
    setSelectedGoal(null);
  };

  const addGoalHandler = (text: string) => {
    coursesCtx.addGoal(selectedCourseId, text);
    setIsEditing(false);
  };

  return (
    <React.Fragment>
      <EditModal
        show={isEditing}
        onCancel={cancelEditGoalHandler}
        editedGoal={selectedGoal}
        onSave={addGoalHandler}
      />
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        duration={2000}
        onDidDismiss={() => {
          setToastMessage('');
        }}
      />
      <IonAlert
        isOpen={startedDeleting}
        header="Are you sure?"
        message="Do you want to delete the goal? This cannot be undone."
        buttons={[
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              setStartedDeleting(false);
            }
          },
          {
            text: 'Yes',
            handler: deleteGoalHandler
          }
        ]}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/courses/list" />
            </IonButtons>
            <IonTitle>
              {selectedCourse ? selectedCourse.title : 'No course found!'}
            </IonTitle>
            {!isPlatform('android') && (
              <IonButtons slot="end">
                <IonButton onClick={startAddGoalHandler}>
                  <IonIcon slot="icon-only" icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {selectedCourse && (
            <IonList>
              {selectedCourse.goals.map(goal => (
                <EditableGoalItem 
                  key={goal.id}
                  slidingRef={slidingOptionsRef} 
                  text={goal.text}  
                  onStartDelete={startDeleteGoalHandler}
                  onStartEdit={startEditGoalHandler.bind(null, goal.id)}
                  onComplete={markCompleteHandler}
                />
              ))}
            </IonList>
          )}
          {isPlatform('android') && (
            <IonFab horizontal="end" vertical="bottom">
              <IonFabButton color="secondary" onClick={startAddGoalHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default CourseGoals;
