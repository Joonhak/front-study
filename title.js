window.textAnimation = function(elem) {
    var data = {
        // element for this animation
        elem : elem,
        // origin text for typing animation
        text : elem.innerText,
    }
    return (function(data) {
        var textAnimate = {
            index: 0,
            str : '',
            timer: null,
            state: function() {
                return {
                    text : data.text,
                    elem: data.elem,
                    textLength: data.text.length
                }
            },
            setHtml: function(data) {
                var _this = this;
                if ( data.text && _this.index < data.textLength ) {
                    _this.str += data.text.charAt(_this.index++);
                    data.elem.innerText = _this.str;
                } else {
                    _this.str = _this.str.slice(0, -1);
                    if ( !_this.str.length) {
                        _this.index = 0;
                    }
                    data.elem.innerText = _this.str;
                } 
            },
            init: function(data) {
                var _this = this;
                
                _this.timer = setInterval(function(){
                    _this.setHtml(_this.state());
                }, 200);
            }
        }
        textAnimate.init(data);
    })(data);
}