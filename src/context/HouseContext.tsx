import { createContext, useState } from "react";

import db from "./houseParts.json";

interface HousePiece {
  id: number;
  type: string;
  lightsOnOff: boolean;
}

interface HouseContextType {
  housePieces: HousePiece[];
  switchLightButton: (id: number) => void;
  turnOffCircuitBreaker: () => void;
}

export const HouseContext = createContext<HouseContextType>(null);
HouseContext.displayName = "House Context";

const housePieces = db;

export const HouseProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [pieces, setPieces] = useState([...housePieces]);

  const switchLightButton = (id: number) => {
    const updatedPieces = pieces.map((piece) => {
      if (piece.id === id) {
        return { ...piece, lightsOnOff: !piece.lightsOnOff };
      }
      return piece;
    });
    setPieces(updatedPieces);
  };

  const turnOffCircuitBreaker = () => {
    const houseParts = pieces.map(piece => {
      return { ...piece, lightsOnOff: false };
    })
    setPieces(houseParts);
    return houseParts;
  }

  return (
    <HouseContext.Provider
      value={{
        housePieces: pieces,
        switchLightButton,
        turnOffCircuitBreaker
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};
