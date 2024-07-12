const container = document.querySelector('.container')
const btnGray = document.createElement('button')
const btnRGB = document.createElement('button')
const btnSize = document.createElement('button')
const buttonsContainer = document.querySelector('.buttons')

function createDivs (col, rows){
    for(let i = 0; i < (col * rows); i++){
    const div = document.createElement('div')
    
    div.style.border = '1px solid black'
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.backgroundColor = 'beige'
    container.appendChild(div).classList.add('box')
    
    }

}
createDivs(16,16);

   
function rgbColor(){
    const boxs = container.querySelectorAll('.box')
    btnRGB.textContent = 'RGB'
    btnRGB.addEventListener('click',() =>{
        boxs.forEach(box => box.addEventListener('mousemove', () => {
        let R = Math.floor(Math.random() * 255)
        let B = Math.floor(Math.random() * 255)
        let G = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${R},${B},${G})`;
        }))
})
buttonsContainer.appendChild(btnRGB).classList.add('btn');
}
rgbColor();



function grayColor(){
       
    const boxs = container.querySelectorAll('.box')
    btnGray.textContent = 'GREY';
    btnGray.addEventListener('click',() =>{
        boxs.forEach(box => box.addEventListener('mousemove', () => {
            let Rondnum = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${Rondnum},${Rondnum},${Rondnum},${Rondnum})`;
        }))
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn')
}

grayColor();

function reSet(){
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.remove())
}

function reSize(){
    btnSize.textContent = 'SIZE'
    btnSize.addEventListener('click',()=> {
        let user = prompt('введите число ячеек');
        if(user === null || 100 > user < 1){
            reSet();
            createDivs(16,16);
            grayColor();
            rgbColor();
        }
         else {
             reSet();
            createDivs(user,user);
            grayColor();
            rgbColor();
         }
    }
    )}
    buttonsContainer.appendChild(btnSize).classList.add('btn');
    
    reSize();
