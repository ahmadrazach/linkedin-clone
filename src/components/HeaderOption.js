import React from 'react'
import './HeaderOption.css'
import {Avatar, Tooltip} from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

const HeaderOption = ({avatar,Icon,title,onClick}) => {
  const user=useSelector(selectUser);
  return (
    
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className='headerOption__icon'/>}
        { avatar &&
          <Tooltip 
            title="Sign Out"
            placement="bottom">
            <Avatar src={user.photoURL} className="headerOption__icon">
              {user?.email[0]}
            </Avatar>
          </Tooltip>
            }
        <Tooltip 
          title="Sign Out"
          placement="bottom"
          >
            <h3 className='headerOption__title'>{title}</h3>
        </Tooltip>
    </div>
    
  )
}

export default HeaderOption