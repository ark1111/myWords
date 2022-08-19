import Nav from "./components/nav/Nav";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./view/home";

function App() {
  return (
    <div className="App w-screen h-screen overflow-x-hidden">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
