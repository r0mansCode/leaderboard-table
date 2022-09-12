import "./App.css";
import first_place from "./assets/images/first_place.svg";
import second_place from "./assets/images/second_place.svg";
import third_place from "./assets/images/third_place.svg";
import { Table } from "./table/Table";

function App() {
  return (
    <div className="AppContainer">
      <div className="title">HALL OF FAME</div>
      <div className="description">
        Have you ever dreamed of taking part in a tournament? <br />
        Galloping on a horse while holding a spear and trying to knock
        <br /> your enemy out of…
      </div>
      <div className="button">Join now</div>
      <div className="winnerContainer">
        <div className="Place_second">
          <img src={second_place} />
          <div className="winContainer winContainer--second">
            <div className="nickname nickname--second">AP184***</div>
            <div>BET</div>
            <div className="secondFont">€61</div>
            <div className="yellow yellow--small">
              <div className="decoration decoration--before" />
              WIN
              <div className="decoration decoration--after" />
            </div>
            <div className="yellow">€1852</div>
          </div>
        </div>
        <div className="Place_first">
          <img src={first_place} />
          <div className="winContainer winContainer--first">
            <div className="nickname nickname--first">Kate***</div>
            <div>BET</div>
            <div className="secondFont">€461</div>
            <div className="yellow yellow--small">
              <div className="decoration decoration--before" />
              WIN
              <div className="decoration decoration--after" />
            </div>
            <div className="yellow">€61852</div>
          </div>
        </div>
        <div className="Place_third">
          <img src={third_place} />
          <div className="winContainer winContainer--third">
            <div className="nickname nickname--third">Lig***</div>
            <div>BET</div>
            <div className="secondFont">€12</div>
            <div className="yellow yellow--small">
              <div className="decoration decoration--before" />
              WIN
              <div className="decoration decoration--after" />
            </div>
            <div className="yellow">1000000 HUF</div>
          </div>
        </div>
      </div>
      <div className="title title--table">TOP WINNERS</div>
      <Table />
      <div className="button button--showResults">Show all results</div>
    </div>
  );
}

export default App;
