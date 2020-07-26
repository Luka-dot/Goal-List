import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonRow,
    IonCol,
    IonItem
} from '@ionic/react';

import './EditableGoal.css';
import { addOutline, trash } from 'ionicons/icons';

const CourseItem: React.FC<{
    title: string;
    enrolmentDate: Date;
    id: string;
}> = props => {

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{props.title}</IonCardTitle>
                <IonCardSubtitle>
                    Date :{' '}
                    {props.enrolmentDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                    })}
                </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent id="listCol">
                <IonRow >
                    <IonCol>
                        <IonItem className="ion-text-left">
                            <IonIcon icon={trash}  ><IonButton></IonButton></IonIcon>
                        </IonItem>
                    </IonCol>
                    <IonCol>
                        <IonItem className="ion-text-right">
                            <IonButton
                                fill="clear"
                                color="secondary"
                                routerLink={`/courses/${props.id}`}
                            >
                                View List items
                    </IonButton>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonCardContent>
        </IonCard>
    )
};

export default CourseItem;