import { useState, useEffect } from 'react';
import Mostranome from './components/Mostranome'

function App(){
  const [aluno, setAluno] = useState('Ajpert');

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState({
    nome: 'Uau',
    idade: 24,
    email: 'jesuiz'
  });

  const [input, setInput] = useState('')
  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');

    if(tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }

  }, []);

  useEffect(()=> {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas]);


  function handleChangeName(nome) {
    setAluno(nome)
  }

  function handleRegister(e) {
    e.preventDefault();

    alert('Usuário registrado com sucesso!')

    setUser({
      nome, email, idade
    })
  }

  function handleRegisterTasks(e) {
    e.preventDefault();

    setTarefas([...tarefas, input])
    setInput('')
  }

  return(
    <div>
      <div>
        <h1>Componente App</h1>
        <h2>Olá: {aluno}</h2>

        <button onClick={() => handleChangeName('Julia Ajpert')}>
          Mudar Nome
        </button>

        <br/>
        {/* <Mostranome aluno="Juju" idade={20}/> */}

      </div>

      <div>
        <h1>Cadastrando usuário</h1>

        <form onSubmit={handleRegister}>

          <label>Nome: </label><br/>
          <input placeholder='Digite seu nome: ' value={nome} onChange={(event) => setNome(event.target.value)}></input><br/>

          <label>Email: </label><br/>
          <input placeholder='Digite seu email: ' value={email} onChange={(event) => setEmail(event.target.value)}></input><br/>

          <label>Idade: </label><br/>
          <input placeholder='Digite seu idade: ' value={idade} onChange={(event) => setIdade(event.target.value)}></input><br/>

          <button type='submit'>Registrar</button>
        </form>

        <br/><br/>

        <div>
          <span>Bem vindo: {user.nome}</span><br/>
          <span>Email: {user.email}</span><br/>
          <span>Idade: {user.idade}</span><br/>
        </div>

      </div>

      <div>
        <h1>Cadastrando tarefas</h1>

        <form onSubmit={handleRegisterTasks}>
          <label>Nome da tarefa: </label><br/>
          
          <input placeholder='Digite uma tarefa: ' value={input} onChange={(e) => setInput(e.target.value)}/>
          <br/>
          <button type='submit'>Registrar</button>
        </form>
        
        <br/><br/>

        <ul>
          {tarefas.map(tarefa => (
            <li key={{tarefa}}>{tarefa}</li>
          ))}
        </ul>

      </div>

      

    </div>

  );
}

export default App;

