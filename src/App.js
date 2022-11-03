import "./App.css";
import LoginPage from "./components/LoginPage";
import TweetsPage from "./components/TweetsPage";
import { useState } from "react";
import CustomProvider from "./components/CustomProvider";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleClick = () => {
    setIsLogged(!isLogged);
  };
  return (
    <div>
      <CustomProvider>
        {isLogged ? (
          <TweetsPage handleClick={handleClick} />
        ) : (
          <LoginPage handleClick={handleClick} />
        )}
      </CustomProvider>
    </div>
  );
}

export default App;
