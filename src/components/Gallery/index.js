import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import "./Gallery.css";

class Index extends React.Component {

  fetchImages = (data, path) => {
    var imagesList = [];
    var images = data.img_path;
    for(var i=0;i< images.length;i++){
      imagesList.push({
        original: path + images[i],
        thumbnail: path + images[i]
      });
    }
    return imagesList;
  }

  render(){
    const { data, path } = this.props;
    if(data == null) return null;
    if(data.img_path !== undefined) {
      var imagesList = this.fetchImages(data, path);
      if(imagesList.length === 0) return null;
      return (
        <div className="py-2">
          <ReactImageGallery
            items={imagesList}
            lazyLoad
            thumbnailPosition="left"
            showPlayButton= {false}
            useBrowserFullscreen={false}
          />
        </div>
      )
    } else if(data.data_path !== undefined) {

      return null;
    }
    return null;
  }
}

export default Index;
