import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

// ✅ Login Form Component
const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "50px", fontFamily: "Arial" }}>
      <h2>Login to Admin Panel</h2>
      <input
        type="email"
        required
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={{ display: "block", marginBottom: "10px" }}
      />
      <input
        type="password"
        required
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{ display: "block", marginBottom: "10px" }}
      />
      <button type="submit">Login</button>
    </form>
  );
};

// ✅ Main App
const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCred.user);
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <>
      {user ? <div>Dashboard Coming Soon</div> : <LoginForm onLogin={handleLogin} />}
    </>
  );
};

// ✅ Render App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
