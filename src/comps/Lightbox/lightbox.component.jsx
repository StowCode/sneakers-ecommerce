import { useState } from 'react';
import '../Lightbox/lightbox.styles.scss';
import CloseIcon from '../../images/icon-close.svg';

export const Lightbox = (props) => {
    const images = [
        'image1',
        'image2',
        'image3',
        'image4',
        'image5'
    ];

    // Not being used.  State for carousel.
    const [photoIndex, setPhotoIndex] = useState(0);

    console.log(props.isOpen);

    return (
      <div>

        {
            props.isOpen ?
            <div className='lightbox-container'>
                <div className='lightbox-sub'>
                    <img className='close-icon' src={CloseIcon} onClick={() => props.setIsOpen(false)}/>
                    
                    <div className='lightbox-photos-container'>
                        <img className='main-image lightbox-focus' src={props.currentImage} alt=''/>

    {/*                         <div className='thumbnails-container'>
                                <img className='image-thumbnails' onClick={props.selectPicture} id='image1' src={props.image1} alt=''/>
                                <img className='image-thumbnails' onClick={props.selectPicture} id='image2' src={props.image2} alt=''/>
                                <img className='image-thumbnails' onClick={props.selectPicture} id='image3' src={props.image3} alt=''/>
                                <img className='image-thumbnails' onClick={props.selectPicture} id='image4' src={props.image4} alt=''/>
                            </div> */}
                    </div>
                </div>
            </div>
            :
            null
        }


      </div>
    );
}

/* {isOpen && (
    <Lightbox
      mainSrc={images[photoIndex]}
      nextSrc={images[(photoIndex + 1) % images.length]}
      prevSrc={images[(photoIndex + images.length - 1) % images.length]}
      onCloseRequest={() => this.setState({ isOpen: false })}
      onMovePrevRequest={() =>
        this.setState({
          photoIndex: (photoIndex + images.length - 1) % images.length,
        })
      }
      onMoveNextRequest={() =>
        this.setState({
          photoIndex: (photoIndex + 1) % images.length,
        })
      }
    />
  )} */