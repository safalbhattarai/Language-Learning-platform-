import registerImage from "../assets/register.jpg";
import "./Register.css";

function Register() {
  return (
    <div className="register-page">

      <div className="register-left">

        <img
          src={registerImage}
          alt="Register"
        />

      </div>

      <div className="register-right">

        <form className="register-form">

          <h1>Create Account</h1>

          <p>Start your language learning journey today.</p>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;