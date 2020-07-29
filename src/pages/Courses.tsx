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
    IonAlert
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import { useParams } from 'react-router-dom';

import AddCourseModal from '../components/CourseModal';
import CoursItem from '../components/CoursItem';
import CoursesContext from '../data/courses-context';

const Courses: React.FC = () => {

    const [addingCourse, setAddingCourse] = useState(false);
    const [startedDeleting, setStartedDeleting] = useState(false);

    const coursesCtx = useContext(CoursesContext);

    const selectedCourseId = useParams<{ courseId: string }>().courseId;
    // const selectedCourse = coursesCtx.courses.find(c => c.id === selectedCourseId);

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
        console.log('inside courseDelete ', courseId)
        // setStartedDeleting(true);
        coursesCtx.onListDelete(courseId);
    };

    const startDeleteHandler = (courseId: string) => {
        const selectedCourseId = courseId
        setStartedDeleting(true);
        console.log('inside startDel ', courseId)
        // courseDeleteHandler(courseId)
    };

    return (
        <React.Fragment>
            <IonAlert
                isOpen={startedDeleting}
                header="Are you sure?"
                message="Do you want to delete the goal? This cannot be undone."
                cssClass='buttonCss'
                buttons={[
                {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'cancel-button',
                    handler: () => {
                    setStartedDeleting(false);
                    }
                },
                {
                    text: 'Yes',
                    cssClass: 'exit-button',
                    handler: () => {courseDeleteHandler(selectedCourseId)}
                }
        ]}
      />
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
