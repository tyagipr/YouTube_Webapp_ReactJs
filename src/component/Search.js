import React, { Component } from "react";
import "../App.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchText: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (e.query === "") {
      return this.props.onSearch("surfing");
    }
    this.props.onSearch(this.query.value, this.props.nextPageToken);
  }

  onChange(e) {
    this.setState({ searchText: e.target.searchText });
  }

  render() {
    return (
      <div>
        <header className="Myclass">
          <i className="fa fa-youtube-play" />
          <h4 className="heading">YouTube</h4>
          <form onSubmit={this.handleSubmit} className="Form">
            <input
              type="textfield"
              className="search"
              value={this.state.searchText}
              ref={input => (this.query = input)}
              onChange={this.onChange}
              placeholder="Search..."
            />
            <button type="submit">Search</button>
          </form>
        </header>
      </div>
    );
  }
}

export default Search;
