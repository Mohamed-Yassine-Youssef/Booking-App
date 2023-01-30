import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./mailList.css"

const MailList = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      {!user && <><span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        
        <button style={{padding:"0 20px"}}><Link to="/register" style={{color:"white",textDecoration:"none"}}>Subscribe</Link></button></div> </>}
      
      
    </div>
  )
}

export default MailList