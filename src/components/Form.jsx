import { Component } from 'react'


export default class Form extends Component {
  state = {
    searchQuery: '',
  }

  handleNameChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchQuerySubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="searchQuery"
          value={this.state.searchQuery}
          onChange={this.handleNameChange}
        />
        <button type="submit">Найти</button>
      </form>
    );
  }
}
