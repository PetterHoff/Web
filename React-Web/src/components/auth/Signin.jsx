
import "./LoginSignup.css"

import user_icon from "../Assets/person.png"
import email_icon from "../Assets/email.png"
import password_icon from "../Assets/password.png"


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="sign-in-container">
            <form>
                <h1>Log in</h1>
                <input type="email" placeholder="enter your email" value={email}></input>
                <input type="password" placeholder="enter your password"> value ={password}</input>
            </form>
        </div>
    )
}

export default LoginSignup