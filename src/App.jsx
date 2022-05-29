import { Component } from 'react';
import Form from './components/Form';
import ImageGallery from './components/ImageGallery';


export default class App extends Component {
  state = {
    searchQuery: '',

  }


  // 1. [Метод] Получаем запрос "searchQuery" из локального state компонента Form и записываем в state компонента App
  // 2. В компонент "ImageGallery" прокидываем props searchQuery из state компонента App (this.state.searchQuery)
  // 3. Делаем fatch из компонента ImageGallery
  // 3.1 Проверяем изменился ли props "searchQuery" в componentDidUpdate (Вызывается сразу после обновления компонента в DOM)
  // 3.2

  handleFormSubmit = (searchQuery) => {
    this.setState({ searchQuery })
  }



  render() {
    return (

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 20 }}>
        <Form searchQuerySubmit={this.handleFormSubmit} />
        <ImageGallery searchQuery={this.state.searchQuery} />
        {this.state.query && <div>{this.state.query.hits[0].id}</div>}
      </div>

    )
  }
}
