import { useState } from 'react';
import {FiSearch} from 'react-icons/fi'
import api from './services/api';
import './styles.css'

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] =useState({});

  async function handleSearch(){
    
    if(input ===''){
      alert("Preencha um CEP!")
      return
    }

    if(input.length != 8){
      alert("O CEP deverá ter 8 números!!")
    }else{
      alert(input)/*tirar este*/
    }

    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      console.log(response.data)
      setInput("")
    }catch{
      alert("Ops erro ao buscar! ")
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className='title'>Buscador de CEP</h1>

      <div className='containerInput'>
        <input
          type="text"
          placeholder='Digite seu CEP...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className='buttonSearch' onClick={handleSearch}>  
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2>CEP: {cep.cep}</h2>

          <span>logradouro: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro:{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}
    </div>
  );
}

export default App;
