import React, { useState } from 'react';

import CoursesContext, { Course, Goal } from './courses-context';

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

    const addGoal = (courseId: string, text: string) => { 
        const newGoal: Goal = {id: Math.random().toString(), text}

        setCourses(() => {
            // alot of copying here. this is to avoid mutating data in the memory that can possibly lead to issues.
            const updatedCourses = [...courses];
            const updatedCourseIndex = updatedCourses.findIndex(courses => courses.id === courseId);
            const updatedCourseGoals = updatedCourses[updatedCourseIndex].goals.concat(newGoal);
            const updatedCourse ={...updatedCourses[updatedCourseIndex]};
            updatedCourse.goals = updatedCourseGoals;
            updatedCourses[updatedCourseIndex] = updatedCourse;
            return updatedCourses;
        })
     };

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