import { products } from "./db.js"

const cont = document.querySelector('.container') 
const newProduct = document.querySelector('.newProduct')
const main = document.querySelector('.main')
const exit = document.querySelector('.exit')

const section = document.querySelector('section')



let form = document.forms.modal;

form.onsubmit = (e) => {
    e.preventDefault();

    let formInp = new FormData(form)
    let ob = {
        id: products.length + 1,
        percent: Math.floor(Math.random() * 20)
    }

    formInp.forEach((item, key) => {
        ob[key] = item
    })
    if (ob.title.length > 0) {
        products.push(ob)
    }

    product()
}
console.log(products);

newProduct.onclick = () => {
    main.style.right = '0'
}

exit.onclick = () =>  {
    main.style.right = '-100%'
}

product()
function product() {
    section.innerHTML = ''
    products.forEach(product => {
        
        const box = document.createElement('div')
        const txt = document.createElement('h1')
        const spa = document.createElement('span')
        const p = document.createElement('p')
        
        box.classList.add('box')
        
        txt.textContent = product.title
        spa.textContent = `$${product.price}`
        let procent = Math.floor(product.price - product.price / 100 * product.percent)
        p.textContent = `$${procent}`
        
        section.append(box)
        box.append(txt, spa, p)
    
    })
}
