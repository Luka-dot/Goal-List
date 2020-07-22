import React from 'react';
import {
    IonItem,
    IonLabel,
    IonIcon,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonText,
} from '@ionic/react';
import { create, trash } from 'ionicons/icons';
import { getClassName } from '@ionic/react/dist/types/components/utils';
import './EditableGoal.css';

const EditableGoalItem: React.FC<{
    slidingRef: React.Ref<HTMLIonItemSlidingElement>;
    onStartDelete: () => void;
    onStartEdit: (event: React.MouseEvent) => void;
    text: String;
    completed: boolean;
    onComplete: (event: React.MouseEvent) => void;
}> = props => {


    return (
        <IonItemSliding ref={props.slidingRef} >
            <IonItemOptions side="start">
                <IonItemOption
                    onClick={props.onStartDelete}
                    color="danger"
                >
                    <IonIcon slot="icon-only" icon={trash} />
                </IonItemOption>
            </IonItemOptions>
            <IonItem
                lines="full"
                // button
                onClick={props.onComplete}
            >
                {/* EDIT HERE FOR visual marking of the competed goal  */}
                {props.completed === true &&
                <IonLabel className="completed" ><IonText  color="success">{props.text}</IonText></IonLabel>
                }
                {props.completed === false &&
                <IonLabel ><IonText >{props.text}</IonText></IonLabel>
                }
            </IonItem> 
            <IonItemOptions side="end">
                <IonItemOption
                    onClick={props.onStartEdit}
                >
                    <IonIcon slot="icon-only" icon={create} />
                </IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    )
};

export default EditableGoalItem;