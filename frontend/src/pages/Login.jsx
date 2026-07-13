import "./Login.css";

function Login() {
  return (
    <div className="login-page">

      <div className="login-left">
        <h1>Welcome Back</h1>
        <p>Continue your language learning journey.</p>
      </div>

      <div className="login-right">

        <form className="login-form">

          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
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