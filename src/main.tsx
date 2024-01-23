import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SVGs from './components/svgs.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <>
    <SVGs />
    <App />
  </>,
  // </React.StrictMode>,
)
