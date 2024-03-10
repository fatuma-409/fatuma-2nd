import FacebookOutlinedIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='footer_outer_container flex gap-8 justify-center items-center bg-black text-white'>
     
        <div>
          <FacebookOutlinedIcon/>
          <InstagramIcon />
          <YouTubeIcon />
          <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notice</li>
        </ul>
        </div>
       
      <div className="flex flex-col">
        <ul>
          <li>Help center</li>
          <li>Jobs</li>
          <li>Cookie preference</li>
        </ul>
      </div>

      <div className="flex flex-col">
        <ul>
          <li>Gift Card</li>
          <li>Term of Use</li>
          <li>Corporate Information</li>
        </ul>
      </div>

      <div className="flex flex-col">
        <ul>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
