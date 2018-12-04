(function() {
    var style = [
        'background: linear-gradient(to right, #5433ff, #20bdff, #a5fecb);',
        'color: #FFF',
        'padding: 15px 20px',
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

function addClass( elem, className ) {
    elem.classList += ' ' + className;
    return elem;
}

function removeClass( elem, className ) {
    var classList = getClassList(elem),
        classIndex = classList.indexOf( className );
    if ( classIndex > -1 ) {
        classList.splice( classIndex );
        elem.classList = classList.join(' ');
    }
    return elem;
}

function getClassList(elem) {
    var classStr = elem.getAttribute('class');
    if ( classStr ) {
        return classStr.split(' ');
    } else  {
        return [];
    }
}

function toggleActiveClass(e) {
    var elemToShowOrNot = document.getElementById('category-list')
        , classList = getClassList( elemToShowOrNot )
        , activeIndex = classList.length ? classList.indexOf('active') : -1;

    if ( activeIndex > -1 ) {
        classList.splice( activeIndex )
        elemToShowOrNot.setAttribute('class', classList.join(' '));
    } else {
        classList = classList.length ? classList.push(' active') : ['active'];
        elemToShowOrNot.setAttribute('class', classList.join(' '));
    }
}

function getElementByMultiClass(selector) {
    var selectorList = selector.split(',')
        , nodeList = [];

    for ( var i = 0; i < selectorList.length; i++ ) {
        var arr = document.getElementsByClassName( selectorList[i].trim() );
        for ( var j = 0; j < arr.length; j++ ) {
            nodeList.push( arr[j] );
        }
    }
    return nodeList;
}

function addMenuClickEvent(elem) {
    elem.addEventListener('click', function(e) {
        e.preventDefault();
        var activeElements = document.getElementsByClassName('active')
            , length = activeElements.length
            , classNames = this.className
            , elemToShow = document.getElementById( this.getAttribute('href').substring(1) );

        for ( var i = 0, j = 0; i < length; i++ ) {
            var isSameClass = activeElements[j].className.indexOf(classNames) > -1;
            if ( activeElements[j].tagName === 'DIV' || isSameClass ) { // tagName === 'DIV' ? contents : nav- or menu-item
                removeClass(activeElements[j], 'active');
            } else {
                j++;
            }
        }
        
        addClass( this, 'active');
        addClass( elemToShow, 'active' );

        changeMaxWidth( elem.getAttribute('href') );
    });
}

function changeMaxWidth( href ) {
    var isPortfolio = href === '#portfolio'
        , wrapper = document.getElementById('wrapper')
        , isExtened = getClassList(wrapper).indexOf('extended') > -1;

    if ( isPortfolio && !isExtened ) {
        addClass(wrapper, 'extended');
    } else if ( !isPortfolio ) {
        removeClass(wrapper, 'extended')
    }
}