import "./ImageList.css";
import ImageCard from './Imagecard';
import React from 'react';



const ImageList = (props) => {
 const images = props.images.map((image)=> {
        return <ImageCard img key={image.id} image={image}/>
    });
    return <div className="image-list">{images}</div>
};

export default ImageList;