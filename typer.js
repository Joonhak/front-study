var typer = {
    data: null,
    index: 0,
    newText: '',
    timer: null,
    typeHtml: function() {
        if (this.data.text && this.index < this.data.textLength) {
            this.newText += this.data.text[this.index++];
            this.data.$.innerText = this.newText;
        } else {
            this.newText = this.newText.slice(0, -1);
            if (!this.newText.length) {
                this.index = 0;
            }
            this.data.$.innerText = this.newText;
        }
    },
    init: function($) {
        // $ means html element
        this.data = {
            $: $,
            text: $.innerText,
            textLength: $.innerText.length,
        }
        var _this = this;
        this.timer = setInterval(function() {
            _this.typeHtml();
        }, 250);
    }
}