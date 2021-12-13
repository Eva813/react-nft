import React from 'react'

const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img className="selectedPunk" src={'https://nftlabs.mypinata.cloud/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3ty'} />
          </div>
        </div>
      </div>

      <div className="punkDetails" style={{ color: 'fff' }}>
        <div className="title">
          Banda Punk
        </div>
        <span className="itemNumber">.#3</span>
      </div>
      <div className="owner">
        <div className="ownerImageContainer">
          <img src={'https://nftlabs.mypinata.cloud/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3ty'} />
        </div>
        <div className="ownerDetails">
          <div className="ownerNameAndHandle">
            <div>0x767b91737fEe99BF0d3E157490ED3ab98E4430f2</div>
            <div className="ownerHandle">@cleveryou</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
