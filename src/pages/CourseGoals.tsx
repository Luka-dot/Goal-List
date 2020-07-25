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
  IonToast,
  IonRow,
  IonCol,
  IonItem,
  IonTextarea,
  IonInput
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { addOutline, arrowForward } from 'ionicons/icons';

import EditModal from '../components/EditModal';
import EditableGoalItem from '../components/EditableGoalItem';
import CoursesContext from '../data/courses-context';
import './items.css';

const CourseGoals: React.FC = () => {
  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(Object);
  const [ completed, setCompleted ] = useState(false);

  const coursesCtx = useContext(CoursesContext);

  const slidingOptionsRef= useRef<HTMLIonItemSlidingElement>(null);
  const selectedGoalIdRef = useRef<string | null>(null);

  const textRef = useRef<HTMLIonInputElement | null>(null);

  const selectedCourseId = useParams<{ courseId: string }>().courseId;

  const selectedCourse = coursesCtx.courses.find(c => c.id === selectedCourseId);

  const startDeleteGoalHandler = (goalId: string) => {
    setToastMessage('');
    setStartedDeleting(true);
    selectedGoalIdRef.current = goalId;
  };

  const deleteGoalHandler = () => {
    setStartedDeleting(false);
    coursesCtx.deleteGoal(selectedCourseId, selectedGoalIdRef.current!)
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

  const markCompleteHandler = (goalId: string, event: React.MouseEvent) => {
    
    coursesCtx.completeGoal(selectedCourseId, goalId, completed);
     const goal = selectedCourse?.goals.find(g => g.id === goalId);
     setCompleted((completed) ? false : true);
    // selectedGoalIdRef.current = goalId;
    // // if (completed === false) {
    // //   setCompleted(true)
    // // } else {
    // //   setCompleted(false)
    // // }
    // setSelectedGoal(goal);
    console.log('clicked completed...  ' + goalId + " " + goal?.completed)
};

  const cancelEditGoalHandler = () => {
    setIsEditing(false);
    setSelectedGoal(null);
  };

  const startAddGoalHandler = () => {
    setIsEditing(true);
    setSelectedGoal(null);
  };

  const quickAddGoalHandler = () => {
    let newText = textRef.current!.value;
    let anotherText = newText!.toString();
    console.log('anotherText ', anotherText);
    coursesCtx.addGoal(selectedCourseId, anotherText);
    textRef.current!.value = '';
  }

  const saveGoalHandler = (text: string) => {
    if (selectedGoal) {
      coursesCtx.updateGoal(selectedCourseId, selectedGoal.id, text);
    } else {
    coursesCtx.addGoal(selectedCourseId, text);
    }
    setIsEditing(false);
  };

  let content = <h2 className="ion-text-center">No items found!</h2>;

  if (!selectedCourse) {
    content = <h2 className="ion-text-center">No list found!</h2>;
  }

  if (selectedCourse && selectedCourse.goals.length > 0) {
    content = <IonList>
      {selectedCourse.goals.map(goal => (
      <EditableGoalItem 
        key={goal.id}
        slidingRef={slidingOptionsRef} 
        text={goal.text}
        completed={goal.completed} 
        onStartDelete={startDeleteGoalHandler.bind(null, goal.id)}
        onStartEdit={startEditGoalHandler.bind(null, goal.id)}
        onComplete={markCompleteHandler.bind(null, goal.id)}
      />
      ))}
      </IonList>
  }

  return (
    <React.Fragment>
      <EditModal
        show={isEditing}
        onCancel={cancelEditGoalHandler}
        editedGoal={selectedGoal}
        onSave={saveGoalHandler}
      />
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        duration={2000}
      />
      <IonAlert
        isOpen={startedDeleting}
        header="Are you sure?"
        message="Do you want to delete the goal? This cannot be undone."
        cssClass='buttonCss'
        buttons={[
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'cancel-button',
            handler: () => {
              setStartedDeleting(false);
            }
          },
          {
            text: 'Yes',
            cssClass: 'exit-button',
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
        <IonContent >
          {content}
          {/* {isPlatform('android') && (
            <IonFab horizontal="end" vertical="bottom">
              <IonFabButton color="secondary" onClick={startAddGoalHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )} */}
        </IonContent>
        <IonRow>
          <IonCol >
            <IonItem  >
              <IonInput className="listInput" placeholder="Enter new item here ..." type="text" ref={textRef} />
              <IonFabButton size="small" color="secondary" onClick={quickAddGoalHandler} >
                <IonIcon icon={arrowForward} ></IonIcon>
              </IonFabButton>
            </IonItem>
          </IonCol>
        </IonRow>
      </IonPage>
    </React.Fragment>
  );
};

export default CourseGoals;
