import { useContext } from "react";
import { HouseContext } from "../../context/HouseContext";
import { Link } from "react-router-dom";
import Square from "./components/square";

export default function House() {
  const houseContext = useContext(HouseContext);
  const rooms = houseContext.housePieces;

  return (
    <div>
      <strong>Casa: </strong>
      <button>
        <Link to="/cpanel" style={{ textDecoration: "none", color: "#000" }}>
          Ir para o painel de controle
        </Link>
      </button>
      <div style={{ display: "flex" }}>
        {rooms.map((room) => (
          <>
            <button style={{border: "none"}} onClick={() => houseContext.switchLightButton(room.id)}>
              <Square isLightOn={room.lightsOnOff}>{room.type}</Square>
            </button>
          </>
        ))}
      </div>
    </div>
  );
}
