
import './App.css'
import DashboardMainContent from './components/DashboardMainContent'
import Header from "./components/Header"
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <Header />
      <main>
          <Sidebar />
          <div className='dummydiv'></div>
          <DashboardMainContent/>
      </main>
    </>
  )
}

export default App
