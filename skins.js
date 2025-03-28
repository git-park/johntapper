const skinsGrid = document.querySelector('.skinsGrid')

renderSkins()

function renderSkins() {
  let skinsHtml = ''

  skinsDivs.forEach((skinDiv, index) => {

    skinsHtml += `
    <div class="skinsDiv">
        <img src="${skinDiv.image}">
        <div class="skinInfo">
          <p>${skinDiv.name}</p>
          <p>${skinDiv.multiplier}x Multiplier</p>
          <button class="buyButt" onclick="
            buySkin(${index})
          ">Buy - ${skinDiv.price} J</button>
        </div>
    </div>`
        
  })

  skinsGrid.innerHTML = skinsHtml
    
}

function buySkin(index) {
  const skinButt = skinsDivs[index]
  if (john >= skinButt.price) {
    jpc *= skinButt.multiplier
    jps *= skinButt.multiplier


  }
}

