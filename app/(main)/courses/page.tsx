import { getCourses, getUserProgress } from '@/db/queries';
import React from 'react';
import { List } from './List';

const CoursesPage = async () => {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);
  return (
    <div className='mx-auto h-full max-w-[912px] px-3'>
      <h1 className='text-2xl font-bold text-neutral-700'>Language Course</h1>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
};

export default CoursesPage;
