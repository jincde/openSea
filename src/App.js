import './App.scss'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Rank from './Components/Rank'
import Notable from './Components/Notable'
import HotToday from './Components/HotToday'
import OriginalArt from './Components/OriginalArt'
import NftList from './Components/NftList'
import Category from './Components/Category'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Rank />
      <Notable />
      <HotToday />
      <OriginalArt />
      <NftList />
      <Category />
      <Footer />
    </div>
  )
}

export default App
