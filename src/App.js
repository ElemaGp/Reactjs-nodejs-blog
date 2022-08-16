import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

/* I like the simple way he created the project. Just create your folder in Documents, open the folder in vscode
   and in the terminal type "npx create-react-app . " */

function App() {
  return (
    <>
    <div className="App">
        <TopBar />
        <Settings />
        
    </div>
    </>
  );
}

export default App;
