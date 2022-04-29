import React,{forwardRef} from 'react';
import { Avatar } from '@material-ui/core';
import './Post.css';
import { ThumbUpAltOutlined } from '@material-ui/icons';
import { ChatOutlined } from '@material-ui/icons';
import InputOption from './InputOption';
import { ShareOutlined } from '@material-ui/icons';
import { SendOutlined } from '@material-ui/icons';

const Post = forwardRef(({name,description,message,photoUrl},ref) => {

  return (
    <div ref={ref} className='post'>
        <div className='post__header'>
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className='post__body'>
            <p>{message}</p>
        </div>

        <div className='post__buttons'>
            <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray"/>
            <InputOption Icon={ChatOutlined} title="Comment" color="gray"/>
            <InputOption Icon={ShareOutlined} title="Share" color="gray"/>
            <InputOption Icon={SendOutlined} title="Send" color="gray" />
        </div>
        
    </div>
  )
})
export default Post