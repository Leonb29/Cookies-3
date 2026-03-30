import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 Función de login
  const handleLogin = async () => {
    try {
      const res = await fetch("https://cookies-3-qg3w.onrender.com/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        alert("Error login: " + (data.message || "credenciales incorrectas"));
        return;
      }

      localStorage.setItem("token", data.token);
      alert("Login exitoso");
    } catch (error) {
      console.log("ERROR:", error);
      alert("Error de conexión");
    }
  };

  // 🔹 Función de registro
  const handleRegister = async () => {
    try {
      const res = await fetch("https://cookies-3-qg3w.onrender.com/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert("Error registro: " + (data.message || "No se pudo registrar"));
        return;
      }

      alert("Usuario registrado correctamente ✅");
    } catch (error) {
      console.log("ERROR:", error);
      alert("Error de conexión");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login / Registro</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Ingresar</button>
      &nbsp;&nbsp;
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
}

export default Login;