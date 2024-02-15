const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




function circulemouse(){
     window.addEventListener("mousemove" ,function(detels){
        console.log(detels.clientX, detels.clientY);
        this.document.querySelector("#minicurcul").style.transform = `translate(${detels.clientX}px, ${detels.clientY}px)`;
     })
}

circulemouse();