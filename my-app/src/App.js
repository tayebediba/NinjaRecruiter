import { Route, Routes } from "react-router";
import Home from "./components/home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <div className="row">
        <main role="main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
