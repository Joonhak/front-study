(function() {
    var style = [
        'background: linear-gradient(to right, #5433ff, #20bdff, #a5fecb);',
        'color: #FFF',
        'padding: 15px 20px',
        'font-family: Roboto',
        'font-size: 5rem',
        'font-weight: 700'
    ].join(';');
    setTimeout(console.log.bind(console,"%c Hello World!", style), 0);
}());

function afterDocumentReady(fn) {
    // $(document).ready();
    document.addEventListener("DOMContentLoaded", function () {
        document.removeEventListener("DOMContentLoaded", arguments.callee, false);
        fn();
    }, false);
}

function addActiveAtCategoryList() {
    toggleClass(document.getElementById('category-list'), 'active');
}

function addClass( elem, className ) {
    elem.className += ' ' + className;
    return elem;
}

function removeClass( elem, className ) {
    var classList = getClassList(elem),
        classIndex = classList.indexOf( className );
    if ( classIndex > -1 ) {
        classList.splice( classIndex );
        elem.className = classList.join(' ');
    }
    return elem;
}

function getClassList(elem) {
    var classStr = elem.className;
    if ( classStr ) {
        return classStr.split(' ');
    } else  {
        return [];
    }
}

function toggleClass(elem, className) {
    var classList = getClassList(elem)
        , classIndex = classList.indexOf(className);
    
    if ( classIndex > -1 ) {
        removeClass( elem, className );
    } else {
        addClass( elem, className );
    }
}

function addMenuClickEvent(elemList) {
    for ( var i = 0; i < elemList.length; i++) {
        elemList[i].addEventListener('click', function(e) {
            e.preventDefault();
            var activeElements = document.querySelectorAll('.active')
                , length = activeElements.length
                , className = this.className // When this element is not have 'active' class, then it has only one class.
                , elemToShow = document.querySelector( this.getAttribute('href') );
            
            for ( var j = 0; j < length; j++ ) {
                var isSameClass = activeElements[j].getAttribute('class').indexOf(className) > -1;
                if ( activeElements[j].tagName === 'DIV' || isSameClass ) {
                    removeClass( activeElements[j], 'active' );
                }
            }

            addClass( this, 'active');
            addClass( elemToShow, 'active' );        
            changeMaxWidth( this.getAttribute('href') );
        });
    }
}

function changeMaxWidth( href ) {
    var isPortfolio = href === '#portfolio'
        , wrapper = document.querySelector('#wrapper')
        , isExtened = getClassList(wrapper).indexOf('extended') > -1;

    if ( isPortfolio && !isExtened ) {
        addClass(wrapper, 'extended');
    } else if ( !isPortfolio ) {
        removeClass(wrapper, 'extended')
    }
}