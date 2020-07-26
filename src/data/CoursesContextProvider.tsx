import React, { useState, useEffect } from 'react';
import { Plugins } from '@capacitor/core';

import CoursesContext, { Course, Goal } from './courses-context';

const { Storage } = Plugins;

const CoursesContextProvider: React.FC = props => {
    const [courses, setCourses] = useState<Course[]>([
        {
            id: 'c1',
            title: 'Mountain camping trip',
            enrolled: new Date('09/22/2020'),
            goals: [
                { id: 'c1g1', text: 'Tent', completed: false },
                { id: 'c1g2', text: 'sleeping bag', completed: false },
                { id: 'c1g3', text: 'fire starter', completed: false },
                { id: 'c1g4', text: 'Enough food for 3 days', completed: false },
                { id: 'c1g5', text: 'warm clothes for night', completed: false },
            ],
            included: true,
        },
        {
            id: 'c2',
            title: 'Grocery shopping list',
            enrolled: new Date('04/01/2020'),
            goals: [
                { id: 'c2g1', text: 'bread', completed: false },
                { id: 'c2g2', text: 'milk', completed: false },
                { id: 'c2g3', text: 'eggs', completed: false },
                { id: 'c2g4', text: 'cereal', completed: false },
                { id: 'c2g5', text: 'fish to grill', completed: false },
                { id: 'c2g6', text: 'coffee', completed: false },
                { id: 'c2g7', text: 'popcorn', completed: false },
            ],
            included: true,
        }
    ]);

    useEffect(() => {
      Storage.set({key: 'Courses', value: JSON.stringify(courses) })
    }, [courses]);

    const addCourse = (title: string, date: Date) => {
        const newCourse: Course = {
            id: Math.random().toString(),
            title: title,
            enrolled: date,
            goals: [],
            included: true
        };

        setCourses((curCourses) => {
            return curCourses.concat(newCourse);
        });

      //  Storage.set({key: 'Courses', value: JSON.stringify(courses) })
    };

    const addGoal = (courseId: string, text: string) => { 
        const newGoal: Goal = {id: Math.random().toString(), text, completed: false}

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

    const onListDelete = (courseId: string) => {
      console.log('inside delete CourseContext', courseId);
      setCourses(() => {
        let updatedCourses = [...courses];
        const updatedCourseIndex = updatedCourses.findIndex(courses => courses.id === courseId);
        const updatedCourse2 =  updatedCourses.filter((course) => course.id !== courseId);
        updatedCourses = updatedCourse2;
        return updatedCourses;
    })
    };

    const deleteGoal = (courseId: string, goalId: string) => { 
        setCourses((curCourses) => {
            const updatedCourses = [...curCourses];
            const updatedCourseIndex = updatedCourses.findIndex(courses => courses.id === courseId);

            const updatedCourseGoals = updatedCourses[updatedCourseIndex].goals.filter((goal) => goal.id !== goalId);
            const updatedCourse ={...updatedCourses[updatedCourseIndex]};
            updatedCourse.goals = updatedCourseGoals;
            updatedCourses[updatedCourseIndex] = updatedCourse;
            return updatedCourses;
        } )
     };

     const updateGoal = (courseId: string, goalId: string, newText: string) => {
         console.log(goalId)
        setCourses(curCourses => {
          const updatedCourses = [...curCourses];
          const updatedCourseIndex = updatedCourses.findIndex(
            course => course.id === courseId
          );
          const updatedCourseGoals = updatedCourses[
            updatedCourseIndex
          ].goals.slice();
          const updatedCourseGoalIndex = updatedCourseGoals.findIndex(
            goal => goal.id === goalId
          );
          const updatedGoal = {
            ...updatedCourseGoals[updatedCourseGoalIndex],
            text: newText
          };
          updatedCourseGoals[updatedCourseGoalIndex] = updatedGoal;
          const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
          updatedCourse.goals = updatedCourseGoals;
          updatedCourses[updatedCourseIndex] = updatedCourse;
          return updatedCourses;
        });
      };

      const completeGoal = (courseId: string, goalId: string, completed: boolean) => {
        setCourses(curCourses => {
            console.log(courseId, goalId)
          const updatedCourses = [...curCourses];
          const updatedCourseIndex = updatedCourses.findIndex(
            course => course.id === courseId
          );
          const updatedCourseGoals = updatedCourses[
            updatedCourseIndex
          ].goals.slice();
          const updatedCourseGoalIndex = updatedCourseGoals.findIndex(
            goal => goal.id === goalId
          );
          console.log(updatedCourseGoalIndex)
          const completeValue = updatedCourseGoalIndex;
          console.log(updatedCourseGoals, completeValue)
          const updatedGoal = {
            ...updatedCourseGoals[updatedCourseGoalIndex],
            completed: !completed  
          };
          updatedCourseGoals[updatedCourseGoalIndex] = updatedGoal;
          const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
          updatedCourse.goals = updatedCourseGoals;
          updatedCourses[updatedCourseIndex] = updatedCourse;
          return updatedCourses;
        });
      };

      const changeCourseFilter = (courseId: string, isIncluded: boolean) => {
        setCourses(() => {
            // alot of copying here. this is to avoid mutating data in the memory that can possibly lead to issues.
            const updatedCourses = [...courses];
            const updatedCourseIndex = updatedCourses.findIndex(courses => courses.id === courseId);
            
            const updatedCourse ={...updatedCourses[updatedCourseIndex], included: isIncluded};
            updatedCourses[updatedCourseIndex] = updatedCourse;
            return updatedCourses;
        })
      };

      const initContext = () => {};

    return (
        <CoursesContext.Provider
            value={{
                courses: courses,
                addGoal: addGoal,
                addCourse: addCourse,
                deleteGoal: deleteGoal,
                updateGoal: updateGoal,
                changeCourseFilter: changeCourseFilter,
                completeGoal: completeGoal,
                onListDelete: onListDelete
            }}
        >
            {props.children}
        </CoursesContext.Provider>
    );
};

export default CoursesContextProvider;