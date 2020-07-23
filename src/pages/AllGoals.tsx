import React, { useContext } from 'react';
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonList,
  IonLabel,
  IonItem
} from '@ionic/react';

import CoursesContext from '../data/courses-context';
import '../theme/custom.css';
import '../components/EditableGoal.css';

const AllGoals: React.FC = () => {

  const coursesCtx = useContext(CoursesContext);

  const goals = coursesCtx.courses.filter(course => {
    return course.included;
  }).map( course => {
    return course.goals.map(goal => {
      return { id: goal.id, text: goal.text, courseTitle: course.title, completed: goal.completed };
    });
  }).reduce((goalArr, nestedGoals) => {
    let updatedGoalArray = goalArr;
    for (const goal of nestedGoals) {
      updatedGoalArray = updatedGoalArray.concat(goal);
    }
    return updatedGoalArray;
  }, []);

  console.log(goals)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>All Items</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {goals.length === 0 && <h2 className="ion-text-center">No items found!</h2>}
        {goals.length > 0 && (
        <IonList>
          {goals.map(goal => (
            <IonItem key={goal.id}>
              {goal.completed === true &&
              <IonLabel className="completed" >
                <h2 className="allListText">{goal.text}</h2>
                <p>from: {goal.courseTitle}</p>
              </IonLabel>
              }
              {goal.completed === false &&
              <IonLabel>
                <h2 className="allListText">{goal.text}</h2>
                <p>from: {goal.courseTitle}</p>
              </IonLabel>
              }
            </IonItem>
          ))}
        </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AllGoals;
