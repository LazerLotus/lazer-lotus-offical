import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* More routes will be added in Phase 2 */}
        </Routes>
      </BaseLayout>
    </Router>
  )
}

export default App
