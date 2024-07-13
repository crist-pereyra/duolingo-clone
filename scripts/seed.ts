import 'dotenv/config';

import * as schema from '../db/schema';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log('Seeding database...');
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      { id: 1, title: 'Spanish', imageSrc: '/es.svg' },
      { id: 2, title: 'Italian', imageSrc: '/it.svg' },
      { id: 3, title: 'French', imageSrc: '/fr.svg' },
      { id: 4, title: 'Croatian', imageSrc: '/hr.svg' },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: 'Unit 1',
        description: 'Learn the basics of Spanish',
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        title: 'Nouns',
        order: 1,
      },
      {
        id: 2,
        unitId: 1,
        title: 'Verbs',
        order: 2,
      },
      {
        id: 3,
        unitId: 1,
        title: 'Adjectives',
        order: 3,
      },
      {
        id: 4,
        unitId: 1,
        title: 'Adverbs',
        order: 4,
      },
      {
        id: 5,
        unitId: 1,
        title: 'Prepositions',
        order: 5,
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: 'SELECT',
        question: 'Which one of these is the "the boy"?',
        order: 1,
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        text: 'el hombre',
        correct: true,
        imageSrc: '/boy.svg',
        audioSrc: '/es_boy.mp3',
      },
      {
        id: 2,
        challengeId: 1,
        text: 'la mujer',
        correct: false,
        imageSrc: '/girl.svg',
        audioSrc: '/es_girl.mp3',
      },
      {
        id: 3,
        challengeId: 1,
        text: 'el robot',
        correct: false,
        imageSrc: '/zombie.svg',
        audioSrc: '/es_zombie.mp3',
      },
    ]);
    console.log('Seeding finished!');
  } catch (error) {
    console.error(error);
    throw new Error('Failed to seed database');
  }
};

main();
