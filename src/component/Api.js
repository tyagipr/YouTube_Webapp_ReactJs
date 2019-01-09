import React, { Component } from "react";
import Search from "../component/Search";
import VideoList from "../component/Videos";
import SideBar from "../component/Bar";
import Modal from "../component/Modal";

import "../App.css";

class FetchApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      loading: true,
      pageToken: ""
    };
  }

  componentDidMount() {
    this.fetchInfo();
  }

  fetchInfo = (query = "Surfing", pageToken = "") => {
    const string = `https://content.googleapis.com/youtube/v3/search?q=${query}&maxResults=25&part=snippet&pageToken=${pageToken}&key=AIzaSyATY392yjsJjw3pKSe9PnPJrUjVBbjekM4`;

    fetch(string)
      .then(response => response.json())
      .then(data => {
        this.onSetResult(data, pageToken);
        this.setState({
          videos: data.items,
          loading: true,
          pageToken: data.nextPageToken
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentWillUnmount() {
    this.fetchInfo();
  }

  onSetResult = (data, nextPageToken, prevState) => {
    const myPageToken = nextPageToken;
    myPageToken === nextPageToken
      ? this.setState({ videos: data.items, loading: false })
      : this.setState({
          videos: [prevState.data.items, data.items],
          nextPageToken: data.items.nextPageToken
        });
  };

  applySetResult = data => prevState => ({
    videos: data.items,
    loading: false
  });

  applyUpdateResult = data => prevState => ({
    videos: [prevState.data.items, data.items],
    nextPageToken: data.items.nextPageToken
  });

  onPaginatedSearch = e => {
    this.fetchInfo(this.props.query, this.state.pageToken);
  };

  render() {
    return (
      <div>
        <div>
          <SideBar />
        </div>
        <Search onSearch={this.fetchInfo} />
        <Modal />
        <br />
        <br />
        <br />
        <VideoList
          videos={this.state.videos}
          nextPageToken={this.state.nextPageToken}
          onPaginatedSearch={this.onPaginatedSearch}
        />
      </div>
    );
  }
}

export default FetchApi;
