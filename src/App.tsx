import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'
import BelieverTestimonialsPage from './pages/BelieverTestimonialsPage'
import BubbleTeaMethodPage from './pages/BubbleTeaMethodPage'
import DemagnetizingBubbleTeaPage from './pages/DemagnetizingBubbleTeaPage'
import DharmaDeclarationPage from './pages/DharmaDeclarationPage'
import DivorceCeremonyPage from './pages/DivorceCeremonyPage'
import EnlightenmentVideoPage from './pages/EnlightenmentVideoPage'
import GreatUniverseHedgehogPage from './pages/GreatUniverseHedgehogPage'
import HomePage from './pages/HomePage'
import HowToSenseEnergyPage from './pages/HowToSenseEnergyPage'
import LazerLotusPage from './pages/LazerLotusPage'
import LazerMasterPage from './pages/LazerMasterPage'
import MarriageCeremonyPage from './pages/MarriageCeremonyPage'
import ReligiousPrinciplesPage from './pages/ReligiousPrinciplesPage'
import SpiritAnimalIntroductionPage from './pages/SpiritAnimalIntroductionPage'
import SpiritAnimalsPage from './pages/SpiritAnimalsPage'
import SpiritualMonkeyPage from './pages/SpiritualMonkeyPage'
import SpiritualPelicanPage from './pages/SpiritualPelicanPage'
import UnderstandingTeachingsPage from './pages/UnderstandingTeachingsPage'
import WeddingCeremoniesPage from './pages/WeddingCeremoniesPage'
import WeddingIntroductionPage from './pages/WeddingIntroductionPage'
import WhatIsBubbleTeaPage from './pages/WhatIsBubbleTeaPage'

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
          <Route path="/dharma" element={<DharmaDeclarationPage />} />
          <Route path="/video" element={<EnlightenmentVideoPage />} />
          <Route path="/testimonials" element={<BelieverTestimonialsPage />} />
        </Routes>
      </BaseLayout>
    </Router>
  )
}

export default App
