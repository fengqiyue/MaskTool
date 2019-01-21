
window.onload = function () {
    let colorDom = document.querySelector('[name="color"]')
    let opacityDom = document.querySelector('[name="opacity"]')

    colorDom.addEventListener('change',function(){
        let color = this.value
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {message:color,type:'color'}, function(response) {
                
            });   
        });
    })

    opacityDom.addEventListener('change',function(){
        let opacity = this.value
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){  
            chrome.tabs.sendMessage(tabs[0].id, {message:opacity,type:'opacity'}, function(response) {
              
            });   
        });
    },false)    
}
