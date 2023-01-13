const { expect } = require('chai');
const sinon = require('sinon');
const { driverModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { cars, newCar } = require('./mocks/car.model.mock');

describe('Testes de unidade do model de carros', function () {
  it('Recuperando a lista de carros', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([cars]);
    // Act
    const result = await driverModel.findAll();
    // Assert
    expect(result).to.be.deep.equal(cars[0]);
  });

  it('Recuperando um carro a partir do seu id', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([[cars[0]]]);
    // Act
    const result = await driverModel.findById(1);
    // Assert
    expect(result).to.be.deep.equal(cars[0]);
  });

  it('Cadastrando um carro', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);
    // Act
    const result = await driverModel.insertCar(newCar);
    // Assert
    expect(result).to.equal(42);
  });

  afterEach(function () {
    sinon.restore();
  });
});