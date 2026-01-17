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
import WeddingCeremoniesPage from './pages/WeddingCeremoniesPage'
import WeddingIntroductionPage from './pages/WeddingIntroductionPage'
import MarriageCeremonyPage from './pages/MarriageCeremonyPage'
import SpiritAnimalIntroductionPage from './pages/SpiritAnimalIntroductionPage'
import DivorceCeremonyPage from './pages/DivorceCeremonyPage'
import BubbleTeaMethodPage from './pages/BubbleTeaMethodPage'
import WhatIsBubbleTeaPage from './pages/WhatIsBubbleTeaPage'
import HowToSenseEnergyPage from './pages/HowToSenseEnergyPage'
import DemagnetizingBubbleTeaPage from './pages/DemagnetizingBubbleTeaPage'

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
          <Route path="/wedding" element={<WeddingCeremoniesPage />} />
          <Route path="/wedding-introduction" element={<WeddingIntroductionPage />} />
          <Route path="/marriage-ceremony" element={<MarriageCeremonyPage />} />
          <Route path="/spirit-animal-introduction" element={<SpiritAnimalIntroductionPage />} />
          <Route path="/divorce-ceremony" element={<DivorceCeremonyPage />} />
          <Route path="/bubble-tea" element={<BubbleTeaMethodPage />} />
          <Route path="/what-is-bubble-tea" element={<WhatIsBubbleTeaPage />} />
          <Route path="/how-to-sense-energy" element={<HowToSenseEnergyPage />} />
          <Route path="/demagnetizing-bubble-tea" element={<DemagnetizingBubbleTeaPage />} />
        </Routes>
      </BaseLayout>
    </Router>
  )
}

export default App
