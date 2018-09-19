$(function () {
    //nav的显示隐藏和title的变色
    (function ($) {
        var $aLi = $('.nav-ul').find('li');
        var $aTitle = $('.nav-title');
        var $aArrow = $aTitle.find('.arrow');
        var $aList = $('.nav-list');

        $aLi.hover(
            function () {
                $(this).find($aTitle).css('color', '#d42719');
                $(this).find($aArrow).css('background-image', 'url("images/nav_arrowTop.png")');
                $(this).find($aList).show();
            },
            function () {
                $(this).find($aTitle).css('color', '');
                $(this).find($aArrow).css('background-image', '');
                $(this).find($aList).hide();
            }
        );
    })(jQuery);

    //选择语言文字变色和列表显示
    (function ($) {
        var $oLan = $('.lan');
        var $oTitle = $('.lan-change');
        var $oWrap = $('.lan-wrap');

        $oLan.mouseenter(function () {
            $oLan.css('background-position-y', '-85px');
            $oTitle.css({ 'color': '#d42719', 'background-image': 'url("images/nav_arrowTop.png")' });
            $oWrap.show();
        });
        $oLan.mouseleave(function () {
            $oLan.css('background-position-y', '');
            $oTitle.css({ 'color': '', 'background-image': '' });
            $oWrap.hide();
        });
    })(jQuery);

    //点击显示隐藏搜索框
    (function ($) {
        var $box = $('.search-box');
        var $send = $('.search-send');
        var $close = $('.search-close');

        $box.click(function () {
            $send.css({ 'width': '25%', 'right': '46px' });
        });
        $close.click(function () {
            $send.css({ 'right': '', 'width': '' });
        });
    })(jQuery);

    //轮播图1
    (function ($) {
        var $oBox = $('.sec-box');
        var $aDot = $('.sec-flex').find('.dot');
        var time = 1;

        clearInterval($oBox.timer);
        $oBox.timer = setInterval(toRun,5000);
        function toRun() {
            if (time <= 2){
                $oBox.stop(true,false).animate({ left : -1920*time }, 1000, 'swing');
                time++;
                $aDot.eq(time-1).addClass('dot-active').siblings().removeClass('dot-active');
            }else {
                $oBox.stop(true,false).animate({ left : 0 },1000, 'swing');
                time = 1;
                $aDot.eq(0).addClass('dot-active').siblings().removeClass('dot-active');
            }
        }
        
        $aDot.click(function () {
            time = $(this).index();
            $aDot.eq(time).addClass('dot-active').siblings().removeClass('dot-active');
            $oBox.stop(true,false).animate({ left : -1920*time }, 1000, 'swing');
        });
    })(jQuery);

    //轮播图2
    (function ($) {
        var $oUl = $('.case-ul');
        var $aLi = $oUl.find('li');
        var $aFion = $oUl.find('figcaption');
        var $aDot = $('.case-flex').find('.dot');
        var time = 1;

        clearInterval($oUl.timer);
        $oUl.timer = setInterval(toRun,8000);
        function toRun() {
            if (time <= 7){
                $oUl.stop(true,false).animate({ left : -475*time }, 1000, 'swing');
                time++;
                $aDot.eq(time-1).addClass('dot-active').siblings().removeClass('dot-active');
            }else {
                $oUl.stop(true,false).animate({ left : 0 },1000, 'swing');
                time = 1;
                $aDot.eq(0).addClass('dot-active').siblings().removeClass('dot-active');
            }
        }

        $aDot.click(function () {
            time = $(this).index();
            $aDot.eq(time).addClass('dot-active').siblings().removeClass('dot-active');
            $aLi.eq(time).fadeTo('fast',0.8);
            $oUl.stop(true,false).animate({ left : -475*time }, 1000, 'swing',function () {
                $aLi.eq(time).fadeTo('fast',1);
            });
        });

        $aLi.hover(
            function () {
                $(this).width(780);
                $(this).find($aFion).css({ 'bottom': '-19%', 'background-color': 'rgba(0, 0, 0, 0.3)' });
                $(this).nextAll().each(function (i,elem) {
                    $(elem).css('left', $(elem).position().left + 330);
                });
            },
            function () {
                $(this).css('width', '');
                $(this).find($aFion).css({ 'bottom': '', 'background-color': '' });
                $(this).nextAll().each(function (i,elem) {
                    $(elem).css('left', '');
                });
            }
        );
    })(jQuery);

    //侧边栏
    (function ($) {
        var $aLi = $('.sidebar').find('li');
        var $oTopLi = $('.sidebar-top');
        var $telLi = $('.sidebar-li-tel');

        $aLi.not($telLi).not($oTopLi).hover(
            function () {
                $(this).stop(true,false).animate({ right : 96 }, 50, 'swing');
            },
            function () {
                $(this).stop(true,false).animate({ right : 0 }, 50, 'swing');
            }
        );
        $telLi.hover(
            function () {
                $(this).stop(true,false).animate({ right : 150 }, 50, 'swing');
            },
            function () {
                $(this).stop(true,false).animate({ right : 0 }, 50, 'swing');
            }
        );
        $oTopLi.click(function () {
            $('HTML').stop(true,false).animate({ scrollTop : 0 }, 400, 'swing');
        });
    })(jQuery);
});