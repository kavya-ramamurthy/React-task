import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function Auth() {
  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <div>
      {isLogin ? <LoginForm /> : <RegisterForm />}

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create account" : "Already have an account?"}
      </button>
    </div>
  );
}
export default Auth;
