import './App.css';
import first_place from "./assets/images/first_place.svg"
import second_place from "./assets/images/second_place.svg"
import third_place from "./assets/images/third_place.svg"

function App() {
  return (
    <div className="AppContainer">
      <div className='title'>HALL OF FAME</div>
      <div className='description'>
        Have you ever dreamed of taking part in a tournament? <br />
        Galloping on a horse while holding a spear and trying to knock<br /> your enemy out of…
      </div>
      <div className='joinButton'>
        Join now
      </div>
      <div className='winnerContainer'>
        <div className='secondtPlace'>
          <img src={second_place} />
        </div>
        <div className='firstPlace'>
          <img src={first_place} />
          <div></div>
        </div>
        <div className='thirdPlace'>
          <img src={third_place} />
        </div>
      </div>
    </div>
  );
}

export default App;
