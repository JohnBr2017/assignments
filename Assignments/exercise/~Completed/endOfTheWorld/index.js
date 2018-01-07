function start() {
    let counter = 1000 * 60 * 60 * 1.5;
    
    function subt() {
        let beginningOfTime = new Date(counter);
        let hours = beginningOfTime.getUTCHours();
        let minutes = beginningOfTime.getUTCMinutes();
        let seconds = beginningOfTime.getUTCSeconds();
        let mills = beginningOfTime.getUTCMilliseconds();
        document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
        console.log(hours + ":" + minutes + ":" + seconds + ":" + mills);
        counter -= 10;
        if (counter === 0) {
            clearInterval(timer);
            alert("It doesn't even matter.")
        }
    }
    let timer = setInterval(subt, 10);
}

