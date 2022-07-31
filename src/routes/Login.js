import AuthForm from "../components/AuthForm";

const Login = ({ setToken }) => {
  return (
    <main>
      <h2>Login</h2>
      <AuthForm setToken={setToken} registerOrLogin ="login" />
    </main>
  )
}

export default Login;


