import "./Logincomp.css"

import { Link } from "react-router-dom";
import Loginfootercomp from "./Loginfootercomp";
const Logincomp = () => {

return(



    <div>

<div className="login-first-container">
 
            </div>



<div>
<h1 className="h1-text-align"> Login</h1>
<div className="Login-inner-container"
>    


<label className="labels-login" > Phone number</label>
<br />
<input className="input-login" type="number" />
<br />
<label className="labels-login">password</label>
<br />
<input className="input-login" type="text" />
<br />
<button className="button-login">Login</button>
</div>
 



<Loginfootercomp/>








</div>




    </div>
)

}
export default Logincomp;