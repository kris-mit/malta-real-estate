const counter_box = document.getElementsByClassName('counter-box')[0];
const counter_box_all = document.querySelectorAll('.counter-box');
const date_attribute = counter_box.getAttribute('data-to');
const future_time = new Date(date_attribute).getTime();

const interval = setInterval(event_timer,1000)

function event_timer() {
    const current_time = new Date().getTime();
    const time = future_time - current_time;

    const days = Math.floor(time/(1000*60*60*24));

    const hours = Math.floor((time % (1000*60*60*24)) / (1000*60*60));

    const minutes = Math.floor((time % (1000*60*60) ) / (1000*60))
    const seconds = Math.floor((time % (1000*60)) / 1000)
    
    const day = days < 10 ? `0${days}` : days;
    const hour = hours < 10 ? `0${hours}` : hours;
    const minute = minutes < 10 ? `0${minutes}` : minutes;
    const second = seconds < 10 ? `0${seconds}` : seconds;

    counter_box_all.forEach(res => {
        // console.log(res, "res")
        res.innerHTML = `
        <div class="counter">
            <div class="box box-time">
                <span>${day} </span>
            </div>
            <div class="box">  
                <span class="divider-dots">:</span>
            </div>
            <div class="box box-time">
                <span>${hour} </span>
            </div>
            <div class="box">  
                <span class="divider-dots">:</span>
            </div>
            <div class="box box-time">
                <span>${minute} </span>
            </div>
            <div class="box">  
                <span class="divider-dots">:</span>
            </div>
            <div class="box box-time">
                <span>${second} </span>
            </div>
    
            <div class="box-name title-time1"><span>DAYS</span></div>
            <div class="box-name title-time2">HOURS</div>
            <div class="box-name title-time3">MINUTES</div>
            <div class="box-name title-time4">SECONDS</div>
        </div>
        `;
        if(time < 0 ) {
            clearInterval(interval);
            const timeOver = document.querySelectorAll('.box-time').forEach(item => item.innerText = "00");
        }
    })

}



// event_timer()
// 28.56 % 28 = 0.56 /0.1 =5

// 10000000 /3600000 = 2




