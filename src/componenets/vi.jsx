// import '../styles/videos.css'
// import '../styles/shorts.css'
// import { useState } from "react";
// const Videos = () => {
//     let [video,setVideo]=useState([
//         {
//             thumbnail:"https://i.ytimg.com/vi/FUkTuPmv8UM/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLCQiMMOpeeGRn9Q5dwzgcLMMAc-BA",
//             title:"Krishna Manmohana Flute Music Peaceful song",
//             channel:"vortex mind",
//             views:"199k views",
//             id:1
//         },
//         {
//             thumbnail:"https://i.ytimg.com/vi/ATElufr0OiE/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLA29cuCtb_PK4EsHs-ID9bpIKndgA",
//             title:"Mudal Nee Mudavam Nee-Title track video",
//             channel:"sonyMusicsouthvevo",
//             views:"103M views",
//             id:2
//         },
//         {
//             thumbnail:"https://i.ytimg.com/vi/1No8JGKPXq4/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLDCApXmweQ2HTnvdW0m_97jzkHXyA",
//             title:"En roja neeye|kushi|samantha ruth Prabhu|,vijay Devarakonda",
//             channel:"saregama Tamil",
//             views:"4.5M views",
//             id:3
//         },
//         {
//             thumbnail:"https://i.ytimg.com/vi/byUbhCt952U/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLBKuzcUyaJOWhk9hSfD1elOc_OEnA",
//             title:"Dhanush & shwetha Mohans vaa vathi performance",
//             channel:"sun TV",
//             views:"66M views",
//             id:4
//         },
//         {
//             thumbnail:"https://i.ytimg.com/vi/VQr7lvMCrOs/hq720.jpg?sqp=-…BACGAYgATgB&rs=AOn4CLDCL1uJypqH9BAxkkqnkdqjOEpz3g",
//             title:"Bujji Bangaram guna 369 video song",
//             channel:"Aditya Music",
//             views:"36k views",
//             id:5
//         },
//         {
//             thumbnail:"https://i.ytimg.com/vi/N7C24ZtXykg/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLDYKFX4aAjEKpnmo1Q8pL-z_1tVmw",
//             title:"Belakina kavithe video song",
//             channel:"lahari Music",
//             views:"21M views",
//             id:6
//         },
//         {
//             thumbnail:"https://i.ytimg.com/vi/MAa_8XwAVlA/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLCme3OHXEnUZTzWb8GlPBmipeM1_A",
//             title:"viduthalai part-1 kaatumalli video",
//             channel:"Sony music south",
//             views:"29M views",
//             id:7
//         },
//         {
//             thumbnail:"https://i.ytimg.com/vi/toymwoKBtbM/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLCAzoFuutC6ng--tRuWqrEqlalR7w",
//             title:"Javascript Tutorials For Beginners in Tamil",
//             channel:"Dhuddu",
//             views:"48k views",
//             id:8
//         },
//         {
//             thumbnail:"https://i.ytimg.com/vi/592mNGkpYig/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLCbZ2JB3QoklmtY30Udvv9QfQ-QBw",
//             title:"vaa vathi Full video song",
//             channel:"Aditya music Tamil",
//             views:"67M views",
//             id:9
//         },
//         {
//             thumbnail:"https://i.ytimg.com/vi/e_TxH59MclA/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLCPsWXFPXwH-5yJFEIEzFyQAtRY7Q",
//             title:"Day in the life of a japanese programmer",
//             channel:"paolo from Tokyo",
//             views:"15M views",
//             id:10
//         },
//         {
//             thumbnail:"https://i.ytimg.com/vi/26NJXRVVV-Y/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLCyxtRI3lOi9nsYf8DB8WcG0_VCSA",
//             title:"Hunting for my Handsome straight-A classmate",
//             channel:"SENTV English|C-Drama ",
//             views:"1.4M views",
//             id:11
//         },
//         {
//             thumbnail:"https://i.ytimg.com/vi/0wmP2BZ1Xz8/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLD30E_8rMVNeVhKZycdZwhS6rDeJA",
//             title:"Eesha Ninna charana Bhajane",
//             channel:"Suprabha K V",
//             views:"6.5M views",
//             id:12
//         },

//     ])
//     let[shorts,setShorts]=useState([
//         {
//             thumbnail:"https://i.ytimg.com/vi/Ok7c4XwR-H0/oar2.jpg?sqp=-o…hgGIAE4AQ==&rs=AOn4CLBS6Eq5kRNvuZjv6Q7VfTYFSEXcyQ",
//             title:"Tom&Jerry|sangeeth kumar #shorts",
//             views:"2.3M views"
//         },
//         {
//             thumbnail:"https://i.ytimg.com/vi/UrWZVJkvFpI/oar2.jpg?sqp=-o…hgGIAE4AQ==&rs=AOn4CLCyH3ul-L5rxb20TpuxJbJ73oF-VA",
//             title:"Adorable Baby Boy Cuddles on Nurse",
//             views:"32M views"
//         },
//         {
//             thumbnail:"https://i.ytimg.com/vi/sYd4uSFz2SQ/hq720.jpg?sqp=-…hgGIAE4AQ==&rs=AOn4CLDP1M2q4y8wvQ10T_uUorUZ5XD5HQ",
//             title:"#sree leela #vijay devarkonda#vd 12#tollywood actress",
//             views:"4.7M views"
//         },
//         {
//             thumbnail:"	https://i.ytimg.com/vi/LmeHhkmpQGc/oar2.jpg?sqp=-o…hgGIAE4AQ==&rs=AOn4CLBWQPQHCSIiUrumlavkHBKuTbS1ew",
//             title:"kajal Agarwal baby shower pics",
//             views:"9.6M views"
//         },
//         {
//             thumbnail:"https://i.ytimg.com/vi/dZmBaKwYS-g/oar2.jpg?sqp=-o…hgGIAE4AQ==&rs=AOn4CLCnhWb5zJp7pv4UrDkPW_-lQfQGdQ",
//             title:"Tom&Jerry #sayoo&anvi",
//             views:"47M views"
//         },
//         {
//             thumbnail:"https://i.ytimg.com/vi/tVg3s6QxNb0/oar2.jpg?sqp=-o…hgGIAE4AQ==&rs=AOn4CLDkW470m_3ZMOEZLqq7_hQmzMxJlQ",
//             title:"Raashi khanna speel bounded the audience with her fabulous performance #ytshorts",
//             views:"4.4M views"
//         },

//     ])

//     let removeVideo=(id,name)=>{
//         let remove=video.filter((x)=>(x.id!=id))
//         setVideo(remove)
//         alert(`${name} video got deleted`)

//        }
//     }
    
//     return ( 
//         <div className="videos">
//             <h1>Featured Video</h1>
//              <div className="videoData">
//              {video.map((data)=>{
//             return(
//                 <div className="video">
//                  <img src={data.thumbnail} alt="" />
//                  <div className="videoDetails">
//                  <h3>{data.title}</h3>
//                  <p>{data.channel}</p>
//                  <p>{data.views}</p>
//                  <a  onClick={()=>removeVideo(data.id,data.channel)}>Remove</a>
//                  </div>
//                 </div>
//             )
//             })}
//              </div>
//              <h1>Shorts</h1>
//             <div className="shortsData">
//              {shorts.map((datas)=>{
//                 return(
//                     <div className="short">
//                      <img src={datas.thumbnail} alt="" />
//                      <div className="shortsDetails">
//                      <h3>{datas.title}</h3>
//                      <p>{datas.views}</p>
//                      </div>
//                     </div>
//                 )
//              })}
//             </div>
//         </div>

    
//      );

 
// export default Videos;