import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'jotai'
import { ethers } from 'ethers'
import { Navbar } from './components/Navbar'
import Theme from './Theme'
import HomePage from './pages/HomePage'
import { MainWrapper } from './components/common'

declare global {
  interface Window {
    ethereum: ethers.providers.ExternalProvider & ethers.providers.Web3Provider
  }
}

const App = () => {
  return (
    <Provider>
      <Router>
        <Theme>
          <Navbar />
          <MainWrapper>
            <Route path='/' exact component={HomePage} />
          </MainWrapper>
        </Theme>
      </Router>
    </Provider>
  )
}

export default App
