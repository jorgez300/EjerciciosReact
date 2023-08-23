import React from 'react'
import ReactDOM from 'react-dom/client'
import ContadorApp from './components/ContadorApp'
import ListadoApp from './components/ListadoApp'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContadorApp></ContadorApp>
    <ListadoApp></ListadoApp>
  </React.StrictMode>,
)
