import { React } from 'react';

export default function Card({cardMedia, profilePic}) {
    return (
        <div className='card'>
            <div className='card-header'>
                <div className='avatar'>
                    <img src={profilePic} alt='placeholder' />
                </div>
                <h2>Card Header</h2>
            </div>
            <div className='card-container'>
                <div className='card-meadia'>
                    <img src={cardMedia} alt='placeholder' />
                </div>
                <div className='content-buttons'>
                    <button className='like-buttons'>left button</button>
                    <button className='like-buttons'>right button</button>
                </div>
                <div className='card-text'>
                    <p>Some information about the picture in the content div.  This is just a bunch of words to 
                        take up space and make the card look like it has some content.  This is just a bunch of words to
                        take up space and make the card look like it has some content.  This is just a bunch of words to
                    </p>
                </div>
            </div>
          

        </div>
    );
}