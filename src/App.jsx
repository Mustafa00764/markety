import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import PrivateRoutest from "./routest/PrivateRoutest";
import PublicRoutest from "./routest/PublicRoutest";

const App = () => {
  const { isAuth } = useContext(AuthContext);
  return (
   <div>
    {
      isAuth?<PrivateRoutest/>:<PublicRoutest/>
    }
   </div>
  )
}

export default App
