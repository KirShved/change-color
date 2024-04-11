function changeColor(){
    let sixNum=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','F']
    let hexCode=''
    for(let i=0;i<6;i++){
        let randomIndex=Math.floor(Math.random()*sixNum.length)

        hexCode=hexCode+sixNum[randomIndex]
    }
    hex.innerHTML=hexCode
    body.style.backgroundColor='#'+hexCode
}

let body=document.body
let btn=document.querySelector('.btn-success')
let hex=document.querySelector('#id1')

btn.addEventListener('click',changeColor)