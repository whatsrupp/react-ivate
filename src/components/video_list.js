import React from 'react';
import VideoListItem from './video_list_item';
// if you're passing through data or 'in the jargon' props.  you need to include
// it in a variable
const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });
  // const videoItems = props.videos.map((video) => {
  //   return <VideoListItem video={video} />
  // });

  return  (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );

}

export default VideoList;
