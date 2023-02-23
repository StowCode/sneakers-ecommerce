import '../Lightbox/lightbox.styles.scss';
import CloseIcon from '../../images/icon-close.svg';
import IconPrevious from '../../images/icon-previous.svg';
import IconNext from '../../images/icon-next.svg';

export const Lightbox = (props) => {

  return (
    <div>

      {
          props.isOpen ?
          <div className='lightbox-container'>
              <div className='lightbox-sub'>
                  <img className='close-icon' src={CloseIcon} onClick={() => props.setIsOpen(false)} alt=''/>
                  
                  <div className='lightbox-photos-container'>
                      <img onClick={props.decreasePhotoIndex} className='next-previous-icon' src={IconPrevious} alt=''/>
                      <img className='main-image lightbox-focus' src={props.currentImage} alt=''/>
                      <img onClick={props.increasePhotoIndex} className='next-previous-icon' src={IconNext} alt=''/>
                  </div>
              </div>
          </div>
          :
          null
      }


    </div>
  );
}
