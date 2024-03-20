import { Link } from "react-router-dom";

export default function Erro() {
    return (
      <div className="Erro">
        <h1>Hum, parece que essa página não existe!</h1>
        
        <span>Você pode estar procurando: </span>
        <Link to='/'>Home</Link> <br/>
            <Link to='/sobre'>Sobre</Link> <br/>
            <Link to='/contato'>Contato</Link>
      </div>
    );
  }
  
  