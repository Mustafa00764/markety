import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"


const PublicRoutest = () => {
    return (
        <div className=" ">
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/*" element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default PublicRoutest