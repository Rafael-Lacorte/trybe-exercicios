// App.test.js
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('testa aplicacao', () => {
  afterEach(() => jest.clearAllMocks());
  const getSearchButton = () => screen.getByRole('button', { name: 'Search Digimon' });
  it('fetches a digimon', async () => {
    const digimon = [
      {
        img: 'https://digimon.shadowsmith.com/img/greymon.jpg',
        level: 'Brabissimo',
        name: 'Brabomon',
      },
    ];

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(digimon),
    });
    renderWithRouter(<App />);
    const searchButton = getSearchButton();
    const inputArea = screen.getByLabelText('Digimon:');
    userEvent.type(inputArea, 'Brabomon');
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);
    const renderedDigimon = await screen.findByText('Brabomon');
    expect(renderedDigimon).toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Brabomon',
    );
  });

  it('return error when we fetch not existing digimon', async () => {
    global.fetch.mockClear();
    const errorMessage = {
      ErrorMsg: 'Tony Soprano is not a Digimon in our database.',
    };
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(errorMessage),
    });
    renderWithRouter(<App />);
    // const searchButton = screen.getByRole('button', { name: 'Search Digimon' });
    const searchButton = getSearchButton();
    const inputArea = screen.getByLabelText('Digimon:');
    userEvent.type(inputArea, 'Tony Soprano');
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);
    const notFound = await screen.findByText(
      'Tony Soprano is not a Digimon in our database.',
    );
    expect(notFound).toBeInTheDocument();
  });

  it('does not fetch when input is empty', async () => {
    renderWithRouter(<App />);
    const searchButton = getSearchButton();
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);
    expect(global.fetch).not.toBeCalledTimes(1);
  });
});
