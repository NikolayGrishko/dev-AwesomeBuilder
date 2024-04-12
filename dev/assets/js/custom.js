const planItem = document.querySelectorAll('.item-path')
const cellAddress = document.querySelector('#address')
const cellFloors = document.querySelector('#floors')
const cellFreeFlat = document.querySelector('#freeFlat')
const cellSoldFlat = document.querySelector('#soldFlat')

planItem.forEach(build => {
    build.addEventListener('mouseover', () => {
        const thisAddress = build.getAttribute('data-address')
        const thisFloors = build.getAttribute('data-floors')
        const thisFreeFlat = build.getAttribute('data-free-flat')
        const thisSoldFlat = build.getAttribute('data-sold-flat')

        cellAddress.innerHTML = thisAddress
        cellFloors.innerHTML = thisFloors
        cellFreeFlat.innerHTML = thisFreeFlat
        cellSoldFlat.innerHTML = thisSoldFlat
    })
    
    const buildFreeFlat = build.getAttribute('data-free-flat')
    
    buildFreeFlat === "0" ? build.classList.add('sold') : null
    
    if (build.classList.contains('sold')) {
        const buildLink = build.closest('.item-link')
        buildLink.addEventListener('click', (event) =>{
            event.preventDefault()
        })
    }
})


