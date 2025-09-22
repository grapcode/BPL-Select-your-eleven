import React from 'react';

const SelectedCard = ({ player, removePlayer }) => {
  console.log(player);

  const handleRemove = () => {
    removePlayer(player);
  };
  return (
    <div className="border-2 p-2 border-gray-200 flex justify-between rounded-xl mt-2">
      <div className="flex gap-3 items-center">
        <img
          className="w-20 h-12 object-cover rounded-lg"
          src={player.playerImg}
          alt=""
        />
        <div>
          <h4>{player.playerName}</h4>
          <p>{player.battingStyle}</p>
        </div>
      </div>
      <button onClick={handleRemove}>❌</button>
    </div>
  );
};

export default SelectedCard;
