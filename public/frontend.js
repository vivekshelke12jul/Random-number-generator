console.log('frontendjs connected')

const num = document.querySelector('#num')
const getBtn = document.querySelector('#getBtn')
getBtn.addEventListener('click', getInfo)

const url = '/'
async function getInfo(e){
    e.preventDefault()
    const res = await fetch(url,{method: 'GET'})
    const data = await res.json();
    console.log(data.info);
    num.innerHTML = data.info
}
