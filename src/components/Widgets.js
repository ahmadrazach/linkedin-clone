import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {

const newsArticle=(heading,subtitle)=>(
    <div className='widgets__article'>
        <div className='widgets__articleLeft'>
            <FiberManualRecordIcon/>
        </div>
        <div className='widgets__articleRight'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
)

  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>

        {newsArticle("Another ReactJS Clone","Top news - 9000 readers")}
        {newsArticle("The 5 Attributes of a Good Subtitle","Productivity - 5000 readers")}
        {newsArticle("How to Write a Stellar Book Subtitle","Journal - 4300 readers")}
        {newsArticle("The Five-Hour Workday","Top book - 2500 readers")}
        {newsArticle("Another ReactJS Clone","Top news - 9000 readers")}
    </div>
    
  )
}

export default Widgets