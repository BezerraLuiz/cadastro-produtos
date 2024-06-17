import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import CadastroProduto from './routes/CadastroProduto.jsx'
import EditarProduto from './routes/EditarProduto.jsx'
import ExcluirProduct from './routes/ExcluirProduto.jsx'
import VisualizacaoProdutos from './routes/VisualizacaoProdutos.jsx'
import ExportarArquivo from './routes/ExportarArquivo.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/cadastrar",
    element: <CadastroProduto/>
  },
  {
    path: "/editar/:id",
    element: <EditarProduto/>
  },
  {
    path: "/excluir/:id",
    element: <ExcluirProduct/>
  },
  {
    path:"/visualizar",
    element: <VisualizacaoProdutos/>
  },
  {
    path:"/exportar",
    element: <ExportarArquivo/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
