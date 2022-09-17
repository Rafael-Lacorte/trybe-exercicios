import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

it('deve renderizar o componente App', () => {
  renderWithRouter(<App />);

  const homeTitle = screen.getByRole('heading', {
    name: 'Search Digimon',
  });
  expect(homeTitle).toBeInTheDocument();
});

it('deve possuir na tela o texto "Search Digimon" e "About"', () => {
  renderWithRouter(<App />);

  const searchLink = screen.getByRole('link', {
    name: 'Search Digimon',
  });
  const aboutLink = screen.getByRole('link', {
    name: 'About',
  });
  expect(searchLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});

it('deve redirecionar para a pagina About', () => {
  const { history } = renderWithRouter(<App />);

  const aboutLink = screen.getByRole('link', {
    name: 'About',
  });
  expect(aboutLink).toBeInTheDocument();

  userEvent.click(aboutLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/about');
});

it('deve redirecionar para a pagina NotFound', () => {
  const { history } = renderWithRouter(<App />);
  act(() => {
    history.push('/pagina-desconhecida');
  });
  const notFoundTitle = screen.getByRole(
    'heading',
    { name: 'Page Not Found' },
  );
  expect(notFoundTitle).toBeInTheDocument();
});
