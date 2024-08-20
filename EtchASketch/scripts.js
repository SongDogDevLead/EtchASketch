    const container = document.querySelector('.container')
    const button = document.querySelector('button')

function generateGrid(){
    console.log('generateGrid')
    let fullGrid = (gridSide * gridSide)
    const dim = 100/gridSide
    
    container.innerHTML = '';
    
    for (let i = 0; i < fullGrid; i++) {
        const noteGrid = document.createElement('div');
        noteGrid.style.margin = 0;
        noteGrid.style.padding = 0;
        noteGrid.style.height = dim + 'vh';
        noteGrid.style.width = dim + 'vh';
        noteGrid.style.backgroundColor = 'lightgray';
        noteGrid.className = 'drawHere';

        container.appendChild(noteGrid);
    }
    divs = document.querySelectorAll('.drawHere');
    divs.forEach(div => {
    div.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'black';
    });
});
}


    

function gridPrompt(message = `Generate new page`, field = `Enter a number between 1-100`){
    
    let input = window.prompt(message, field);
    input = parseInt(input);

    if(isNaN(input)|| input < 1 || input > 100){
        gridPrompt('Error: Must be a valid number', 'between 1-100');
    }
    else {gridSide = input;
        generateGrid();
    }
}


button.addEventListener('click', function() {
    gridPrompt(); 
})
