import "./App.css";
import love from "./static/love.jpg";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    if (password === "vibes") {
      alert("Vírus copia zap instalado com sucesso");
      alert("Brincadeira amor, pode seguir que ta tranquilo");
      setClicked(true);
    }
  };

  return !clicked ? (
    <div className="App">
      <div className="Body">
        <div className="Container-dark">
          <h3>
            Rairai esse site precisa confirmar que é você, onde a gente se
            conheceu?
          </h3>

          <div className="Form">
            <label htmlFor="password">Onde?</label>
            <input
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button onClick={(e) => handleClick(e)}>Validar</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="App">
      <div className="Body">
        <h3>
          Você acaba de receber o título de namorada mais carinhosa da face da
          terra!
        </h3>
        <div className="Container">
          <img src={love} alt="meu morzao" />
          <h4>
            Por esse motivo você acaba de ganhar de presente de aniversario a
            bagatela de R$ 500,00 em tatuagem
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
