function stopwatch() {
    let startButton = document.querySelector('#startBtn');
    let stopButton = document.querySelector('#stopBtn');
    let time = document.querySelector('#time')
    let totalSeconds = 0;
    let interval;

    function startTime() {
        time.textContent ='00:00';
        totalSeconds=0;
        interval = setInterval(
            function () {
                ++totalSeconds;
                let minutes = Math.floor(totalSeconds / 60);
                let seconds = totalSeconds % 60;
                if (minutes < 10) {
                    minutes = `0${minutes}`;
                }
                if (seconds < 10) {
                    seconds = `0${seconds}`;
                }
                time.textContent = `${minutes}:${seconds}`;
            }, 1000);
            startButton.disabled=true;
            stopButton.disabled=false;
    };

    function stopTime(){
        clearInterval(interval);
        stopButton.disabled=true;
        startButton.disabled=false;
    }

    startButton.addEventListener('click', startTime);
    stopButton.addEventListener('click',stopTime);
}

