import React, { useState } from 'react';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButtons,
    IonButton,
    IonBackButton,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonFab,
    IonFabButton,
    isPlatform,
    IonAlert
} from '@ionic/react';
import { useParams } from 'react-router-dom';

import { COURSE_DATA } from './Courses';
import { create, trash, addOutline } from 'ionicons/icons';

const CourseGoals: React.FC = () => {
    const [startedDeleting, setStartedDeleting] = useState(false);

    const selectedCourseId = useParams<{ courseId: string }>().courseId;

    const selectedCourse = COURSE_DATA.find(c => c.id === selectedCourseId);

    const startDeleteGoalHandler = () => {
        console.log('deleted')
        setStartedDeleting(true);
    };

    const deleteGoalHandler = () => {
        console.log('deleteHandler triggered.')
    }

    // stopping propagation so only EditHandler will run. Without Edit and Delete handler will run
    const startEditGoalHandler = (event: React.MouseEvent) => {
        event.stopPropagation();
        console.log("editing")
    };

    const markCompleteHandler = () => {
        console.log('completed...')
    };

    const startAddGoalHandler = () => {
        console.log('ADD goal ....');
    }

    return (
        <React.Fragment>
            <IonAlert  
                isOpen={startedDeleting} 
                header="Are you sure?" 
                message="Deleting can not be undone."
                buttons={[{text: 'NO', role: 'cancel', handler: () => {setStartedDeleting(false)}},
                            {text: 'YES', handler: deleteGoalHandler}]}
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
                    {!isPlatform('mobile') &&
                    <IonButtons slot="end">
                        <IonButton onClick={startAddGoalHandler}>
                            <IonIcon slot="icon-only" icon={addOutline} />
                        </IonButton>
                    </IonButtons>
                    }
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {selectedCourse && (
                    <IonList>
                        {selectedCourse.goals.map(goal => (
                            <IonItemSliding key={goal.id}>
                                <IonItemOptions side="start">
                                    <IonItemOption onClick={startDeleteGoalHandler} color="danger">
                                        <IonIcon slot="icon-only" icon={trash} />
                                    </IonItemOption>
                                </IonItemOptions>
                                <IonItem
                                    // key={goal.id} 
                                    lines="full"
                                    // button 
                                    onClick={markCompleteHandler}
                                >
                                    <IonLabel>{goal.text}</IonLabel>
                                    {/* <IonButton fill="clear" color="dark" slot="end" onClick={startEditGoalHandler}>
                    <IonIcon slot="icon-only" icon={create}/>
                </IonButton> */}
                                </IonItem>
                                <IonItemOptions side="end">
                                    <IonItemOption onClick={startEditGoalHandler}>
                                        <IonIcon slot="icon-only" icon={create} />
                                    </IonItemOption>
                                </IonItemOptions>
                            </IonItemSliding>
                        ))}
                    </IonList>
                )}
                {isPlatform('mobile') && <IonFab horizontal="end" vertical="bottom" slot="fixed">
                    <IonFabButton color="secondary" onClick={startAddGoalHandler}>
                        <IonIcon icon={addOutline} />
                    </IonFabButton>
                </IonFab>}
            </IonContent>
        </IonPage>
        </React.Fragment>
    );
};

export default CourseGoals;
