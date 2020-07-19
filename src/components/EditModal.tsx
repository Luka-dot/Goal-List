import React from 'react';
import { 
    IonModal, 
    IonHeader, 
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton 
} from '@ionic/react';

const EditModal: React.FC<{show: boolean; onCancel: () => void }> = (props) => {
    return (
        <IonModal isOpen={props.show}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Edit goal</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <p>Editing...</p>
                    <IonButton onClick={props.onCancel} >Cancel</IonButton>
                    <IonButton>Save</IonButton>
                </IonContent>
            </IonModal>
    );
};

export default EditModal;