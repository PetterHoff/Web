import Signup from "../components/auth/SignUp";
import SignIn from "../components/auth/SignIn";

const Login = () => {
    return (
        <>
            <div>
                <SignIn />
                <Signup />
            </div>
        </>
    );
};

export default Login;
