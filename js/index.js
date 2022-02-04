var skillTop = $('#skill').offset().top - $(window).height()
var arrChartColor = ['#645e96', '#f09081', '#d17589', '#598dce', '#ffd646'];
var arrPercent = [70, 50, 30, 50, 80]

$(window).on('scroll', function(){
    var sct = $(this).scrollTop();
    if (sct>=skillTop ) {
        $('.skills').each(function(idx){
            $(this).attr({'data-percent':arrPercent[idx]})
            $(this).easyPieChart({
                animate: 2000,       // 진행시간
                easing: 'easeOutBounce', // 속도함수
                barColor: arrChartColor[idx],   // 채워지는 색상
                trackColor: '#efefef', // 트색 색상
                scaleColor: false, // 눈금선 색상
                lineCap:'butt', // 선의 끝 모양(butt, round, square)
                lineWidth:45, // 선의 폭
                size:180, // 원형차트의 크기
                onStart:$.noop,
                onStop:$.noop,
                onStep: function(from, to, percent) {  
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            })
        })    
    } 
});