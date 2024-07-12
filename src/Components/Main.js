import React from 'react'

import { useState } from 'react';

import Home from './Home';
import './Main.scss'

import dash from '../asset/icons/dash.png'
import { auth , provider } from '../firebase';
import { IoIosLock } from "react-icons/io";
import { FaLink } from "react-icons/fa6";
import { MdEditNote } from "react-icons/md";
import { VscCollapseAll } from "react-icons/vsc";
// import img1 from "./asset/icons/img1.png"
// import img2 from './asset/icons/img2.png'
import img1 from '../asset/icons/img1.png';
import img2 from '../asset/icons/img2.png';
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Main = () => {

    const[user ,setUser]=useState(null)

  const signIn=()=>{
    auth.signInWithPopup(provider).then(({user})=>{
      setUser(user)
    }).catch(error=>{
      alert(error.message)
    })
  }
  return (
    <div className='main'>
      {
    user?  <Home photoURL={user.photoURL}/> :(
      <>
      <div className="login__header">

 <div className="login__header--image">

 <h1>UPLOAD DOCS</h1>
 </div>

 <div className="login__header--items">
 
 <li>  <button  onClick={signIn} className='btn__login'>Sign In</button></li>
 
  <li>  <button  onClick={signIn} className='btn__login'>Login</button></li>
 
 </div>

</div>

<div className="main__container">
<div className="main__container--center">
  <h1 className='main__container--firstheading'>Join over 700 million registered <span className='span__firstheading'>users  who trust Drive </span></h1>
  <h3 className='main__container--secondheading'> Easy to use ,reliable ,Private and secure 
  .it's no wonder drive is the <br /><span className='span__heading'>choice for storing and sharing your most
  important files</span></h3>

  <div className="main__container--centerbtn">
  <button className='main__container--button'  onClick={signIn}>Find your plan</button>
  </div>
</div>
</div>



<div className="section">
  <div className="section__doing">
    <h1 className="section__heading">What can you do with Drive</h1>
    <div className="section__grid">
      <div className="box">
      <div className="icon"><IoIosLock  className="box__icon"/></div>
        <h3 className="box__heading">Store and protect your files</h3>
        <p className="box__description">Get the storage you and your teams need with
         security features like file recovery, 
        password protection, watermarking, and viewer history.</p>
      </div>

      <div className="box">
      <div className="icon"><FaLink  className="box__icon"/></div>
      
      <h3 className="box__heading">Stay in control of shared content</h3>
        <p className="box__description">Trackable links show when someone has opened a shared file and how long they’ve engaged with it. Plus, you can turn off access for
         any individual at any time without affecting others’ permissions.</p></div>
         {/* third box */}
      <div className="box">
      <div className="icon"><VscCollapseAll  className="box__icon"/></div>
      <h3 className="box__heading">Collaborate on your work</h3>
        <p className="box__description">Directly edit PDFs and use video tools to streamline 
        feedback and approval processes.</p></div>
        {/* fourth box */}
      <div className="box">
      <div className="icon"><MdEditNote className="box__icon"/></div>
      <h3 className="box__heading">Manage your business</h3>
        <p className="box__description">Automate manual processes with tools like eSignature templates, 
        which let you reuse documents in seconds.</p></div>
    </div>
  </div>
</div>


{/* shortcut work */}

<div className="work__container">
<div className="main__container--center">
  <h1 className='main__container--firstheading'>Shortcut your workday with Drive </h1>
  <h3 className='main__container--secondheading'> Quickly find, organize, and share important content all in one place with the AI universal search tool
    <br /><span className='span__heading'>built to save you time, so you can focus on the work that matters most.</span></h3>

  <div className="main__container--centerbtn">
  <button className='main__container--button'  onClick={signIn}> Go to Dashboard</button>
  </div>
  <div className="dashboard__image">
  <img src={dash} alt=""  className='dash__image'/>
</div>
</div>

</div>



{/* use of drive */}


<div className="use__section">
  <div className="container__section">
    <h1 className="container__heading">How will you use Drive?</h1>
    <div className="container__grid">
      <div className="grid">
<img src={img1} alt="" className='grid__img' />
<h2 className='heading'> For Work</h2>
<p className="grid__description">
Work efficiently with teammates and clients, stay in sync on projects, and keep company data safe—all in one place.
</p>
</div>
      <div className="grid">

      <img src={img2} alt="" className='grid__img' />

<h2 className='heading'>For personal use</h2>
<p className="grid__description">
Keep everything that’s important to you and your family shareable and safe in one place. Back up files in the cloud, share photos and videos, and more.
</p>
      </div>
    </div>
  </div>
</div>



{/*  Footer */}


<div className="footer__section">
  <div className="footer">
    <div className="footer__box">
<h2 className="footer__heading">Drive</h2>
<li className='footer__list'>Desktop app</li>
<li className='footer__list'>Mobile app</li>
<li className='footer__list'>Integrations</li>
<li className='footer__list'>Features</li>
<li className='footer__list'>Solutions</li>
<li className='footer__list'>Security</li>

    </div>
    <div className="footer__box">
    <h2 className="footer__heading">Products</h2>
<li className='footer__list'>Plus</li>
<li className='footer__list'>Professional</li>
<li className='footer__list'>Business</li>
<li className='footer__list'>Enterprise</li>
<li className='footer__list'>Dash</li>
<li className='footer__list'>SignIn</li>
<li className='footer__list'>Docs Send</li>
<li className='footer__list'>Plans</li>

    </div>
    <div className="footer__box">
    <h2 className="footer__heading">Features</h2>
<li className='footer__list'>Send large files</li>
<li className='footer__list'>Send long vedios</li>
<li className='footer__list'>Cloud photo storage</li>
<li className='footer__list'>Secure file transfer</li>
<li className='footer__list'>Backup</li>
<li className='footer__list'>Secured password</li>
<li className='footer__list'>Edit file</li>
<li className='footer__list'>Delete file</li>
<li className='footer__list'>Screen Recorder</li>
    </div>
    <div className="footer__box">

    <h2 className="footer__heading">Support</h2>
<li className='footer__list'>Help Center</li>
<li className='footer__list'>Contact us</li>
<li className='footer__list'>Privacy & Terms</li>
<li className='footer__list'>Cookie Policy</li>
<li className='footer__list'>Sitemap</li>
<li className='footer__list'>Ai Principals</li>
<li className='footer__list'>Learning Resources</li>

    </div>
    <div className="footer__box">
    <h2 className="footer__heading">Resourses</h2>
<li className='footer__list'>Blog</li>
<li className='footer__list'>Customer Stories</li>
<li className='footer__list'>Developers</li>
<li className='footer__list'>Resources Liberary</li>
<li className='footer__list'>Community Forums</li>
<li className='footer__list'>Refferals</li>
<li className='footer__list'>Reseller Parteners</li>
<li className='footer__list'>Find Partener</li>
    </div>

    <div className="footer__box">
    <h2 className="footer__heading">Company</h2>
<li className='footer__list'>About us</li>
<li className='footer__list'>Jobs</li>
<li className='footer__list'>Invester Relation</li>


    </div>
  </div>

  <div className="footer__icons">
  <IoLogoInstagram  className='foot'/>
  <FaTwitter  className='foot'/>
  <FaLinkedin  className='foot'/>
  
  </div>
  <div className="mail">siddiquisafiya69@gmail.com</div>
</div>


      </>
    )
   }
    </div>
  )
}

export default Main
