import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
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

    // Validar nombre
    if (!name) {
      formErrors.name = "El nombre es requerido";
    }

    // Validar rol
    if (!role) {
      formErrors.role = "El rol es requerido";
    }

    // Validar correo
    if (!email) {
      formErrors.email = "El correo es requerido";
    } else if (!validateEmail(email)) {
      formErrors.email = "Ingrese un correo válido";
    }

    // Validar contraseña
    if (!password) {
      formErrors.password = "La contraseña es requerida";
    }

    // Verificar si hay errores
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      // Aquí podrías manejar el registro exitoso
      console.log("Registro exitoso con:", { name, role, email, password });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center my-4">Registro</h1>
          <form onSubmit={handleSubmit}>
            {/* Campo de nombre */}
            <div className="form-group mb-3">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>

            {/* Campo de rol */}
            <div className="form-group mb-3">
              <label htmlFor="role">Rol:</label>
              <input
                type="text"
                className="form-control"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
              {errors.role && <p className="text-danger">{errors.role}</p>}
            </div>

            {/* Campo de correo */}
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

            {/* Campo de contraseña */}
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
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
