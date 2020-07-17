import React from 'react';
import {
  IonApp,
  IonRouterOutlet,
  IonIcon,
  IonLabel,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuToggle
} from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { list, options } from 'ionicons/icons';

import Filter from './pages/Filter';
import CourseTabs from './pages/CourseTabs';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/theme.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Course Goals</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem button routerLink="/courses/all-goals" routerDirection="none">
                <IonIcon slot="start" icon={list} />
                <IonLabel>All Goalsss</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem button routerLink="/filter" routerDirection="none">
                <IonIcon slot="start" icon={options} />
                <IonLabel>Filter</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="main">
        <Route path="/filter" exact>
          <Filter />
        </Route>
        <Route path="/courses" exact>
          <CourseTabs />        
        </Route>
        <Redirect path='/' to='/courses' exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
