import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <NavBar
        title="Strivestaurant"
        links={["Home", "Contacts", "Location", "blabla", "Alfredo"]}
      />
      <Home newTitle={"StriveFood"} newPayoff={"The best five pasta dishes"} />
    </div>
  );
}

export default App;
