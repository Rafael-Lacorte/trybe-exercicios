const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const findAll = async () => {
  const [[result]] = await connection.execute(
    'SELECT * FROM cars',
  );
  return camelize(result);
};

const insertCar = async (newCar) => {
  
  const columns = Object.keys(snakeize(newCar)).join(', ');

  const placeholders = Object.keys(newCar)
  .map((_key) => '?')
  .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO cars ${columns} VALUES ${placeholders}`,
    [...Object.values(newCar)],
  );

  return insertId;
};

const findById = async (id) => {
  const [[car]] = await connection.execute(
    'SELECT * FROM cars WHERE id = ?', [id],
  );

  return camelize(car);
};

module.exports = {
  findById,
  findAll,
  insertCar,
};