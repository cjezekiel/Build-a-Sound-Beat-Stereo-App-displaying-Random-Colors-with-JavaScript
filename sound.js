const bars = document.querySelectorAll('.bars');
const box = document.querySelectorAll('.bar');
const beatText = document.querySelector('.beat');
const start = document.querySelector('.start');

// Event
document.addEventListener('DOMContentLoaded', function readyBeat(e){

    start.addEventListener('click', click);

    function click(e){
        // Call startBeat function every 300ms
        setInterval(startBeat, 300);

        e.target.style.backgroundColor = '#9e9e9e';
        e.target.style.color = '#eee';
        e.target.style.transform = 'scale(1.001)';
        e.target.style.transition = '.7s';

    }



    // Start beat function
    function startBeat(){

        // Initialize random colors variable
        const color1 = Math.floor(Math.random() * 255);
        const color2 = Math.floor(Math.random() * 250);
        const color3 = Math.floor(Math.random() * 220);

        // Set random color for text
        beatText.style.color = `rgb(${color1}, ${color2}, ${color3})`;

        // Set random color for bar
        box.forEach(function(item){
            item.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
        })


        bars.forEach(function(bar){
            // Instantiate random heights
            const randHeight = Math.floor(Math.random() * 100);
            // bar.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
            bar.style.height = `${randHeight}px`;
            // console.log(randHeight);
        })
    }





})