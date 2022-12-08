import './App.css'
import Header from './Components/Header/Header'
import Selected from './Components/SeletedProduct/Selected'
import SearchBar from './Components/Search_Bar/SearchBar'
import ProductSection from './Components/ProductSection/ProductSection'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex justify-start pl-2 mt-2">
        <p>
          Medical Darpan{'>'} Search {'>'}
          <span className="font-bold"> FabiFlu Tablet</span>
        </p>
      </div>
      <SearchBar />
      <Selected />

      <ProductSection />
    </div>
  )
}

export default App
