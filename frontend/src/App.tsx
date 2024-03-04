import './App.css'
import { Tooltip, Toast, Popover } from 'bootstrap';

function App() {
  return (
    <>
      <button id="popoverButton" type="button"
        className="btn btn-primary btn-lg"
        data-bs-toggle="popover" title="ESM in Browser"
        data-bs-content="Bang!">Custom popover</button>
    </>
  )
}
export default App
