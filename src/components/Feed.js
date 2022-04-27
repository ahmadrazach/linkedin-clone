import React,{useState} from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';

const Feed = () => {

    const [posts,setPosts]=useState([]);

    const sendPost=(e)=>{
        e.preventDefault();

    }
    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon/>
                    <form>
                        <input type="text"/>
                        <button type='submit' onClick={sendPost}>Send</button>
                    </form>
                </div>

                <div className='feed__inputOptions'>
                    <InputOption Icon={ImageIcon} title='Photo' color="#7005F9"/>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title='Write Article' color="#7FC1SE"/>
                </div>
            </div>
            {/* Posts */}
            {
                posts.map((post)=>(
                    <Post/>
                ))
            }
            <Post
            name="Ahmed Raza"
            description="This is a test"
            message="Checking first post!"
            />
        </div>
    )
}

export default Feed