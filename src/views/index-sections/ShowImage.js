import React from 'react';
import {API} from '../../config'

const showImage = ({item, url}) => (
    <div style={{ textAlign: 'center' }}>
        <img 
        src={`${API}/${url}/photo/${item._id}`} 
        alt={item.name} 
        className="img-rounded img-responsive imageSize"/>
    </div>
)

export default showImage;