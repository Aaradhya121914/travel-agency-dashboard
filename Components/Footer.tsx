import React from 'react'

const Footer = () => {
    const user={
        name:"Adrian",
        email:"contact@jsmastery.pro",
        imageUrl:"../public/assets/images/david.webp"
    }
  return (
   <footer className="nav-footer">
    <img src={user?.imageUrl || "../public/assets/images/david.webp"} alt={user?.name  || "David"} className='size-[30px]' />
    <article>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
    </article>
    <button onClick={()=>{console.log("LogOut")}} className='cursor-pointer'>
        <img src="../public/assets/icons/logout.svg" alt="logout" className='size-6'/>
    </button>
   </footer>
  )
}

export default Footer
