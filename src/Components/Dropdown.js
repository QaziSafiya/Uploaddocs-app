import React from 'react'
import './Dropdown.scss'
import { SiGoogledocs ,SiGooglesheets ,SiGoogleslides ,SiGoogleforms} from "react-icons/si";
import { FaFolder ,FaFile ,FaFileUpload} from "react-icons/fa";

import { motion ,stagger} from 'framer-motion';

const Dropdown = () => {
  return (
    <motion.div className='dropdown__container' animate={{
      x: 0,
      y: 2,
      ease: "linear",
     
    }} transition={{ type: "spring", stiffness: 100  }}>

      <div className="dropdown__items">
        <li className="list__items"><FaFolder  className='list__icon'/>New Folder</li>
        <hr />
        <li className="list__items"><FaFile className='list__icon' />File Upload</li>
        <li className="list__items"><FaFileUpload  className='list__icon'/>Folder Upload</li>
        <hr />
        <li className="list__items"><SiGoogledocs className='list__icon' /> Docs</li>
        <li className="list__items"><SiGooglesheets className='list__icon' /> Sheets</li>
        <li className="list__items"><SiGoogleslides className='list__icon'/> Slides</li>
        <li className="list__items"> <SiGoogleforms className='list__icon' />Forms</li>
      </div>
    </motion.div>
  )
}

export default Dropdown
