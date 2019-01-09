import React from "react";

const VideoData = ({ match }) => {
  return (
    <div className="NewVideo">
      <iframe
        width="650"
        height="350"
        src={"https://www.youtube.com/embed/" + match.params.id}
        title="Mydata"
        frameBorder="0"
      />
    </div>
  );
};


export default VideoData;
