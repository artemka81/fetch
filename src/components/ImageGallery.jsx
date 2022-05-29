import { Component } from 'react';
import { fetchImages } from './ApiServeces';
import { Button } from './Button';
export default class ImageGallery extends Component {
  state = {
    arrayImg: [],
    error: null,
    page: 1,
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    const prevPage = prevState.page;
    const newPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== newPage) {
      if (prevQuery !== nextQuery) {
        this.setState({ page: 1 })
      }
      fetchImages(nextQuery, newPage)
        .then(res => res.hits.map(({ id, webformatURL, largeImageURL, tags }) => {
          return { id, webformatURL, largeImageURL, tags };
        }))
        .then(res => this.setState((prevState) => ({
          arrayImg: [...prevState.arrayImg, ...res],

        })))

    }
  }

  ClickLoadBtn = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));

  }


  render() {
    const { arrayImg } = this.state;
    return (
      <div>
        <h1>ImageGallery</h1>
        <p>Запрос от пользователя <b>(this.props.searchQuery)</b>: {this.props.searchQuery}</p>
        <ul>
          {arrayImg.map(({ id, webformatURL, tags }) => (
            <li key={id}>
              <img src={webformatURL} alt={tags} />
            </li>
          ))}
        </ul>
        {(arrayImg.length === 12 || arrayImg.length > 12)
          && <Button onClick={this.ClickLoadBtn} />}


      </div>
    )
  }
}
