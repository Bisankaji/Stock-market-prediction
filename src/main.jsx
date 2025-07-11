import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Frontend/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PredictStock from './Frontend/PredictStock.jsx'
import Portfolio from './Frontend/Portfolio.jsx'
import News from './Frontend/News.jsx'
import Market from './Frontend/Market.jsx'
import Stock from './Frontend/StockApi.jsx'
import Suggestion from './Frontend/Suggestion.jsx'
import Login from './Frontend/authentication/Login.jsx'
import Signup from './Frontend/authentication/Signup.jsx'

const router = createBrowserRouter([
  {
    path:"/predictstock",
    element:<PredictStock/>
  },
  {
    path:"/portfolio",
    element:<Portfolio/>
  },
  {
    path:"/news",
    element:<News/>
  },
  {
    path:"/market",
    element:<Market/>
  },

   {
    path: '/',
    element: <App />  // Main app
  },
  {
    path:"stock",
    element:<Stock/>
  },
  {
    path:"/suggestion",
    element:<Suggestion/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/> // Assuming you have a Signup component, replace Login with Signup
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     
      <RouterProvider router={router}/>
   
  </StrictMode>,
)
