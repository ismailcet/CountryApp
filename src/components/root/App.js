import Countries from "../countries/Countries";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <main>
        <Header></Header>
      </main>
      {/* <Countries></Countries> */}
    </div>
  );
}

export default App;
