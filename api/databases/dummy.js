const db = require('../config/dbConfig');
const { faker, fakerJA } = require('@faker-js/faker');

const fillDummyData = async () => {
  await db.query('delete from books');
  await db.query('delete from authors');
  await db.query('delete from publishers');
  await db.query('delete from categories');

  // fill authors table
  for (let i = 0; i < 10; i++) {
    const author = {
      name: fakerJA.person.fullName(),
    };

    await db.query(
      'INSERT INTO authors SET ?',
      author,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      }
    );
  }

  // fill publishers table
  for (let i = 0; i < 10; i++) {
    const publisher = {
      name: fakerJA.company.name(),
    };

    await db.query(
      'INSERT INTO publishers SET ?',
      publisher,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      }
    );
  }

  // fill categories table
  for (let i = 0; i < 10; i++) {
    const category = {
      name: fakerJA.music.genre(),
    };

    const check = await db.query(
      'SELECT * FROM categories WHERE name = ?',
      category.name
    );

    if (!check[0].length) {
      await db.query(
        'INSERT INTO categories SET ?',
        category,
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        }
      );
    }
  }

  // fill books table
  const [authors] = await db.query(
    'select id from authors'
  );
  const [categories] = await db.query(
    'select id from categories'
  );
  const [publishers] = await db.query(
    'select id from publishers'
  );

  for (let i = 0; i < 10; i++) {
    const author_id =
      authors[Math.floor(Math.random() * authors.length)]
        .id;
    const category_id =
      categories[
        Math.floor(Math.random() * categories.length)
      ].id;
    const publisher_id =
      publishers[
        Math.floor(Math.random() * publishers.length)
      ].id;

    const book = {
      title: fakerJA.music.songName(),
      isbn: faker.commerce.isbn(),
      synopsis: fakerJA.lorem.sentences(2),
      author_id,
      publisher_id,
      category_id,
    };

    await db.query(
      'INSERT INTO books SET ?',
      book,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      }
    );
  }

  db.end();
};

fillDummyData();
