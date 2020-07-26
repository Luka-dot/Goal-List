import React from 'react';

export interface Goal { 
    id: string, 
    text: string,
    completed: boolean
}

export interface Course {
        id: string, 
        title: string, 
        enrolled: Date;
        goals: Goal[];
        included: boolean;
}

interface Context {
    courses: Course[];
    addCourse: (courseTitle: string, courseDate: Date) => void, 
    addGoal: (courseId: string, goalText: string) => void, 
    deleteGoal:(courseId: string, goalId: string) => void,
    updateGoal: (courseId: string, goalId: string, newText: string) => void,
    changeCourseFilter: (courseId: string, isIncluded: boolean) => void;
    completeGoal: (courseId: string, goalId: string, completed: boolean) => void;
    onListDelete: (courseId: string) => void;
    }

const CoursesContext = React.createContext<Context>({
    courses: [], 
    addCourse: () => {}, 
    addGoal: () => {}, 
    deleteGoal:() => {},
    updateGoal: () => {},
    changeCourseFilter: () => {},
    completeGoal: () => {},
    onListDelete: () => {}
    
});

export default CoursesContext;