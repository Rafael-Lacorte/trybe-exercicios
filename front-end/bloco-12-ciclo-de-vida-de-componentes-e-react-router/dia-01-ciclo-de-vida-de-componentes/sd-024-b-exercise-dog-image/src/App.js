import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.fetchDog = this.fetchDog.bind(this);

    this.state = {
      isLoading: true,
      imageUrl: '',
    };
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!nextState.imageUrl.includes('terrier')) return true;
  }

  componentDidUpdate() {
    const { imageUrl } = this.state;
    localStorage.setItem('imageUrl', imageUrl);
    const breed = imageUrl.split('/')[4];
    window.alert(breed);
  }

  fetchDog() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          imageUrl: data.message,
        });
      });
  }

  render() {
    const { isLoading, imageUrl } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div>
        <h1>Doguinhos</h1>
        <img src={ imageUrl } alt="Doguinho aleatório" />
        <button type="button" onClick={ this.fetchDog }>Novo doguinho!</button>
      </div>
    );
  }
}

export default App;
