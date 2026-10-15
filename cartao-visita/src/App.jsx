import FotoPerfil from '../src/components/FotoPerfil.jsx';
import DadosContato from '../src/components/DadosContato.jsx';

 function App() {
  return(
    <div style={{display: 'flex', gap: '20px', padding: '20px'}}>
      <DadosContato
      nome="Cristiano"
      idade={30}
      profissao="Jogador de futebol"
      />
      <FotoPerfil/>
    </div>
  )
}
export default App;