import { Suspense, useState } from 'react';
import './App.css';

import { ToastContainer } from 'react-toastify';

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import Navbar from './components/Navbar';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

//-----⚡ data load
const fetchPlayers = async () => {
  const res = await fetch('/players.json');
  return res.json();
};

//-----⚡ promise function call
const playersPromise = fetchPlayers();

function App() {
  //-----⚡ toggle future
  const [toggle, setToggle] = useState(true);

  //-----⚡ balance
  const [availableBalance, setAvailableBalance] = useState(800000);

  //-----⚡ selected player
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  // console.log(purchasedPlayers);

  const removePlayer = (p) => {
    // console.log(p);
    const filteredData = purchasedPlayers.filter(
      (ply) => ply.playerName !== p.playerName
    );
    console.log(p);
    setPurchasedPlayers(filteredData);
    setAvailableBalance(availableBalance + parseInt(p.price));
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-w-11/12 mx-auto mt-8 flex justify-between">
        <h3 className="font-bold text-xl">
          {toggle === true
            ? 'Available Players'
            : `Selected Player (${purchasedPlayers.length}/6)`}
        </h3>
        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`py-2 px-4 border-1 border-gray-300 rounded-l-xl cursor-pointer border-r-0 ${
              toggle === true ? 'bg-[#e7fe29]' : ''
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-2 px-4 border-1 border-gray-300 rounded-r-xl cursor-pointer border-l-0 ${
              toggle === false ? 'bg-[#e7fe29]' : ''
            }`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>
      {/* //-----⚡ toggle future */}

      {toggle === true ? (
        <Suspense fallback={<h3>Loading...</h3>}>
          <AvailablePlayers
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
