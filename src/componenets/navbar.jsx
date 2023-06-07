import notifications from '../images/notifications.png'
import videocamera from '../images/videocamera.png'
import youtube from '../images/youtube.png'
import '../styles/navbar.css'


function Navbar() {
   return(
    <div className="Navbar">
      <div className="log">
      <img width={150}src={youtube} alt=""/>
      </div>
      <div className="Searchbar">
         <input type="text" placeholder="search"></input>
      </div>
      <div className="Useroptions">
         <img width={30} src={videocamera} alt="" />
         <img width={30} src={notifications} alt="" />
         <h4>J</h4>
      </div>

    </div> 
   );
}
export default Navbar;