window.typing = function(elem) {
    var data = {
        // element for this animation
        elem : elem,
        // origin text for typing animation
        text : elem.innerText,
    }
    return (function(data) {
        var typing = {
            index: 0,
            str : '',
            timer: null,
            state: function(data) {
                return {
                    elem: data.elem,
                    text : data.text,
                    textLength: data.text.length
                }
            },
            setHtml: function(state) {
                var _this = this;
                if ( state.text && _this.index < state.textLength ) {
                    _this.str += state.text.charAt(_this.index++);
                    state.elem.innerText = _this.str;
                } else {
                    _this.str = _this.str.slice(0, -1);
                    if ( !_this.str.length) {
                        _this.index = 0;
                    }
                    state.elem.innerText = _this.str;
                } 
            },
            init: function(data) {
                var _this = this;
                
                _this.timer = setInterval(function(){
                    _this.setHtml(_this.state(data));
                }, 250);
            }
        }
        typing.init(data);
    })(data);
}