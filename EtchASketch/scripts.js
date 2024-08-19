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

function gridPrompt(){
    console.log('gridPrompt')
   let input = window.prompt(`Generate new page`, `1-100`);
    input = parseInt(input);

    if(isNaN(input)|| input < 1 || input > 100){
        gridPromptError()
    }
    else {gridSide = input;
        generateGrid();
    }
}
function gridPromptError(){
   let input = window.prompt('Error: enter a number between 1-100', 'here')
   if(isNaN(input)|| input < 1 || input > 100){
    gridPromptError()

    }
    else {gridSide = input;
        generateGrid();
    }
}

button.addEventListener('click', gridPrompt)
