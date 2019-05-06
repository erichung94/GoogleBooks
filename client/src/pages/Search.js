import React from "react";
import Wrapper from "../components/Wrapper/index";
import SearchDiv from "../components/searchDiv";
import Jumbotron from "../components/jumbotron";
import BookDisplayDiv from "../components/bookDisplayDiv";
import API from "../utils/API";

const styles = {
  background: {
    backgroundColor: "#0F9D58",
    padding: "1em",
    marginTop: "1em"
  }
}

class Search extends React.Component {
  state = {
    search: "",
    results: []
  }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.items }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {

    return (
      <Wrapper>
        <Jumbotron />
        <SearchDiv
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <div style={styles.background}>
          <h4>Results</h4>
          <BookDisplayDiv results={this.state.results}/>
        </div>
      </Wrapper>
    )
  }
}

export default Search;