import React, { useState } from 'react';
import {
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonFab,
    IonFabButton,
    IonIcon
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
// import { useHistory } from 'react-router-dom';

import AddCourseModal from '../components/CourseModal';
import CoursItem from '../components/CoursItem';

export const COURSE_DATA = [
    {
        id: 'c1',
        title: 'Ionic + React - The Practical Guide',
        enrolled: new Date('03/22/2019'),
        goals: [
            { id: 'c1g1', text: 'Finish the course!  THIS IS SOOOO STUPID' },
            { id: 'c1g2', text: 'Learn a lot!' },
            { id: 'c1g3', text: 'Why is IONIC reload messed up???' },
            { id: 'c1g4', text: 'More and MORE data!' }
        ]
    },
    {
        id: 'c2',
        title: 'React.js - The Complete Guide',
        enrolled: new Date('05/15/2018'),
        goals: [
            { id: 'c2g1', text: 'Finish the course!' },
            { id: 'c2g2', text: 'Learn a lot!' },
            { id: 'c2g3', text: 'Why is IONIC reload messed up???' },
            { id: 'c2g4', text: 'More and MORE data!' }
        ]
    },
    {
        id: 'c3',
        title: 'JavaScript - The Complete Guide',
        enrolled: new Date('01/22/2020'),
        goals: [
            { id: 'c3g1', text: 'Finish the course!' },
            { id: 'c3g2', text: 'Learn a lot!' },
            { id: 'c3g3', text: 'Why is IONIC reload messed up???' },
            { id: 'c3g4', text: 'More and MORE data!!!' }
        ]
    }
];

const Courses: React.FC = () => {
    // const history = useHistory();

    // const changePageHandler = () => {
    //   history.push('/course-goals');
    // };

    const [addingCourse, setAddingCourse] = useState(false);

    const startAddCourseHandler = () => {
        setAddingCourse(true);
    };

    const cancelAddCourse = () => {
        setAddingCourse(false)
    }

    return (
        <React.Fragment>
            <AddCourseModal
                show={addingCourse}
                onCancel={cancelAddCourse}
            />
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Courses</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        {COURSE_DATA.map(course => (
                            <IonRow key={course.id}>
                                <IonCol size-md="4" offset-md="4">
                                    <CoursItem  
                                        title={course.title}
                                        enrolmentDate={course.enrolled}
                                        id={course.id}
                                    />
                                </IonCol>
                            </IonRow>
                        ))}
                    </IonGrid>
                </IonContent>
                <IonFab horizontal="end" vertical="bottom">
                    <IonFabButton color="secondary" >
                        <IonIcon icon={addOutline} onClick={startAddCourseHandler} />
                    </IonFabButton>
                </IonFab>
            </IonPage>
        </React.Fragment>
    );
};

export default Courses;
