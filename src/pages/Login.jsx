import { Route, Routes } from "react-router-dom"
import Login_page from "./Login_page"


const Login = () => {
    return (
        <div className="w-full h-screen bg-no-repeat bg-cover bg-center bg-[url(https://yastatic.net/s3/passport-auth-customs/customs/_/8a89ae46.jpg)]">
            <div className=" w-full h-full flex items-center justify-center">
                <Routes>
                    <Route path="/" element={<Login_page/>}/>
                    <Route path="/*" element={<Login_page/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Login