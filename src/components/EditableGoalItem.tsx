import React from 'react';
import {
    IonItem,
    IonLabel,
    IonIcon,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
} from '@ionic/react';
import { create, trash } from 'ionicons/icons';

const EditableGoalItem: React.FC<{
    slidingRef: React.Ref<HTMLIonItemSlidingElement>;
    onStartDelete: () => void;
    onStartEdit: (event: React.MouseEvent) => void;
    text: String;
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
                <IonLabel>{props.text}</IonLabel>
                {/* <IonButton
                  fill="clear"
                  color="dark"
                  slot="end"
                  onClick={startEditGoalHandler}
                >
                  <IonIcon slot="icon-only" icon={create} />
                </IonButton> */}
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