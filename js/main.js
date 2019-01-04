'use strict'

var ct = ct || {};

ct.size = ct.size || {};
ct.size.design = ct.size.design || {WIDTH:800,HEIGHT:600};
ct.size.real = ct.size.real || {width:800,height:600};

ct.init = function(){
    window.app = new PIXI.Application(ct.size.real.width,ct.size.real.height);
    document.body.appendChild(app.view);

    let container = new PIXI.Container();
    app.stage.addChild(container);
    let graphics = new PIXI.Graphics();
    graphics.beginFill(0xff0000, 1);
    graphics.drawRect(0,0,200,200);
    container.addChild(graphics);
    // app.stage.addChild(graphics);

}

ct.resetSize = function(){
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    let scaleW = ct.size.design.WIDTH / winWidth;
    let scaleH = ct.size.design.HEIGHT / winHeight;

    if(scaleW > scaleH){

    }

}

ct.resize = function(evnt){
    ct.resetSize();
    app.renderer.resize(ct.size.real.width,ct.size.real.height);
}


window.addEventListener('resize',ct.resize);

ct.resetSize();
ct.init();
