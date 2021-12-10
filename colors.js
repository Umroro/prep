var Links = {
    setColor : function(color) {
        // var alist = document.querySelectorAll('a');
        //     /* alit 변수는 모든 a 태그들을 가져온다. */
        //     var i = 0;
        //     while (i < alist.length) {
        //     /* 변수 뒤에 .length를 붙임으로 몇개의 배열이 있는지 자동으로 알 수 있다. */ 
        //         alist[i].style.color = color;
        //         i = i + 1;
        //     }
        $('a').css("color", color);
        /* jquery는 $로 시작한다. / 이 페이지에 있는 모든 a 태그는 jquery로 제어를 한다는 의미 이며
        .cSS를 통해서 jquery에서 css를 제어 할 수 있다. 
        library를 활용하면 작업 시간을 줄일 수 있다.*/
    }
}
var Body = {
    setColor : function(color) {
        // document.querySelector('body').style.color = color;
        $('Body').css("color", color);
    },
    setBackgroundColor : function(color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
function nightDayHandler(self) {
    var target = document.querySelector('body');
    if(self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('powderblue');
    }
    else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}