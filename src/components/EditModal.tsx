import React from 'react';
import {
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonGrid,
    IonCol,
    IonRow,
    IonInput,
    IonItem,
    IonLabel
} from '@ionic/react';

const EditModal: React.FC<{ show: boolean; onCancel: () => void }> = (props) => {
    return (
        <IonModal isOpen={props.show}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Edit goal</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating" >Your Goal</IonLabel>
                                <IonInput type="text" />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-text-center" >
                        <IonCol>
                            <IonButton color="dark" fill="clear" onClick={props.onCancel} >Cancel</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton color="secondary" expand="block" >Save</IonButton>
                        </IonCol>   
                    </IonRow>
                </IonGrid> 
            </IonContent>
        </IonModal>
    );
};

export default EditModal;