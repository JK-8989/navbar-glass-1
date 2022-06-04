const indicator = document.querySelector('.indicator');
const lists = document.querySelectorAll('ul li');

lightIndicator = (e) => {
  indicator.style.left = e.offsetLeft + 'px';
  indicator.style.width = e.offsetWidth + 'px';
}
lists.forEach( event => {
  event.addEventListener('mousemove', (e)=>{
    lightIndicator(e.target);
  })
})

function activeList (){
    lists.forEach((item) => 
    item.classList.remove('active'))
    this.classList.add('active')
}

lists.forEach((item)=>
item.addEventListener('mouseover', activeList))


