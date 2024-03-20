import { Link } from "react-router-dom";

export default function Contato() {
    return (
      <div className="Contato">
        <h1>Contatos</h1> <br/>

        <Link to='/'>Home</Link> <br/>
        <Link to='/sobre'>Sobre</Link> <br/>
        
        <span>Email: teste@teste.com</span>
      </div>
    );
  }
  
  