import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import CadastroProduto from './routes/CadastroProduto.jsx'
import EditarProduto from './routes/EditarProduto.jsx'
import FiltragemCategoria from './routes/FiltragemCategoria.jsx'
import VisualizacaoProdutos from './routes/VisualizacaoProdutos.jsx'
import ExportarArquivo from './routes/ExportarArquivo.jsx'
import Login from './routes/Login.jsx'
import Registrar from './routes/Registrar.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/cadastrar",
        element: <CadastroProduto/>
      },
      {
        path: "/editar/:id",
        element: <EditarProduto/>
      },
      {
        path: "/filtragem",
        element: <FiltragemCategoria/>
      },
      {
        path:"/visualizar",
        element: <VisualizacaoProdutos/>
      },
      {
        path:"/exportar",
        element: <ExportarArquivo/>
      }
    ],
  },
  {
    path: 'login',
    element: <Login/>
  },
  {
    path: 'registrar',
    element: <Registrar/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
