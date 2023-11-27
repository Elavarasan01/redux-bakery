import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import UserContainer from "./components/UserContainer";
function App() {
  return (
    <Provider store={store}>
      <div style={{padding:"5px", background:"lightblue"}}>
        <h2 style={{color:"white",textAlign:"center"}}>Redux</h2>
      </div>
      <div className="App" style={{ display: "flex" }}>
        <div style={{width:"50%"}}>
          <HooksCakeContainer />
          <IceCreamContainer />
        </div>
        <div>
          <UserContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
