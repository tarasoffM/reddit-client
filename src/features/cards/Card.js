import { React } from 'react';

export default function Card({image}) {
    return (
        <div className='card'>
            <div className='card-header'>
                <div className='avatar'>
                    <img src='https://via.placeholder.com/50' alt='placeholder' />
                </div>
                <h2>Card Header</h2>
            </div>
            <div className='card-container'>
                <div className='card-meadia'>
                    <img src={image} alt='placeholder' />
                </div>
                <div className='content-buttons'>
                    <button className='like-buttons'>left button</button>
                    <button className='like-buttons'>right button</button>
                </div>
                <div className='card-text'>
                    <p>Some information about the picture in the content div.</p>
                </div>
            </div>
          

        </div>
    );
}