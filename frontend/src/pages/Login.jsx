import loginImage from "../assets/login.jpg";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">

      <div className="login-image">
        <img src={loginImage} alt="Login" />
      </div>

      <div className="login-form-section">

        <form className="login-form">

          <h1>Welcome Back</h1>

          <p>Continue your language journey.</p>

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;