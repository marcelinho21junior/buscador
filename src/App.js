import {FiSearch} from 'react-icons/fi'
import './styles.css'

function App() {
  return (
    <div className="container">
      <h1 className='title'>Buscador de CEP</h1>

      <div className='containerInput'>
        <input
          type="text"
          placeholder='Digite seu cep...'
        />

        <button className='buttonSearch'>  
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 79003222</h2>

        <span>rUA TESTE ALGUM</span>
        <span>Complemento: alguma</span>
        <span>vila rosa</span>
        <span>Campo grande - ms</span>
      </main>

    </div>
  );
}

export default App;
