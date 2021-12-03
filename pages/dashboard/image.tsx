// import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage'
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import React, { ContextType, useEffect, useState } from 'react'
// import { storage } from '../../firebase/firebase'

// import { postFetch } from '../../lib/handleFetch'

// function GetFileSplitName(file: any): FileNameType {

//   var temp = file.name.split('.')

//   var ext = '.' + temp[temp.length - 1]
//   var name = temp.slice(0, -1).join('.')

//   console.log(ext, name);

//   return { name: name, ext: ext }

// }

const ImageDashboard: NextPage = () => {

  return(<></>)

//   const [imageContent, setImageContent] = useState<ImageUploadType | null>(null)

//   const handleInputChance = (e: React.ChangeEvent<HTMLInputElement>) => {

//     e.preventDefault()

//     if(e.target.files == undefined) { return }

//     var files = [].slice.call(e.target.files)

//     const imageName = GetFileSplitName(files[0])
//     const imageToUpload = files[0] as File
    
//     console.log(files[0])

//     setImageContent({
//       ...imageContent,
//       image: imageToUpload,
//       imageName: imageName,
//       imageUrl: ''
//     })

//     console.log(imageContent);

//   }

//   const postImage = async () => {

//     if(imageContent == undefined) { return }

//     const metadata = {
//       contentType: imageContent?.image.type
//     }

//     const storageRef = ref(storage, `Images/${imageContent?.imageName.name}`)

//     const uploadTask = uploadBytesResumable(storageRef, imageContent?.image as File, metadata)

//     var imageUrl = await getDownloadURL(uploadTask.snapshot.ref)

//     setImageContent({
//       ...imageContent,
//       imageUrl: imageUrl
//     })

//     console.log('POST: ', imageContent)  
//   }

//   useEffect(() => {
//     console.log('UseEffect: ', imageContent)

//     if(imageContent?.imageUrl != '') {
//       postFetch('image/', { data: imageContent })
//     }

//   }, [imageContent])

//   return (
//     <>
//       <form action="POST">
//         <input type="file" onChange={handleInputChance} />
//         <button type="submit">submit</button>
//       </form>

//       <button onClick={postImage}>post</button>
//     </>
//   )
// }

// export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {

//   return {
//     props: {}
//   }
}

export default ImageDashboard
