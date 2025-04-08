const skinsGrid = document.querySelector('.skinsGrid')
const skinDivButton = document.querySelector('.skinDiv')
let jps = JSON.parse(localStorage.getItem('JPS')) || 0;
let johns = JSON.parse(localStorage.getItem('johns')) || 0;
let jpc = JSON.parse(localStorage.getItem('JPC')) || 1;
 

renderSkins()

function renderSkins() {
  let skinsHtml = ''

  skinsDivs.forEach((skinDiv, index) => {

    let storedOwned = localStorage.getItem(`${skinDiv.iD}owned`)
    if (storedOwned !== null) {
      skinDiv.owned = JSON.parse(storedOwned)
    }

    skinsHtml += `
    <div class="skinsDiv">
        <img src="${skinDiv.image}">
        <div class="skinInfo">
          <p>${skinDiv.name}</p>
          <p>${skinDiv.multiplier}x Multiplier</p>
          <button class="buyButt" onclick="
            buySkin(${index})
          ">${skinDiv.owned ? 'Owned' : `Buy - ${skinDiv.price} J` }</button>
        </div>
    </div>`
        
  })

  skinsGrid.innerHTML = skinsHtml

}


function buySkin(index) {
  const skinButt = skinsDivs[index]
  if (skinButt.owned === false) {
    if (johns >= skinButt.price) {
      skinButt.owned = true
      johns -= skinButt.price
      renderSkins()
  } else {
      alert('Not enough Johns')
  }
      }
    }


