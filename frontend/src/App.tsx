import './App.css'
import Lista from './components/lista';
import { converterParaMaiusculoOuMinisculo as converterString } from './components/util'

function App() {
  return (
    <>
      <h1>
        {converterString("nome ayrton junior", 'U')}
        <br />
        {converterString("NOME XIKÃO JUNIOR", 'L  ')}
      </h1>
    </>
  )
}

export default App
