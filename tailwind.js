function timeFunction(){
    let time = new Date();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    let current = {hours:time.getHours(),minutes,seconds};
    document.getElementById("showTime").innerHTML = current.hours + ":" + current.minutes + ":" + current.seconds;
    setTimeout(timeFunction, 1000);
}
function showDate(){
    let time = new Date;
    let day = time.getDate();
    let computerMonth = time.getMonth();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = months[computerMonth].slice(0, 3);
    document.getElementById('showDate').innerHTML = day + ' ' + month;
}
function showDatePlus(){
    let time = new Date;
    let day = time.getDate();
    let computerMonth = time.getMonth();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = months[computerMonth].slice(0, 3);
    document.getElementById('showDateMore').innerHTML = parseInt(day) + 1 + ' ' + month;
}
function buttonChange1(){
    let clicked = document.getElementById('check').innerHTML;
    if(clicked == 0){
        document.getElementById('button1').style.borderColor = '#009974';
        document.getElementById('check').innerHTML ='1';
        for(let i = 1; i < 7; i++){
            if(i == 1){
                continue;
            }
            document.getElementById('button' + i).style.borderColor = '#e6e6e6';
        }
    }
    if(clicked == 1){
        if(window.getComputedStyle(document.getElementById('button1'), null).getPropertyValue('border-color') == 'rgb(0, 153, 116)'){
            document.getElementById('button1').style.borderColor = '#e6e6e6';
            document.getElementById('check').innerHTML = '0';
            for(let i = 1; i < 7; i++){
                if(i == 1){
                    continue;
                }
                document.getElementById('button' + i).style.borderColor = '#e6e6e6';
            }
        }
        else{
            document.getElementById('button1').style.borderColor = '#009974';
            document.getElementById('check').innerHTML = '0';
            for(let i = 1; i < 7; i++){
                if(i == 1){
                    continue;
                }
                document.getElementById('button' + i).style.borderColor = '#e6e6e6';
            }
        }
    }
}
function buttonChange2(){
    let clicked = document.getElementById('check').innerHTML;
    if(clicked == 0){
        document.getElementById('button2').style.borderColor = '#009974';
        document.getElementById('check').innerHTML ='1';
        for(let i = 1; i < 7; i++){
            if(i == 2){
                continue;
            }
            document.getElementById('button' + i).style.borderColor = '#e6e6e6';
        }
    }
    if(clicked == 1){
        if(window.getComputedStyle(document.getElementById('button2'), null).getPropertyValue('border-color') == 'rgb(0, 153, 116)'){
            document.getElementById('button2').style.borderColor = '#e6e6e6';
            document.getElementById('check').innerHTML = '0';
            for(let i = 1; i < 7; i++){
                if(i == 2){
                    continue;
                }
                document.getElementById('button' + i).style.borderColor = '#e6e6e6';
            }
        }
        else{
            document.getElementById('button2').style.borderColor = '#009974';
            document.getElementById('check').innerHTML = '0';
            for(let i = 1; i < 7; i++){
                if(i == 2){
                    continue;
                }
                document.getElementById('button' + i).style.borderColor = '#e6e6e6';
            }
        }
    }
}
function buttonChange3(){
    let clicked = document.getElementById('check').innerHTML;
    if(clicked == 0){
        document.getElementById('button3').style.borderColor = '#009974';
        document.getElementById('check').innerHTML ='1';
        for(let i = 1; i < 7; i++){
            if(i == 3){
                continue;
            }
            document.getElementById('button' + i).style.borderColor = '#e6e6e6';
        }
    }
    if(clicked == 1){
        if(window.getComputedStyle(document.getElementById('button3'), null).getPropertyValue('border-color') == 'rgb(0, 153, 116)'){
            document.getElementById('button3').style.borderColor = '#e6e6e6';
            document.getElementById('check').innerHTML = '0';
            for(let i = 1; i < 7; i++){
                if(i == 3){
                    continue;
                }
                document.getElementById('button' + i).style.borderColor = '#e6e6e6';
            }
        }
        else{
            document.getElementById('button3').style.borderColor = '#009974';
            document.getElementById('check').innerHTML = '0';
            for(let i = 1; i < 7; i++){
                if(i == 3){
                    continue;
                }
                document.getElementById('button' + i).style.borderColor = '#e6e6e6';
            }
        }
    }
}
function buttonChange4(){
    let clicked = document.getElementById('check').innerHTML;
    if(clicked == 0){
        document.getElementById('button4').style.borderColor = '#009974';
        document.getElementById('check').innerHTML ='1';
        for(let i = 1; i < 7; i++){
            if(i == 4){
                continue;
            }
            document.getElementById('button' + i).style.borderColor = '#e6e6e6';
        }
    }
    if(clicked == 1){
        if(window.getComputedStyle(document.getElementById('button4'), null).getPropertyValue('border-color') == 'rgb(0, 153, 116)'){
            document.getElementById('button4').style.borderColor = '#e6e6e6';
            document.getElementById('check').innerHTML = '0';
            for(let i = 1; i < 7; i++){
                if(i == 4){
                    continue;
                }
                document.getElementById('button' + i).style.borderColor = '#e6e6e6';
            }
        }
        else{
            document.getElementById('button4').style.borderColor = '#009974';
            document.getElementById('check').innerHTML = '0';
            for(let i = 1; i < 7; i++){
                if(i == 4){
                    continue;
                }
                document.getElementById('button' + i).style.borderColor = '#e6e6e6';
            }
        }
    }
}
function buttonChange5(){
    let clicked = document.getElementById('check').innerHTML;
    if(clicked == 0){
        document.getElementById('button5').style.borderColor = '#009974';
        document.getElementById('check').innerHTML ='1';
        for(let i = 1; i < 7; i++){
            if(i == 5){
                continue;
            }
            document.getElementById('button' + i).style.borderColor = '#e6e6e6';
        }
    }
    if(clicked == 1){
        if(window.getComputedStyle(document.getElementById('button5'), null).getPropertyValue('border-color') == 'rgb(0, 153, 116)'){
            document.getElementById('button5').style.borderColor = '#e6e6e6';
            document.getElementById('check').innerHTML = '0';
            for(let i = 1; i < 7; i++){
                if(i == 5){
                    continue;
                }
                document.getElementById('button' + i).style.borderColor = '#e6e6e6';
            }
        }
        else{
            document.getElementById('button5').style.borderColor = '#009974';
            document.getElementById('check').innerHTML = '0';
            for(let i = 1; i < 7; i++){
                if(i == 5){
                    continue;
                }
                document.getElementById('button' + i).style.borderColor = '#e6e6e6';
            }
        }
    }
}
function buttonChange6(){
    let clicked = document.getElementById('check').innerHTML;
    if(clicked == 0){
        document.getElementById('button6').style.borderColor = '#009974';
        document.getElementById('check').innerHTML ='1';
        for(let i = 1; i < 7; i++){
            if(i == 6){
                continue;
            }
            document.getElementById('button' + i).style.borderColor = '#e6e6e6';
        }
    }
    if(clicked == 1){
        if(window.getComputedStyle(document.getElementById('button3'), null).getPropertyValue('border-color') == 'rgb(0, 153, 116)'){
            document.getElementById('button6').style.borderColor = '#e6e6e6';
            document.getElementById('check').innerHTML = '0';
            for(let i = 1; i < 7; i++){
                if(i == 6){
                    continue;
                }
                document.getElementById('button' + i).style.borderColor = '#e6e6e6';
            }
        }
        else{
            document.getElementById('button6').style.borderColor = '#009974';
            document.getElementById('check').innerHTML = '0';
            for(let i = 1; i < 7; i++){
                if(i == 6){
                    continue;
                }
                document.getElementById('button' + i).style.borderColor = '#e6e6e6';
            }
        }
    }
}
function showCalendar(){
    let isOpened = document.getElementById('isCalendarOpen').innerHTML;
    if(isOpened == 0){
        document.getElementById('calendar').style.display = 'none';
        document.getElementById('calendarFather').style.height = '84px';
        document.getElementById('isCalendarOpen').innerHTML = '1';
        document.getElementById('calendarButton').style.transform = 'rotate(0deg)';
    }
    else{
        document.getElementById('calendar').style.display = 'flex';
        document.getElementById('calendarFather').style.height = '168px';
        document.getElementById('isCalendarOpen').innerHTML = '0';
        document.getElementById('calendarButton').style.transform = 'rotate(180deg)';
    }
}
function addContent(){
    document.getElementById('extraContent').style.display = 'block';
    document.getElementById('moreContent').style.display = 'block';
    document.getElementById('contentFather').style.flexDirection = 'column';
}
function moveRight(){
    document.getElementById('news').style.transform = 'translateX(-310px)';
    document.getElementById('newsSecondary').style.transform = 'translateX(-310px)';
}
function moveLeft(){
    document.getElementById('pop-up').style.top = '50px';
    document.getElementById('pop-up').style.transition = '0.5s';
    document.getElementById('pop-up').innerHTML = 'No news for this day';
}
function moveRightSecondary(){
    document.getElementById('pop-up').style.top = '50px';
    document.getElementById('pop-up').style.transition = '0.5s';
    document.getElementById('pop-up').innerHTML = 'No news for this day';
}
function moveLeftSecondary(){
    document.getElementById('news').style.transform = 'translateX(0px)';
    document.getElementById('newsSecondary').style.transform = 'translateX(0px)';
}
function disappear(){
    document.getElementById('pop-up').style.top = '-400px';
    document.getElementById('pop-up').style.transition = '0.5s';
}