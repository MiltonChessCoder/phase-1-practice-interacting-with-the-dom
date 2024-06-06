document.addEventListener("DOMContentLoaded", ()=>{
    const counting = document.getElementById("counter");
    let total = 0;
    
    let isPaused = false; 

    function autoIncrement(){
        if (!isPaused){
        total ++;
        counting.textContent = total;
        setTimeout(autoIncrement, 1000);
        }
    }

    autoIncrement();


    const add = document.getElementById("plus")
    add.addEventListener("click", () => {
        total++
        counting.textContent = total;
    })

    const minus = document.getElementById("minus")
    minus.addEventListener("click", () => {
        total--
        counting.textContent = total;
    })

    const like = document.getElementById("heart")
    like.addEventListener("click", () => {
        const likesList = document.getElementsByClassName('likes')[0];
        const li = document.createElement('li');
        let time = 0;
            if (total === total){
                time ++;
            }
        li.textContent = total + ' has been clicked ' + time  + ' times'
        likesList.appendChild(li);
    


    })
    const form = document.getElementById('comment-form');
    const content = document.getElementById('list');
    const input = document.getElementById('comment-input');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        
        const tag = document.createElement('p');
        tag.innerText = input.value.trim();
        content.appendChild(tag);

        input.value = '';
    })

    const pauseButton = document.getElementById('pause');
    const elementss = document.querySelectorAll('#plus,#minus,#heart,#submit')
    function disableAllButtons(){
        
            elementss.forEach(function(element){
                element.disabled = true;
            })
        
        pauseButton.innerText = 'resume'
    }

    function enableAllButtons(){
        elementss.forEach(function(element){
            element.disabled = false;
        })
        pauseButton.innerText = 'pause'

        function newautoIncrement(){
            
            total ++;
            counting.textContent = total;
            setTimeout(autoIncrement, 1000);
            
        }
    
        newautoIncrement();
    }

    pauseButton.addEventListener('click', function(){
        isPaused =!isPaused; // Toggle pause state
        if (isPaused) {
            disableAllButtons(); // Disable elements when pausing
        } else {
            enableAllButtons(); // Enable elements when resuming
        }
    });
})