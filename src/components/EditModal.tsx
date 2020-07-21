import React, { useRef, useState } from 'react';
import {
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonInput,
    IonText
} from '@ionic/react';

const EditModal: React.FC<{
    show: boolean;
    onCancel: () => void;
    onSave: (goalText: string) => void;
    // for editedGoal object accepting aether ID + text or just null!
    // if its a null => ADDING a goal. if its ID + TEXT => EDITING goal
    editedGoal: { id: string; text: string } | null;
}> = props => {
    const [error, setError] = useState('');

    const textRef = useRef<HTMLIonInputElement>(null);

    const saveHandler = () => {
        const enteredtext = textRef.current!.value;

        if (!enteredtext || enteredtext.toString().trim().length === 0) {
            setError('Please enter valid text.')
            return;
        };

        props.onSave(enteredtext.toString())
    };

    return (
        <IonModal isOpen={props.show}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{props.editedGoal ? 'Edit' : 'Add'} Item</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Your Item</IonLabel>
                                <IonInput type="text" value={props.editedGoal?.text} ref={textRef} />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    {error && <IonRow>
                        <IonCol>
                            <IonText color="danger">
                                <p>{error}</p>
                            </IonText>
                        </IonCol>
                    </IonRow>}
                    <IonRow className="ion-text-center">
                        <IonCol>
                            <IonButton color="dark" fill="clear" onClick={props.onCancel}>
                                Cancel
                    </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton color="secondary" expand="block" onClick={saveHandler} >
                                Save
                    </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>
    );
};

export default EditModal;
