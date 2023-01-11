
let url = "http://localhost:3000/clothes?"
let clothesList = document.querySelector('.cards')
let filterSelector = document.querySelector('.main-select-price')
const filterBrands = document.querySelector('.main-select-brands')

console.log(filterBrands);

let filterPrice = ''

let filterBrand = ''


const getFilterPrice = () => {
    fetch(url + `${filterPrice.length ? '_sort=price&_order=' + filterPrice:''}`)
        .then((res)=>res.json())
        .then((res)=>res.map((el)=>{
    clothesList.innerHTML +=`
                        <div class="left-card">
                            <img src="${el.image}" alt="">
                            <p class="description">Название: ${el.title}</p>
                            <p class="price">Цена: ${el.price}</p>
                            <p class="brand">Брэнд: ${el.brand}</p>
                        </div>
                        
    `
        }))
}

const getFilterBrand = () => {
    fetch(url + `${filterBrand.length ? 'brand=' + filterBrand:''}`)
    .then((res)=>res.json())
    .then((res)=>res.map((el)=>{
clothesList.innerHTML +=`
                    <div class="left-card">
                        <img src="${el.image}" alt="">
                        <p class="description">Название: ${el.title}</p>
                        <p class="price">Цена: ${el.price}</p>
                        <p class="brand">Брэнд: ${el.brand}</p>
                    </div>
                    
`
    }))
}

const getClothes = () =>{
    clothesList.innerHTML =''
    getFilterBrand()
}

filterSelector.addEventListener('change',(e)=>{

    filterPrice = e.target.value

    console.log(e.target.value);

    getClothes()

})

filterBrands.addEventListener("change", (e) => {

    filterBrand = e.target.value

    console.log(e.target.value);

    getClothes()
})

getClothes()