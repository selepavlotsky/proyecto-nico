const TweetsPage = (handleClick) => {
  return (
    <div>
      <header>
        <h1>Buenos días</h1>
        <button onClick={handleClick}>Cerrar Sesión</button>
      </header>
      <div className="post-section">
        <div>
          <h1>Posts</h1>
          <div></div>
        </div>
        <div>
          <h1>New Post</h1>
          <div>
            <textarea
              placeholder="Escribir aquí..."
              name=""
              id=""
              cols="50"
              rows="8"
            ></textarea>
            <button>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetsPage;
