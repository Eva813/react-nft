// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Punklist from './components/Punklist';
import Main from './components/Main';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [punkListData, setPunkListData] = useState([])
  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x767b91737fEe99BF0d3E157490ED3ab98E4430f2')
      console.log(openSeaData.data.assets)
      setPunkListData(openSeaData.data.assets)
    }
    return getMyNfts()
  }, [])
  return (
    <div className="App">
      <Header />
      <Main />
      <Punklist punkListData={punkListData} />
    </div>
  );
}

export default App;
