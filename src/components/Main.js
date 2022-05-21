import React, { useState, useEffect } from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'
import Punklist from './Punklist'
const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0])
  useEffect(() => {
    console.log('data', punkListData[selectedPunk])
    setActivePunk(punkListData[selectedPunk])
  }, [punkListData, selectedPunk])
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img className="selectedPunk" src={activePunk.image_original_url} alt='image' />
          </div>
        </div>
        <div className="punkDetails" style={{ color: 'fff' }}>
          <div className="title">
            {activePunk.name}
          </div>
          <span className="itemNumber">.#{activePunk.token_id}</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img src={activePunk.owner.profile_img_url} />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>{activePunk.owner.address}</div>
              <div className="ownerHandle">@cleveryou</div>
            </div>
            <div className="linkGroup">
              <div className="ownerLink">
                <img src={instagramLogo} alt='instagramLogo' />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt='twitterLogo' />
              </div>
              <div className="ownerLink">
                <img src={moreIcon} alt='moreIcon' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
