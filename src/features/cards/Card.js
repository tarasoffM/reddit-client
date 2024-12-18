import { React } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

export default function Card({cardMedia, profilePic, cardTitle, cardUps, cardComments}) {

    if (cardMedia === null) {
        return (
        <div className='card'>
            <div className='card-header'>
                <div className='avatar'>
                    <img src={profilePic} alt='placeholder' />
                </div>
                <h2>header</h2>
            </div>
            <div className='card-container'>                
                <div className='content-buttons'>
                    <div className='left-buttons'>
                        <ThumbUpIcon />
                        <p>{cardUps}</p>
                        <ThumbDownIcon />
                    </div>
                    <div className='right-buttons'>
                        <p>{cardComments}</p>
                        <ChatBubbleIcon />                        
                    </div>
                </div>
                <div className='card-text'>
                    <p>{cardTitle}</p>
                </div>
            </div>
        </div>
    );}
    
    return (
        <div className='card'>
            <div className='card-header'>
                <div className='avatar'>
                    <img src={profilePic} alt='placeholder' />
                </div>
                <h2>header</h2>
            </div>
            <div className='card-container'>
                <div className='card-meadia'>
                    <img src={cardMedia} alt='placeholder' title={cardMedia}/>
                </div>
                <div className='content-buttons'>
                    <div className='left-buttons'>
                        <ThumbUpIcon />
                        <p>{cardUps}</p>
                        <ThumbDownIcon />
                    </div>
                    <div className='right-buttons'>
                        <p>{cardComments}</p>
                        <ChatBubbleIcon />                        
                    </div>
                </div>
                <div className='card-text'>
                    <p>{cardTitle}</p>
                </div>
            </div>
        </div>
    );
}