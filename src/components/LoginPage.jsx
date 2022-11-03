import background from "../assets/images/background.jpg";

const LoginPage = (handleClick) => {
  return (
    <div className="container-sign-in">
      <img className="background-sign" src={background} alt="" />

      <div className="form-sign">
        <div>
          <h1>Iniciar Sesión</h1>
          <form>
            <input type="text" placeholder="Usuario" />
            <input type="text" placeholder="Contraseña" />
            <button onClick={handleClick}>Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
