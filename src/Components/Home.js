import React, { useEffect, useState } from 'react'
import logo from '../asset/logo.png'
import './Home.scss'
import { FaSearch } from "react-icons/fa";
import { MdOutlineOfflinePin } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMdApps } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { FaGoogleDrive } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { RiUserShared2Line } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import { RiSpam2Line } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";
import { CiCircleInfo } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import calender from '../asset/icons/styles/calender.png'
import tasks from '../asset/icons/styles/tasks.png'
import keeps from '../asset/icons/styles/keeps.png'
import Model from './Model';
import { db ,auth } from '../firebase';
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';


const Home = ({photoURL}) => {
  const[open ,setOpen]=useState(false)
const[file,setFile]=useState([])
  const handleclick=()=>{
    setOpen(true)
  }

useEffect(()=>{
db.collection("my files").onSnapshot(snapshot=>{
  setFile(snapshot.docs.map(doc=>({
    id:doc.id,
    data:doc.data(),

  })))
})
},[])


const [grid,setGrid]=useState(true)

const gridlayout=()=>{
setGrid(!grid)
}


function formatBytes(bytes ,decimals=2){
if(bytes===0) return '0 bytes'
const k=1024;
const dm =decimals<0 ?0:decimals;
const sizes =['Bytes','KB','MB','GB','TB','PB','EB','ZB','YB'];

const i=Math.floor(Math.log(bytes)/Math.log(k))
return parseFloat((bytes/Math.pow(k,i)).toFixed(dm)) + ' ' +sizes[i];

}



const[opendrive ,setOpendrive]=useState(false)

const Opendrive=()=>{
setOpendrive(!opendrive)
}

const navigate = useNavigate();

const handleDelete = (id) => {
  db.collection("my files").doc(id).delete().then(() => {
    console.log("Document successfully deleted!");
    navigate('/App');
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });
};




const handleLogout = () => {
  auth.signOut().then(() => {
    console.log("User signed out successfully!");
    // You can redirect the user to the login page or home page
    window.location.href = '/login'; // Assuming you have a login route
  }).catch((error) => {
    console.error("Error signing out: ", error);
  });
};
  return (
   <div>

   {
    open ? <Model open={open} setOpen={setOpen}/> :
   
     <div className='container'>
      <div className="header"  >

<div className="header__logo">


<h1 className='header__logo--heading'>UPLOAD DOCS</h1>
</div>

{/*  header */}
<div className="header__search">

<span><FaSearch  className='search__icon'/></span>

<input type="text" className="search"  placeholder='Search in Drive' />

</div>

{/* header icons */}

<div className="header__icons">

<div className="head__icon" onClick={handleLogout}>
                  <span><IoMdLogOut  className='icons'/></span>
                  <div className="tooltip " >Logout</div>
                </div>
<div className="head__icon">
  
  <span><MdOutlineOfflinePin  className='icons' /></span>
  <div className="tooltip"> Offline</div>
</div>

<div className="head__icon">
 
  <span><MdContactSupport  className='icons '/></span>
  <div className="tooltip">Support</div>
</div>

<div className="head__icon">

  <span><IoSettingsOutline className='icons ' /></span>
  <div className="tooltip">Settings</div>
</div>

<div className="head__icon">

  <span><IoMdApps className='icons'  /></span>
  <div className="tooltip"> Apps</div>
</div>

<div className="head__icon">

  <span><RxAvatar className='icons '  src={photoURL}/></span>
  <div className="tooltip">Profile</div>
</div>





</div>
      </div>

      {/*  main section */}

      <div className="main">
      {/* sidebar */}
        <div className="sidebar">
 <button className='sidebar__add--button'  onClick={handleclick}><IoAdd className='sidebar__addicon' />New</button>
 <div className="sidebar__options">
  <li className='active'> <CiHome  className='sidebar__icons '/>Home</li>
  <li className='sidebar__list'><FaGoogleDrive className='sidebar__icons' />My Drive</li>
  <li className='sidebar__list'><MdComputer className='sidebar__icons' />Computers</li>
  <br />
  <li className='sidebar__list'><RiUserShared2Line className='sidebar__icons' />Shared with me</li>
  <li className='sidebar__list'><FaRegClock  className='sidebar__icons'/>Recent</li>
  <li className='sidebar__list'><IoMdStarOutline className='sidebar__icons' />Starred</li>
  <br />
  <li className='sidebar__list'><RiSpam2Line  className='sidebar__icons'/>Spam</li>
  <li className='sidebar__list'><FaRegTrashAlt className='sidebar__icons' />Trash</li>
  <li className='sidebar__list'><CiCloudOn  className='sidebar__icons'/>Storage</li>

<div className="bottom__part">
<h3>8.59GB of 15GB used</h3>
<button className="storage">Get more Storage</button>
</div>
 
 </div>


        </div>
{/* center part */}


        <div className="center__part">
         
        <div className="center__header">
          <button className="drive" onClick={Opendrive}>My Drive <FaCaretDown /> </button>
          
         <div className="center__header--icons">

         <div className="center">
         <button className='add__button'  onClick={handleclick}><IoAdd className='sidebar__addicon' />New</button>
       
         </div>
        

         <div className="center">
         <LuLayoutGrid  className='center-icons'  onClick={gridlayout}/>
         <div className="tool">Layout</div>
         </div>
         
         <div className="center">
         <CiCircleInfo  className='center-icons'/>
         <div className="tool">view</div>
         </div>
         </div>
        </div>

        {opendrive ? <Dropdown/> :<span></span>}

        {/* center files */}


        { grid ? (<>
         <div className="center__files">
         {
          file.map((e)=>{
            return(
              <div className="files"><CiFileOn className='center__files--icon'/><span>{e.data.filename}</span></div>
            )
          })
         }
         </div> 
         
         <hr />



         <div className="center__header--row">
         <div className="center__row ">
         <div className="data"><p className='file__data'>Name</p></div>
        <div className="data"> <p className='file__data'>Owner</p></div>
        <div className="data"> <p className='file__data'>File size</p></div>
<div className="data"><p className='file__data'><BsThreeDotsVertical className='remove__icon'/></p>
<div className="tip">remove</div></div>
         </div>
       
         <hr />
         <div className="center__insertfiles">
         
          <div className="rows">

          {
            file.map((e)=>{
              return(
               <>
               <div className="center__row--next">
               <div className="data"><a href={e.data.fileurl}> <p className='file__data'>{e.data.filename}</p></a></div>
        <div className="data"> <p className='file__data'>me</p></div>
        <div className="data"> <p className='file__data'>{formatBytes(e.data.size)}</p></div>
<div className="data">
<p className='file__data'><BsThreeDotsVertical  className='remove__icon' onClick={() => handleDelete(e.id)}/></p>
<div className="tip">remove</div>
</div>
         </div>
         <hr />
               </>
              )
            })
          }

         </div>
         </div>
         </div></>) :(<>
         

         <div className="center__header--row">
         <div className="center__row ">
         <div className="data"><p className='file__data'>Name</p></div>
        <div className="data"> <p className='file__data'>Owner</p></div>
        <div className="data"> <p className='file__data'>File size</p></div>
<div className="data">
<p className='file__data'><BsThreeDotsVertical  className='remove__icon'/></p>
<div className="tip">remove</div></div>
         </div>
         </div>
         <hr />
         <div className="center__insertfiles--next">
         
          <div className="rows">

          {
            file.map((e)=>{
              return(
               <>
               <div className="center__row--next">
        <div className="data"><a href={e.data.fileurl}> <p className='file__data'>{e.data.filename}</p></a></div>
        <div className="data"> <p className='file__data'>me</p></div>
        <div className="data"> <p className='file__data'>{formatBytes(e.data.size)}</p></div>
<div className="data"><p className='file__data'><BsThreeDotsVertical className='remove__icon' onClick={() => handleDelete(e.id)}/></p>
<div className="tip">remove</div></div>
         </div>
         <hr />
               </>
              )
            })
          }

         </div>
         </div></>)


        }

        </div>
        <div className="right__part">
     <div className="right-icons"><img src={calender}  className="image-icons" alt="" /></div>
     <div className="right-icons"><img src= {keeps} className="image-icons"  alt="" /></div>
     <div className="right-icons"><img src={tasks}  className="image-icons" alt="" /></div>
      </div>
      </div>
      
    </div>
   }

   </div>
  )
}

export default Home
