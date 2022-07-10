import "./App.css";
import Footer from "./components/Footer/MyFooter";
import NavigationBar from "./NavigationBarAndRoutes/NavBar";
import MyRoutes from "./NavigationBarAndRoutes/Routes";

function App() {
  return (
    <div className="App">
      <NavigationBar /> 
      <MyRoutes />
      <Footer />
    </div>
  );  
}

export default App;