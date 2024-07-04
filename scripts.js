const time = document.querySelector("#time");
const redLight = document.querySelector(".red-light")
const orangeLight = document.querySelector(".orange-light")
const greenLight = document.querySelector(".green-light")
const limit = 15;
let current;
let trafficStatus = false;

time.innerHTML = limit;

function reset() {
    time.innerHTML = limit;
    current = limit;   
    trafficStatus = !trafficStatus;

    if(trafficStatus) {
        greenLight.style.opacity = '1';
        redLight.style.opacity = '0.1';
    } else {
        redLight.style.opacity = '1';
        orangeLight.style.opacity = '0.1';
        greenLight.style.opacity = '0.1';           
    }
}

function state(current) {
    
    setInterval(() => {
        let countdown = 0;

        while(countdown < 5) {
            if(trafficStatus && current <= 5){
                orangeLight.style.opacity = '1';
                greenLight.style.opacity = '0.1';
            } else {
                orangeLight.style.opacity = '0.1';        
            }

            countdown = countdown + 1;
        }        
    }, 1000);   
}

setInterval(() => {     

    current = Number.parseInt(time.textContent);
    
    if(current === 0) {   
        reset();
    } else {
        if(current <= 10) {
            time.innerHTML = `0${current - 1}`;
        } else {
            time.innerHTML =  current - 1;
        }        
    }
    
    // state(current);  
    
}, 1000);


