import React from 'react';
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
    IonDatetime
} from '@ionic/react';

const AddCourseModal: React.FC<{
    show: boolean;
    onCancel: () => void;
}> = props => {
    return (
        <IonModal isOpen={props.show}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Add Course</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">add text here...</IonLabel>
                                <IonInput type="text" />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel>Enrolment date</IonLabel>
                                <IonDatetime displayFormat="MM DD YY" />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-text-center">
                        <IonCol>
                            <IonButton color="dark" fill="clear" onClick={props.onCancel}>
                                Cancel
              </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton color="secondary" expand="block">Save</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>
    );
};

export default AddCourseModal;