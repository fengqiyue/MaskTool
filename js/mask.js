
window.onload = function () {
    let body = document.querySelector('body')
    let mask = document.createElement('div')

    let storedColor = localStorage.getItem('cheriMaskToolColor')
    let storedOpacity = localStorage.getItem('cheriMaskToolOpacity')

    mask.style.opacity =  storedOpacity || 0
    mask.style.backgroundColor =  storedColor || '#000'
    mask.style.position = 'fixed'
    mask.style.top = 0;
    mask.style.left = 0;
    mask.style.pointerEvents = 'none'
    
    mask.style.zIndex = 99999999999

    let height = document.body.offsetHeight
    let width = document.body.offsetWidth

    mask.setAttribute('class','cheri')

    mask.style.height = height + 'px'
    mask.style.width = width + 'px'

    body.prepend(mask)

    var port = chrome.runtime.connect();
    
    chrome.extension.onMessage.addListener(
        function(request, sender, sendResponse) {
            if(request.type == 'color'){
                mask.style.backgroundColor = request.message
                localStorage.setItem('cheriMaskToolColor', request.message)
            }
            if(request.type == 'opacity'){
                mask.style.opacity = request.message
                localStorage.setItem('cheriMaskToolOpacity', request.message)
            }
            
            
        }
    );
}


