import React from 'react'


// By passing video in curly braces we don't need to write props then const video = props.video
const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  
  // const video = props.video;
  return (
    <li className='list-group-item'>
      <div className='video-list media'> 

        <div className='media-left'> 
          <img className='media-object' src={imageUrl} />
        </div> 

        <div className='media-body'> 
          <div className='media-heading'>
            {video.snippet.title}
          </div> 
        </div> 

      </div>  

    </li>
  );
};

export default VideoListItem;