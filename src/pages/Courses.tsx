import React, { useState, useContext } from 'react';
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
    IonIcon,
    IonItem,
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';

import AddCourseModal from '../components/CourseModal';
import CoursItem from '../components/CoursItem';
import CoursesContext from '../data/courses-context';

const Courses: React.FC = () => {

    const [addingCourse, setAddingCourse] = useState(false);

    const coursesCtx = useContext(CoursesContext);

    const startAddCourseHandler = () => {
        setAddingCourse(true);
    };

    const cancelAddCourse = () => {
        setAddingCourse(false)
    };

    const courseAddHandler = (title: string, date: Date) => {
        coursesCtx.addCourse(title, date);
        setAddingCourse(false);
    };

    const courseDeleteHandler = (courseId: string) => {
        coursesCtx.onListDelete(courseId);
    };

    return (
        <React.Fragment>
            <AddCourseModal
                show={addingCourse}
                onCancel={cancelAddCourse}
                onSave={courseAddHandler}
                
            />
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Your List's</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        {coursesCtx.courses.map(course => (
                            <IonRow key={course.id}>
                                <IonCol size-md="4" offset-md="4">
                                    <CoursItem  
                                        title={course.title}
                                        enrolmentDate={course.enrolled}
                                        id={course.id}
                                        onListDelete={courseDeleteHandler.bind(null, course.id)}
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
