import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LikeContext } from '../context/LikeContext'
import Navbar from '../companents/Navbar'
import Home from '../pages/Home'
import Dinamice_card from '../companents/Dinamice_card'
import Bascet from '../pages/BascetPage'
import Search_page from '../pages/Search_page'
import Like_page from '../context/Like_page'
import Footer from '../pages/Footer'

const PrivateRoutest = () => {
    const [count, setCount] = useState(0)
    const {hear,bold,setBold} = useContext(LikeContext)
    return (
        <div className={bold?'w-full flex fixed flex-col items-center':'w-full flex flex-col items-center'}>
        <Navbar/>
        
        <div className='mt-[86px] max-w-[1440px] w-full'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:id' element={<Dinamice_card/>}/>
            <Route path='/bascet' element={<Bascet/>}/>
            <Route path='/search' element={<Search_page/>}/>
            <Route path='/like' element={<Like_page/>}/>
          </Routes>
        </div>
        <Footer/>
       </div>
    )
}

export default PrivateRoutest