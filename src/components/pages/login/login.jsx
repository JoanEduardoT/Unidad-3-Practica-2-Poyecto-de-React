import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Validar si es un correo válido
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validar campos
    if (!email) {
      formErrors.email = "El correo es requerido";
    } else if (!validateEmail(email)) {
      formErrors.email = "Ingrese un correo válido";
    }

    if (!password) {
      formErrors.password = "La contraseña es requerida";
    }

    // Verificar si hay errores
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      // Aquí podrías manejar el login exitoso
      console.log("Login exitoso con:", { email, password });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h1 className="text-center my-4">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="email">Correo:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-danger">{errors.password}</p>}
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
