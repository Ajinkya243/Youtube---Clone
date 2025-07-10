import React from 'react'

const Comment=({data})=>{
    const{name,text,replies}=data;
    return(
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-sm my-2'>
            <img src="https://www.iconpacks.net/icons/2/free-icon-user-3296.png" alt="" width={35} height={35} />
            <div className='px-3'>
            <p className='font-bold'>Name</p>
            <p>Comment</p>
            </div>
        </div>
    )
}


const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl'>Comments:</h1>
        <Comment data={{name:'akku',text:'nice song'}}/>
    </div>
  )
}

export default CommentsContainer