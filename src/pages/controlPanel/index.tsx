import { useContext } from "react";
import { HouseContext } from "../../context/HouseContext";
import { Link } from "react-router-dom";

export default function HouseControlPanel() {
  const houseContext = useContext(HouseContext);
  return (
    <div>
      <strong>Painel de Controle: </strong>
      <button><Link to="/" style={{textDecoration: "none", color: "#000"}}>Voltar para a Casa</Link></button>
      <button onClick={houseContext.turnOffCircuitBreaker}>Desligar Disjuntor</button>
      <table style={{marginTop: "50px"}}>
        <thead>
          <tr style={{textAlign: "left"}}>
            <th style={{paddingRight: "1em"}}>Id</th>
            <th style={{paddingRight: "2em"}}>Luz Acesa?</th>
            <th style={{paddingRight: "8em"}}>Tipo</th>
            <th>Interruptor</th>
          </tr>
        </thead>
        <tbody>
          {houseContext.housePieces.map((piece) => (
            <tr key={piece.id}>
              <td>{piece.id}</td>
              <td>{piece.lightsOnOff ? "Acesso" : "Apagado"}</td>
              <td>{piece.type}</td>
              <button onClick={() => houseContext.switchLightButton(piece.id)}>
                {!piece.lightsOnOff ? "Ligar luz" : "Apagar luz"}
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}