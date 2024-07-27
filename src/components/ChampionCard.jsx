import {useRef,useState}  from 'react'

function ChampionCard(props) {
 
  const item = props.item;

  return (
    <div className="champion-card">
      <div className="frame">
        <div className="bg-image overlay bg" style={{backgroundImage:`url(${item.bg})`}}>


        </div>
        <img src={item.img} alt="" />
        <div className="name">{item.name}</div>
      </div>
    </div>
  )
}

export default ChampionCard