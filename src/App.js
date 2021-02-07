import "./App.css";
import ReactPlayer from "react-player/youtube";
import car from "./images/whitecar.jpg";

function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="titleRed">Your name here</h1>
      <hr />
      {/*Adding image from public folder*/}
      <img src="/images/bluecar.jpg" alt="blue car" />
      <hr />
      {/*Adding image from src folder*/}
      <img src={car} alt="white car" />;
      <hr />
      <ReactPlayer
        url="https://youtu.be/LHKTSxU12CI"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </div>
  );
}

export default App;
