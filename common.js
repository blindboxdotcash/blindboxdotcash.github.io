(function(doc, win) {

    var docEl = doc.documentElement,
    
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    
    recalc = function() {
    
    var clientWidth = docEl.clientWidth;
    
    if (!clientWidth) return;
    
    console.log(clientWidth)
    if (clientWidth >= 750) {
    
    docEl.style.fontSize = '16px';
    // docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
    
    } else {
    
    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    
    }
    
    };
    
    if (!doc.addEventListener) return;
    
    win.addEventListener(resizeEvt, recalc, false);
    
    doc.addEventListener('DOMContentLoaded', recalc, false);
    
    })(document, window);