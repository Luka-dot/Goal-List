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
import { trash } from 'ionicons/icons';

const CourseItem: React.FC<{
    title: string;
    enrolmentDate: Date;
    id: string;
    onListDelete: () => void;
}> = props => {

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{props.title}</IonCardTitle>
                <IonCardSubtitle>
                    Date :{' '}
                    {props.enrolmentDate.toString().slice(0, 10)}

                    {/* .toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                    }) */}

                </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent id="listCol">
                <IonRow >
                    <IonCol>
                        <IonItem className="ion-text-left">
                            <IonButton color="danger" onClick={props.onListDelete}><IonIcon icon={trash} ></IonIcon></IonButton>
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