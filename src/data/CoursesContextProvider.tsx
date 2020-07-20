import React, { useState } from 'react';

import CoursesContext, { Course } from './courses-context';

const CoursesContextProvider: React.FC = props => {
    const [courses, setCourses] = useState<Course[]>([
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
        }
    ]);

    const addCourse = (title: string, date: Date) => {
        const newCourse: Course = {
            id: Math.random().toString(),
            title: title,
            enrolled: date,
            goals: []
        };

        setCourses((curCourses) => {
            return curCourses.concat(newCourse);
        });
    };

    const addGoal = () => { };

    const deleteGoal = () => { };

    const updateGoal = () => { };

    return (
        <CoursesContext.Provider
            value={{
                courses: courses,
                addGoal: addGoal,
                addCourse: addCourse,
                deleteGoal: deleteGoal,
                updateGoal: updateGoal
            }}
        >
            {props.children}
        </CoursesContext.Provider>
    );
};

export default CoursesContextProvider;