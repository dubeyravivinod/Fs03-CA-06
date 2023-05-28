import "./Navbar.css"

function Navbar(){
    return <>
        <div className="Navbar">
         
         <div className="Nav1">
            <ul>
                <li><h2>♣️ HOTSUITE</h2></li>
                <li>Platform</li>
                <li>Plans</li>
                <li>Enterprise</li>
                <li>Resources</li>
                <li>Education</li>
            </ul>
         </div>
         <div className="Nav2">
            <ul>
                <li>Contact Us</li>
                <li>Login</li>
                <li><button>Sign Up</button></li>
            </ul>
         </div>

        </div>
    </>
}

export default Navbar;