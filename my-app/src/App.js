import { useEffect } from "react";
import { Route, Routes } from "react-router";
import mainRoutes from "./Routes/MainRoutes";

import "./App.css";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "NinjaRecruiter";
  }, []);
  return (
    <div className="App">
      <div className="row">
        <main role="main">
          <Routes>
            {mainRoutes.map(({ path, element }, i) => {
              return <Route key={i} path={path} element={element} />;
            })}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
