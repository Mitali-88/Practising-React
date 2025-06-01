
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './context/userContext'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h2>Context API</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
