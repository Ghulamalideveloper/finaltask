<<<<<<< HEAD
// import React from 'react'
// import Header from '../Pravite/Header'
// import Sidemenu from '../Pravite/Sidemenu'
// import Maincontent from '../Pravite/Maincontent'
// import Footer from '../Pravite/Footer'


// const Layout = () => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   return (
//     <>
//     <div className='w-[90%] m-auto h-full flex justify-center items-center'>
//     <div className='w-full h-[100%]  relative flex flex-wrap gap-[8px]'>
//     <Header/>
//     <Sidemenu/>
//     <Maincontent/>
//     <Footer/>
//     </div>
//     </div>
//     </>
   
//   )
// }

// export default Layout
=======
import React from 'react'
import Header from '../Pravite/Header'
import Users from '../Pravite/Users'
import AddProduct from '../Pravite/AddProduct'


const Layout = () => {
  return (
    <div className='w-full h-screen bg-black flex gap-[0px] flex-wrap relative'>
      <Header/>
      <div className='h-screen w-[22%] flex justify-center items-center'>
        <h3>side menu</h3>
      </div>
      <div className='bg-[pink] w-[78%] flex h-full justify-center items-center'>
        <Users/>
      </div>
      <div className='bg-[blue] w-full'>Footre</div>
    </div>
  )
}

export default Layout
>>>>>>> 6a41b5031287c7be5191be2a0fe2211376df7f22
