    const container = document.querySelector('.container')
    const button = document.querySelector('button')

function generateGrid(){
    const dim = 100/gridSide
    const useVH = window.innerHeight < window.innerWidth;
    let minDim = dim + (useVH ? 'vh' : 'vw');
    container.innerHTML = '';
    
    for (let i = 0; i < (gridSide * gridSide); i++) {
        const noteGrid = document.createElement('div');
        noteGrid.style.margin = 0;
        noteGrid.style.padding = 0;
        noteGrid.style.height = minDim;
        noteGrid.style.width = minDim;
        noteGrid.style.backgroundColor = 'lightgray';
        noteGrid.className = 'drawHere';

        container.appendChild(noteGrid);
    }

    const divs = document.querySelectorAll('.drawHere');
    divs.forEach(div => {
        div.addEventListener('mouseover', function() {
            const hue = Math.floor(Math.random() * 361);
            if (this.style.backgroundColor == 'lightgray'){
                this.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
                this.style.opacity = 0.1;
            }

            else if (parseFloat(this.style.opacity) < 1){
                this.style.opacity = parseFloat(this.style.opacity) + 0.1;
            }
        });
    });
}


    

function gridPrompt(message = `Generate new page`, field = `Enter a number between 1-100`){
    
    let input = window.prompt(message, field);
    
    if (input === null) { // Handle if the user cancels the prompt
        alert("Grid generation canceled");
        return;
    }

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


