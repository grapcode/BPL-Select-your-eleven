import React, { useState } from 'react';
import userImg from '../../assets/user-1.png';
import flagImg from '../../assets/report-1.png';
import { toast } from 'react-toastify';

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  // ------⚡ Chose player btn
  const [selected, setSelected] = useState(false);

  // ------💥 choose player btn function
  const handleSelected = (player) => {
    if (availableBalance < player.price) {
      toast('Not Enough coins!!');
      return;
    }
    if (purchasedPlayers.length === 6) {
      toast('6 players already selected!');
      return;
    }
    setSelected(true);
    // setAvailableBalance(availableBalance - player.price.split('USD').join('').split(',').join(''));
    setAvailableBalance(availableBalance - player.price);
    setPurchasedPlayers([...purchasedPlayers, player]);
    toast('Player purchased!');
  };

  // ------⚡ single cart dynamic
  return (
    <div>
      <section className="card bg-base-100 shadow-sm">
        <figure>
          <img
            className="w-full h-92 object-cover"
            src={player.playerImg}
            alt="Shoes"
          />
        </figure>
        <div className="p-4 space-y-3">
          <div className="flex">
            <img src={userImg} alt="" />{' '}
            <h2 className="card-title ml-2">{player.playerName}</h2>
          </div>
          <div className="flex justify-between border-b-1 border-gray-300">
            <div className="flex gap-2 items-center">
              <img className="h-fit" src={flagImg} alt="" />
              <p>{player.playerCountry}</p>
            </div>
            <button className="btn mb-3">{player.playingRole}</button>
          </div>
          <div className="flex justify-between font-bold">
            <span>Rating</span>
            <span>{player.rating}</span>
          </div>
          <div className="flex justify-between ">
            <span className="font-bold">{player.battingStyle}</span>
            <span>{player.bowlingStyle}</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-bold">
              Price: $ <span>{player.price}</span>
            </p>
            <button
              disabled={selected}
              onClick={() => {
                handleSelected(player);
                // if (availableBalance < player.price) {
                //   alert('Not Enough coins!!');
                //   return;
                // }
                // setSelected(true);
                // setAvailableBalance(availableBalance - player.price);
              }}
              className="btn"
            >
              {selected === true ? 'Selected' : 'Choose Player'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerCard;

//    ------⚡ cart

//    <div className="card bg-base-100 w-96 shadow-sm">
//     <figure>
//       <img
//         src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//         alt="Shoes"
//       />
//     </figure>
//     <div className="p-4 space-y-3">
//       <div className="flex">
//         <img src={userImg} alt="" />{' '}
//         <h2 className="card-title ml-2">Viral Kohli</h2>
//       </div>
//       <div className="flex justify-between border-b-1 border-gray-300">
//         <div className="flex gap-2 items-center">
//           <img className="h-fit" src={flagImg} alt="" />
//           <p>India</p>
//         </div>
//         <button className="btn mb-3">All-Rounder</button>
//       </div>
//       <div className="flex justify-between font-bold">
//         <span>Rating</span>
//         <span>5</span>
//       </div>
//       <div className="flex justify-between ">
//         <span className="font-bold">Left-Hand-Bat</span>
//         <span>Left-Hand-Bat</span>
//       </div>
//       <div className="flex items-center justify-between">
//         <p className="font-bold">
//           Price: $ <span>1500000</span>
//         </p>
//         <button className="btn">Choose Player</button>
//       </div>
//     </div>
//   </div>
