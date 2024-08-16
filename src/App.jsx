
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import SingUpPage from './pages/SingUpPage'

function App() {
  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/singUp' element={<SingUpPage/>}/>
      </Route>
    )
  )
 
  return (
    <>
    <RouterProvider router={shanto}/>
     
    </>
  )
}

export default App
