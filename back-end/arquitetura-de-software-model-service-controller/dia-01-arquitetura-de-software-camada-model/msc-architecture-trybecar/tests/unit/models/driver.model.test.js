const { expect } = require('chai');
const sinon = require('sinon');
const { driverModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { drivers, newDriver } = require('./mocks/driver.model.mock');

describe('Testes de unidade do model de pessoas motoristas', function () {
  it('Recuperando a lista de pessoas motoristas', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([drivers]);
    // Act
    const result = await driverModel.findAll();
    // Assert
    expect(result).to.be.deep.equal(drivers[0]);
  });

  it('Recuperando uma pessoa motorista a partir do seu id', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([[drivers[0]]]);
    // Act
    const result = await driverModel.findById(1);
    // Assert
    expect(result).to.be.deep.equal(drivers[0]);
  });

  it('Cadastrando uma pessoa motorista', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);
    // Act
    const result = await driverModel.insertCar(newDriver);
    // Assert
    expect(result).to.equal(42);
  });

  afterEach(function () {
    sinon.restore();
  });
});