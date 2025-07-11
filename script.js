const button = document.querySelectorAll('.box')
const body = document.querySelector('body')

button.forEach((box)=>{
 box.addEventListener('click', (e)=>{
  if(e.target.id === 'box1'){
    body.style.background = "#E3DE61"
  }
  if(e.target.id === 'box2'){
    body.style.background = '#78B9B5'
  }
  if(e.target.id === 'box3'){
    body.style.background = '#0A400C'
  }
  if(e.target.id === 'box4'){
    body.style.background = '#EBD6FB'
  }
  if(e.target.id === 'box5'){
    body.style.background = '#FFA673'
  }
 })
})