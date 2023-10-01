
import React, { useEffect, useState } from 'react'

// import { Button } from 'react-bootstrap';
// import { Form } from 'react-router-dom';
//import { Label } from '@mui/icons-material';
//import {getDownloadURL, ref, uploadBytes, uploadBytesResumable} from 'firebase/storage'
import{ref,getDownloadURL,uploadBytesResumable,listAll} from 'firebase/storage'
import { storage } from '../../../Firebasess'
//  import {storage}  from '../../../Firebasess'
// import{v4} from 'uuid'


export  const Imgfolder=()=> {
// const [progr,setprogres]=useState(0)

//     const handleclick=(e)=>{
//         e.preventDefualt()
//         const file=e.target[0].files[0];
//         // console.log(file)
//         filupload(file)
//     }
    
//     const filupload=(file)=>{
// if(!file)return ;
// const storageRef=ref(storage,`/files/${file.name}`)
// const Uploadtask=uploadBytesResumable(storageRef,file)
// Uploadtask.on('state_changed',
//   (snapshot)=>{
//     const progres=Math.round(
//         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         )
// setprogres(progres)

// },(er)=>console.log(er), () =>{
// {
//     getDownloadURL(Uploadtask.snapshot.ref)
//     .then((url => console.log(url)))
// }
// }
// )
//     }
// const [image,setimage]=useState(null)
// const[url,seturl]= useState(null)
// const handlechangeimg=(e)=>{
// if(e.target.files[0]){
// setimage(e.target.files[0])
// }
// console.log(image)
// }
// const handlesubmit=()=>{
// const imagesRef= ref(storage,'image')
// uploadBytes(imagesRef,image).then(()=>{
//     getDownloadURL(imagesRef)
//     .then((url) =>{
//     seturl(url)
//     }).catch(error=>{
// console.log(error.message,'err aya jiro')
//     })
//     setimage(null)
// }).catch(err =>{
//     console.log(err.message)
// })
// }
// const [uplodimages,setuploudimage]=useState(null)
// const Uploadfile=()=>{
// if(uplodimages == null) return;
// const imgRef=ref(storage, `/images/${uplodimages.name + v4()}`);

// uploadBytes(imgRef,uplodimages).then(()=>{
// alert('image uploaded')
//     // getDownloadURL(snapshot.ref).then((URL)=>{
//     //     console.log(URL)
//     // })
// })
// }
// const [image, setImage] = useState('');
//     const upload = () => {
//         if (image == null)
//             return;
//         storage.ref(`/images/${image.name}`).put(image)
//             .on("state_changed", alert("success"), alert);
//     }

const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    const[imagelis,setimageslists]=useState([])
    const imagesliisRef=ref(storage,'images/')
    console.log(imageAsFile)
 const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(imageFile => (image))

    
    
  }
  const handleFireBaseUpload = e => {
    e.preventDefault()
  console.log('start of upload')
  // async magic goes here...
  if(imageAsFile === '' ) {
    console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)


  }
  const storeref = ref(storage,`/images/${imageAsFile.name}`)
  const uploadTask = uploadBytesResumable(storeref,imageAsFile)
  //
   //initiates the firebase side uploading 
   uploadTask.on('state_changed', 
   (snapShot) => {
     //takes a snap shot of the process as it is hadi dhaco
     console.log(snapShot)
   }, (err) => {
     //catches the errors ikeyneyso
     console.log(err)
   }, () => {
    
     // gets the download url then sets the image from firebase as the value for the imgUrl key:
    getDownloadURL(uploadTask.snapshot.ref)   
   
      .then(fireBaseUrl => {
        setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))

//setImageAsFile
      })
   })
 
  }
  useEffect(()=>{
    listAll(imagesliisRef).then((Response)=>{
   // console.log(Response)
Response.items.forEach((item)=>{
  //fireBaseUrl
})
    })
      },[])
  return (
   
    <div>
        <div>
           
                {/* <input type='file' className='input'onChange={(event)=>{
                    setuploudimage(event.target.files[0])
                }}> */}

        {/* </input>
                <Button type='submit' onClick={Uploadfile}>upload</Button> */}
         
            {/* <h2>uploaded </h2> */}
            {/* <div className="App">
            <center>
                <input type="file" onChange={(e) =>
                { setImage(e.target.files[0]) }} />
                <button onClick={upload}>Upload</button>
            </center>

        </div> */}


<div className="App">form for handling file upload
<form onSubmit={handleFireBaseUpload}>
        <input 
          type="file"
          onChange={handleImageAsFile}
        />
        <button>upload to firebase</button>
      </form>
      
      <img src={imageAsUrl.imgUrl} alt="image tag" />
    </div>
        </div>
    </div>
  )
}
