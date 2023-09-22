import Navbar from "./components/Navbar";
import Controls from "./components/Controls";
import CurrentPlayingSong from "./components/CurrentPlayingSong";
import PlayListHeader from "./components/PlayListHeader";
import Divider from "./components/Divider";
import ActionBar from "./components/ActionBar";
import Songs from "./components/Songs";
import "./App.css";
import { Login } from "./pages/login";

function App() {
  return (
    <>
      {/* <Login /> */}
      <div className="container">
        <Navbar />
        <div style={{ width: "100%" }}>
          <PlayListHeader />
          <Divider />
          <ActionBar />
          <Divider />
          <Songs />
        </div>
      </div>
      <div className="bottom_control_board">
        <CurrentPlayingSong />
        <Controls />
        <div className="volumn">Volume</div>
      </div>
    </>
  );
}

export default App;
