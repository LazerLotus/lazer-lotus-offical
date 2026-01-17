import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'
import HomePage from './pages/HomePage'
import UnderstandingTeachingsPage from './pages/UnderstandingTeachingsPage'
import ReligiousPrinciplesPage from './pages/ReligiousPrinciplesPage'
import LazerLotusPage from './pages/LazerLotusPage'
import LazerMasterPage from './pages/LazerMasterPage'

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
        </Routes>
      </BaseLayout>
    </Router>
  )
}

export default App
