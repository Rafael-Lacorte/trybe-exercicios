const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const findAll = async () => {
  const [[result]] = await connection.execute(
    'SELECT * FROM drivers'
  );
  return camelize(result);
};

const insertCar = async (newDriver) => {
  
  const columns = Object.keys(snakeize(newDriver)).join(', ')

  const placeholders =  Object.keys(newDriver)
  .map((_key) => '?')
  .join(', ')

  const [{ insertId }] = await connection.execute(
    `INSERT INTO drivers ${columns} VALUES ${placeholders}`,
    [...Object.values(newDriver)]
  );

  return insertId;
};

const findById = async (id) => {
  const [[driver]] =  await connection.execute(
    'SELECT * FROM drivers WHERE id = ?', [id]
  )

  return camelize(driver)
}

module.exports = {
  findById,
  findAll,
  insertCar,
  findById
};