import React from 'react'

function ImageShow({image}) {
  return (
    <div>
        <img src={image.urls.small} alt={'alt_description'}/>
    </div>
  )
}

export default ImageShow