import React from 'react';

class Search extends React.Component {
  state = { value: ''}

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {

    // const inputText = document.querySelector('search__input');
    // console.log(inputText);
    return (
      <form className="search">
        <input onChange={this.handleChange} type="text" className="search__input"/>
        <button onClick={() => alert(`Search text: ${this.state.value}`)} className="search__button">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
