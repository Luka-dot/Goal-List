import React from 'react';
import {
    IonItem,
    IonLabel,
    IonIcon,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonText,
    IonCheckbox,
} from '@ionic/react';
import { create, trash } from 'ionicons/icons';
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
                    <IonItem>
                        <IonLabel className="completed" ><IonText >{props.text}</IonText></IonLabel>
                        <IonCheckbox color="primary" checked slot="start"></IonCheckbox>
                    </IonItem>
                }
                {props.completed === false &&
                    <IonItem>
                        <IonLabel className="textBefore" ><IonText >{props.text}</IonText></IonLabel>
                        <IonCheckbox color="primary" slot="start"></IonCheckbox>
                    </IonItem>
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