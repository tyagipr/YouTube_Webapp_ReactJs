import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class VideoList extends Component {
  
  componentDidMount() {
    window.addEventListener("scroll", e => {
      this.onScroll(e);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      this.props.videos.length &&
      !this.props.isLoading
    ) {
      this.props.onPaginatedSearch();
    }
  };

  render() {
    const { videos } = this.props;
    return (
      <div className="VideoSide">
        <div className="main">
          {videos.map((item, index) => {
            return (
              <div key={index} className="Card">
                <div>
                  <iframe
                    title="MyVideo"
                    width="364"
                    height="180"
                    frameBorder="0"
                    src={"https://www.youtube.com/embed/" + item.id.videoId}
                  >
                    {item.id.videoId}
                  </iframe>
                </div>
                <div>
                  <h5>
                    <Link to={`/Videos/${item.id.videoId}`} className="Title">
                      {item.snippet.title}
                    </Link>
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default VideoList;
