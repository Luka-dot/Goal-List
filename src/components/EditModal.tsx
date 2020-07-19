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
  IonInput
} from '@ionic/react';

const EditModal: React.FC<{
  show: boolean;
  onCancel: () => void;
    // for editedGoal object accepting aether ID + text or just null!
    // if its a null => ADDING a goal. if its ID + TEXT => EDITING goal
  editedGoal: { id: string; text: string } | null;
}> = props => {
  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{props.editedGoal ? 'Edit' : 'Add'} Goal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Goal</IonLabel>
                <IonInput type="text" value={props.editedGoal?.text} />
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
              <IonButton color="secondary" expand="block">
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
