// 动态设置font-size
(function (doc, win) {
    var docEl = doc.documentElement,
        isIOS = navigator.userAgent.match(/iphone|ipod|ipad/gi),
        dpr = isIOS? Math.min(win.devicePixelRatio, 3) : 1,
        dpr = window.top === window.self? dpr : 1; //被iframe引用时，禁止缩放
    var recalc = function () {
        var width = docEl.clientWidth;
        if (width / dpr > 375) {
            width = 375 * dpr;
        }
        docEl.style.fontSize = 100 * (width / 375) + 'px';
    };
    recalc();
})(document, window);

var _self = null;

new Vue ({
    el: '#app',
    data: function () {
        return {
            cover: false,
            pageOneShow: false,
            pageTwoShow: false,
            pageThreeShow: false,
            pageFourShow: false,
            pageFiveShow: false,
            pageSixShow: false,
            pageSevenShow: false,
            swiperIndex: {},
            swiperOption: {
                direction:'vertical',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                on: {
                    init: function () {
                        var index = 0;
                        imgLoad()
                        function imgLoad (src) {
                            var imgArr = [
                                'images/allBg.png',
                                'images/textDialog.png',
                                'images/cover/cover_dialog.png',
                                'images/cover/cover_platform.png',
                                'images/second/horizontal.png',
                                'images/second/portrait.png',
                                'images/second/second_BG.png',
                                'images/third/dou.png',
                                'images/third/FM.png',
                                'images/third/sing.png',
                                'images/third/third_BG.png',
                                'images/fourth/game.png',
                                'images/fourth/music.png',
                                'images/fourth/rings.png',
                                'images/fourth/shopping.png',
                                'images/fourth/fourth_BG.png',
                                'images/fifth/longLine.png',
                                'images/fifth/map.png',
                                'images/fifth/mapIcon.png',
                                'images/fifth/mapRing.png',
                                'images/fifth/pad.png',
                                'images/fifth/padRing.png',
                                'images/fifth/phone.png',
                                'images/fifth/phoneRing.png',
                                'images/fifth/sortLine.png',
                                'images/fifth/fifth_BG.png',
                                'images/sixth/awaken.png',
                                'images/sixth/mutual.png',
                                'images/sixth/open.png',
                                'images/sixth/search.png',
                                'images/sixth/microphone.png',
                                'images/seventh/cloud1.png',
                                'images/seventh/cloud2.png',
                                'images/seventh/sevenPhone.png',
                                'images/seventh/wifi1.png',
                                'images/seventh/wifi2.png',
                                'images/seventh/wifi3.png',
                                'images/seventh/seventh_BG.png',
                                'images/eighth/ending.png'
                            ]
                            for (var i in imgArr) {
                                var img = new Image()
                                img.onload = function () {
                                    index = index + 1;
                                    if (index === imgArr.length-1) {
                                        _self.cover = true
                                        setTimeout(createCircles, 800)
                                    }
                                }
                                img.src = imgArr[i]
                            }
                        }
                    },
                    slideChangeTransitionEnd: function () {
                        // console.log(this.activeIndex)
                        if (this.activeIndex === 0) {
                            _self.cover = true
                            _self.pageOneShow = false
                            setTimeout(createCircles, 1000)
                        } else if (this.activeIndex === 1) {
                            _self.cover = false
                            _self.pageOneShow = true
                            _self.pageTwoShow = false
                        } else if (this.activeIndex === 2) {
                            _self.pageOneShow = false
                            _self.pageTwoShow = true
                            _self.pageThreeShow = false
                            setTimeout(createSquare, 1000)
                        } else if (this.activeIndex === 3) {
                            _self.pageTwoShow = false
                            _self.pageThreeShow = true
                            _self.pageFourShow = false
                        } else if (this.activeIndex === 4) {
                            _self.pageThreeShow = false
                            _self.pageFourShow = true
                            _self.pageFiveShow = false
                        } else if (this.activeIndex === 5) {
                            _self.pageFourShow = false
                            _self.pageFiveShow = true
                            _self.pageSixShow = false
                            setTimeout(sixCreateCircle, 1000)
                        } else if (this.activeIndex === 6) {
                            _self.pageFiveShow = false
                            _self.pageSixShow = true
                            _self.pageSevenShow = false
                            setTimeout(sevenCreateSpots, 1000)
                        } else if (this.activeIndex === 7) {
                            _self.pageSixShow = false
                            _self.pageSevenShow = true
                        }
                    }
                }
            }
        }
    },
    created: function () {
        _self = this
    }
})


// 封面圆点上浮
// 间隔生成随机个数(2-4)圆点
function createCircles () {
    var num = Math.floor(Math.random() * 3 + 2);
    for (var i = 0; i < num; i++) {
        var newNode = document.createElement('div');
        var sizeVal = (Math.random() / 20 + 0.02).toFixed(3);
        newNode.className = 'circleBox';
        newNode.style.width = sizeVal + 'rem';
        newNode.style.height = sizeVal + 'rem';
        newNode.style.left = Math.random()*100 + '%';
        newNode.style.bottom =  Math.random() / 2 + 'rem';
        var box = document.getElementById('pageOne_background_circles');
        if (box !== null) {
            document.getElementById('pageOne_background_circles').appendChild(newNode);
        } else {
            return false;
        }
    }
    setTimeout(createCircles, 800)
    $('.circleBox').bind('webkitAnimationEnd', function () {
        this.remove()
    })
}


function createSquare () {
    var picArr = [
        'images/third/FM.png',
        'images/third/sing.png',
        'images/third/dou.png'
    ]
    var picLength = picArr.length
    var num = Math.floor(Math.random() * picLength)
    var imgNode = document.createElement('img');
    imgNode.className = 'squaresChange';
    imgNode.src = picArr[num]
    imgNode.style.left = Math.random() * 2 - 0.01 + 'rem';
    imgNode.style.bottom = Math.random() + 'rem';
    var box = document.getElementById('pageThree_background_square');
    if (box === null) {
        return false;
    } else {
        document.getElementById('pageThree_background_square').appendChild(imgNode)
    }
    $('.squaresChange').bind('webkitAnimationEnd', function () {
        this.remove()
    })
    setTimeout(createSquare, 1000)
}

function sixCreateCircle () {
    var divNode = document.createElement('div');
    divNode.className = 'mcCircles';
    divNode.style.left = Math.random() * 0.8 + 0.01 + 'rem';
    divNode.style.bottom = Math.random() / 10 + 'rem';
    var box = document.getElementById('pageSix_background_circles');
    if (box === null) {
        return false;
    } else {
        document.getElementById('pageSix_background_circles').appendChild(divNode)
    }
    setTimeout(sixCreateCircle, 1000)
    $('.mcCircles').bind('webkitAnimationEnd', function () {
        this.remove()
    })
}

function sevenCreateSpots () {

    var leftNode = document.createElement('div');
    leftNode.className = 'sevenSpots';
    leftNode.style.left = Math.random() * 0.3 + 0.01 + 'rem';
    var boxLeft = document.getElementById('leftSpot');
    if (boxLeft === null) {
        return false;
    } else {
        document.getElementById('leftSpot').appendChild(leftNode)
    }

    var rightNode = document.createElement('div');
    rightNode.className = 'sevenSpots';
    rightNode.style.left = Math.random() * 0.3 + 0.01 + 'rem';
    var boxRight = document.getElementById('rightSpot');
    if (boxRight === null) {
        return false;
    } else {
        document.getElementById('rightSpot').appendChild(rightNode)
    }
    setTimeout(sevenCreateSpots, 500)
    $('.sevenSpots').bind('webkitAnimationEnd', function () {
        this.remove()
    })
}








