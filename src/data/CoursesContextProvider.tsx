import React, { useState, useEffect, useCallback } from 'react';
import { Plugins } from '@capacitor/core';

import CoursesContext, { Course, Goal } from './courses-context';

const { Storage } = Plugins;

const CoursesContextProvider: React.FC = props => {
    const [courses, setCourses] = useState<Course[]>([
        
    ]);

    useEffect(() => {
      Storage.set({key: 'TEST', value: JSON.stringify(courses) })
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
      //  const updatedCourseIndex = updatedCourses.findIndex(courses => courses.id === courseId);
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

      const initContext = useCallback(async () => {
        const coursesData = await Storage.get({key: 'TEST'});
        const storedCourses = coursesData.value ? JSON.parse(coursesData.value) : [{
          id: 'c1',
          title: 'Example of the list',
          enrolled: new Date('09/22/2020'),
          goals: [
              { id: 'c1g1', text: 'Swipe right for EDIT', completed: false },
              { id: 'c1g2', text: 'Swipe left to delete', completed: false },
              { id: 'c1g3', text: 'Use text area below to add Item', completed: false },
          ],
          included: true,
        }];
        console.log(storedCourses)
        setCourses(storedCourses);
      }, []);

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
                onListDelete: onListDelete,
                initContext: initContext
            }}
        >
            {props.children}
        </CoursesContext.Provider>
    );
};

export default CoursesContextProvider;