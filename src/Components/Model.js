import React, { useState } from 'react'
import './Model.scss'
import { storage ,db } from '../firebase'
import firebase from 'firebase'


const Model = ({ open, setOpen }) => {
    const [uploading, setUploading] = useState(false)

    const[file ,setFile]=useState(false)

    const handleChange = (e ) => {
        e.stopPropagation();
        console.log(e.target.files[0]);
       if(e.target.files[0]){
        setFile(e.target.files[0])
       }
       
    }

    const handleubmit = (e) => {
        e.preventDefault()
        // Handle the file upload logic here
      
        

        setUploading(true)
        storage.ref(`files/${file.name}`).put(file).then(snapshot=>{
           storage.ref("files").child(file.name).getDownloadURL().then(url=>{
            db.collection("my files").add({
                Timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                filename:file.name,
                fileurl:url,
                size:snapshot._delegate.bytesTransferred
            })
            setUploading(false)
            setFile(null)
            setOpen(false)
           })
        })
    }

    return (
        <div className="model" >
            <form onSubmit={(e) => e.preventDefault()}>
                <div className='model__container'>
                    <h1>Select a file you want to upload</h1>
                    {
                        uploading ? <p className='upload'>Uploading...</p> :
                            (<>
                                <input type="file" className='choosefile' onChange={handleChange} />
                                <br />
                                <button className='upload' onClick={handleubmit} >Upload</button>
                            </>)
                    }
                </div>
            </form>
        </div>
    )
}

export default Model
