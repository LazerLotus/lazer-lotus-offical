import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'
import HomePage from './pages/HomePage'
import UnderstandingTeachingsPage from './pages/UnderstandingTeachingsPage'
import ReligiousPrinciplesPage from './pages/ReligiousPrinciplesPage'
import LazerLotusPage from './pages/LazerLotusPage'
import LazerMasterPage from './pages/LazerMasterPage'
import SpiritAnimalsPage from './pages/SpiritAnimalsPage'
import SpiritualMonkeyPage from './pages/SpiritualMonkeyPage'
import GreatUniverseHedgehogPage from './pages/GreatUniverseHedgehogPage'
import SpiritualPelicanPage from './pages/SpiritualPelicanPage'

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/understanding-teachings" element={<UnderstandingTeachingsPage />} />
          <Route path="/religious-principles" element={<ReligiousPrinciplesPage />} />
          <Route path="/lazer-lotus" element={<LazerLotusPage />} />
          <Route path="/lazer-master" element={<LazerMasterPage />} />
          <Route path="/spirit-animals" element={<SpiritAnimalsPage />} />
          <Route path="/spiritual-monkey" element={<SpiritualMonkeyPage />} />
          <Route path="/great-universe-hedgehog" element={<GreatUniverseHedgehogPage />} />
          <Route path="/spiritual-pelican" element={<SpiritualPelicanPage />} />
        </Routes>
      </BaseLayout>
    </Router>
  )
}

export default App
