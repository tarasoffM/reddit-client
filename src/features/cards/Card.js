import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCards } from './cardsSlice';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

export default function Card({cardMedia, profilePic, cardTitle}) {

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
                        <KeyboardArrowUpIcon />
                        <p>0</p>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className='right-buttons'>
                        <ModeCommentOutlinedIcon />
                        <p>0</p>
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
                            <KeyboardArrowUpIcon />
                            <p>0</p>
                            <KeyboardArrowDownIcon />
                        </div>
                        <div className='right-buttons'>
                            <ModeCommentOutlinedIcon />
                            <p>0</p>
                        </div>
                </div>
                <div className='card-text'>
                    <p>{cardTitle}</p>
                </div>
            </div>
        </div>
    );
}