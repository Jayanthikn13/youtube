import banner from  '../images/ban.webp'
import '../styles/Banner.css'

const Banner = () => {
    return (
        <div className="banner">
           <img style={{height:"200px",width:"100%"}} src={banner} alt="" />
        </div>
      );
}
export default Banner;