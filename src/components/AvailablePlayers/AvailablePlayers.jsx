import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const playerData = use(playersPromise);
  //   console.log(playerData);
  return (
    <section className="max-w-11/12 mx-auto mt-8 grid lg:grid-cols-3 md:grid-cols-2 gap-10 ">
      {/* ------⚡ map for cart */}

      {playerData.map((player) => (
        <PlayerCard
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          player={player}
        ></PlayerCard>
      ))}
    </section>
  );
};

export default AvailablePlayers;
