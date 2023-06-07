import Banner from "./Banner";
import Categories from "./categories";
// import Videos from "./videos";
import Videos from "./videos";

const home = () => {
    return ( 
        <div className="home">
         <Categories/>
         <Banner />
         <Videos />
        </div>
     );
}
 
export default home;