import { Homepage } from './Homepage'
import { Routes, Route } from 'react-router-dom'
import Campaign from './components/Campaign'
import Products from './components/Products'
import Header from './components/Header'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="campaigns" exact element={<Campaign />} />
        <Route path="products" exact element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
