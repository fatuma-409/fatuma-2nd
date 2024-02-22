import React from 'react'
import "./Footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div className='footer_outer_container'>
 <div className=' footer_inner_container'>
    <div className='footer_icon'>
        <FacebookOutlinedIcon />
        <InstagramIcon/>
        <YouTubeIcon/>
    </div>
    <div  className='footer_data'>
        <div>
            <ul>
                <li>audio Description</li>
                <li>Invester Relations</li>
                <li>legal notice</li>
            </ul>
        </div>
        <div>
            <ul>
               <li>Media Center</li>
               <li>Privacy</li>
               <li>Contact Us</li>
            </ul>
        </div>
    </div>
 </div>
</div>
  )
}

export default Footer