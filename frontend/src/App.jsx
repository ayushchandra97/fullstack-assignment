import CardArea from './components/CardArea/CardArea'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Search from './components/Search/Search'
import CardContextProvider from './context/CardContext'
import { ErrorBoundary } from 'react-error-boundary'
import FallbackUI from './components/Fallback/FallbackUI'
import './App.css'

function App() {

  return (
    <ErrorBoundary FallbackComponent={FallbackUI}>
      <CardContextProvider>
        <Navbar />
        <main>
          <Search />
          <CardArea />
        </main>
        <Footer />
      </CardContextProvider>
    </ErrorBoundary>
  )
}

export default App
