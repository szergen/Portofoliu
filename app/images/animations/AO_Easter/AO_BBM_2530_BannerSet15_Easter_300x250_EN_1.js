(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"images/bg_bunny2.jpg?1458661127602", id:"bg_bunny2"},
		{src:"images/bg_easter.jpg?1458661127602", id:"bg_easter"},
		{src:"images/flower.png?1458661127602", id:"flower"},
		{src:"images/grass_3.png?1458661127602", id:"grass_3"},
		{src:"images/logo_easter_389x200.png?1458661127602", id:"logo_easter_389x200"},
		{src:"images/nest.png?1458661127602", id:"nest"},
		{src:"images/PLAYNOW_.png?1458661127602", id:"PLAYNOW_"},
		{src:"images/rabbit.png?1458661127602", id:"rabbit"}
	]
};



// symbols:



(lib.bg_bunny2 = function() {
	this.initialize(img.bg_bunny2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.bg_easter = function() {
	this.initialize(img.bg_easter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.flower = function() {
	this.initialize(img.flower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,24);


(lib.grass_3 = function() {
	this.initialize(img.grass_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,120);


(lib.logo_easter_389x200 = function() {
	this.initialize(img.logo_easter_389x200);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,83);


(lib.nest = function() {
	this.initialize(img.nest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,101);


(lib.PLAYNOW_ = function() {
	this.initialize(img.PLAYNOW_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,71);


(lib.rabbit = function() {
	this.initialize(img.rabbit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,190);


(lib.rabbit_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rabbit();
	this.instance.setTransform(-88.5,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.5,-190,177,190);


(lib.nest_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nest();
	this.instance.setTransform(-105.5,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,-101,211,101);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_easter_389x200();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191,83);


(lib.grass2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.grass_3();
	this.instance.setTransform(-66.2,-119.6,1,1,8.2);

	this.instance_1 = new lib.grass_3();
	this.instance_1.setTransform(-315.1,-198.2,1,1,17);

	this.instance_2 = new lib.grass_3();
	this.instance_2.setTransform(-198.2,-163.4,1,1,8.2);

	this.instance_3 = new lib.grass_3();
	this.instance_3.setTransform(-145.8,-152.4,1,1,8.2);

	this.instance_4 = new lib.grass_3();
	this.instance_4.setTransform(-102.8,-163.4,1,1,8.2);

	this.instance_5 = new lib.grass_3();
	this.instance_5.setTransform(-43.8,-156.9,1,1,8.2);

	this.instance_6 = new lib.grass_3();
	this.instance_6.setTransform(-173.5,-163.4,1,1,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350.1,-198.2,570.6,235.6);


(lib.flower_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flower();
	this.instance.setTransform(-12.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-24,25,24);


(lib.cta_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PLAYNOW_();
	this.instance.setTransform(-99.5,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-71,199,71);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkMCIQg6gLg1gWIgbgNIgfgUQgGgEgHgHQgXgXASgQIAMgIIASgFIBMgHQAGAAAEgCQAHgEgCgHQgFgTAXgTQALgIAQgIIAEgCIACgCIAGgDIAMgFQAFgCAGgBIAMgCQALgCALACQALABAJADQAIADAFAEQAIAIALgCQALgCAEgMQAGgQAPgMQAUgQAjgIIAIgBIAJgBIAPABQAOACAMAGIALAGIADACIACABIABAAIAAAAIACAEQAJAHAEAHIAFAEIAFAEQAGACAFgBQAGAAAEgDQAFgGABgFQADgQARgMQALgGAMgEQAHgCAHgBQAFgCAMAAIALAAIAMACQAOACALAGQAcANgFAWQgCAIAJADQAJADAKgEQAdgLAaAAQAYABARAIQARAIAGAMQAGAMgHALQgDAGAEADQAFAEAMABQA4AGAQAFQAaAJAIAYQAGATgcAQQgMAHgOADQgOAEgMgBQgQgBgFADQgGACgBAMQgBAOgOAJQgMAIgWADQgxAHg/gVQgPgEgJABQgJACgLAJQgjAcg4gDIgTgCIgtgLIgBAAIAAgBIAAAAIgpgSQgRgJgKACQgKACgMANQgkAngyAHQgNACgNAAQggAAgigMg");
	this.shape.setTransform(0,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.4,-29.8,92.9,29.8);


(lib.clickTag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTdMAAAgm5MAu2AAAMAAAAm5g");
	this.shape.setTransform(150,124.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,249);


(lib.black_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A6TV4MAAAgruMA0nAAAMAAAArug");
	this.shape.setTransform(0,-140);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.5,-280,337,280);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg_easter();
	this.instance.setTransform(-168,-280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-280,336,280);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17));

	// cta
	this.instance = new lib.cta_mov();
	this.instance.setTransform(0,-35.5,1,1,0,0,0,0,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.09,scaleY:1.09},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-71,199,71);


(lib.clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud();
	this.instance.setTransform(207.6,-35.1,0.688,1.419,0,0,0,0,-14.9);
	this.instance.alpha = 0.449;
	this.instance.filters = [new cjs.BlurFilter(13, 13, 1)];
	this.instance.cache(-48,-32,97,34);

	this.instance_1 = new lib.cloud();
	this.instance_1.setTransform(137.6,-73,1.285,1.987,0,0,0,0.1,-14.9);
	this.instance_1.alpha = 0.32;
	this.instance_1.filters = [new cjs.BlurFilter(15, 15, 2)];
	this.instance_1.cache(-48,-32,97,34);

	this.instance_2 = new lib.cloud();
	this.instance_2.setTransform(23.4,-30.9,1,1,0,0,0,0,-14.9);
	this.instance_2.alpha = 0.449;
	this.instance_2.filters = [new cjs.BlurFilter(12, 12, 2)];
	this.instance_2.cache(-48,-32,97,34);

	this.instance_3 = new lib.cloud();
	this.instance_3.setTransform(-9.7,-73,0.688,1.419,0,0,0,0,-14.9);
	this.instance_3.alpha = 0.352;
	this.instance_3.filters = [new cjs.BlurFilter(13, 13, 2)];
	this.instance_3.cache(-48,-32,97,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.7,-118.6,306.4,118.8);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// clouds
	this.instance = new lib.clouds();
	this.instance.setTransform(102.5,38,1,1,0,0,0,0,-44.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:280.9,y:35.8},139).wait(1));

	// bg
	this.instance_1 = new lib.bg_bunny2();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-36.3,353.1,316.3);


// stage content:
(lib.AO_BBM_2530_BannerSet15_Easter_300x250_EN_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		i=0;
	}
	this.frame_1 = function() {
		i++;
	}
	this.frame_126 = function() {
		var frequency = 10;
		stage.enableMouseOver(frequency);
		this.clickTag.addEventListener('mouseover', mo.bind(this));
		
		function mo() {
			this.cta.gotoAndPlay(2);
		}
		
		
		
		function createsnow(snowX, snowY, snowWH, speed) {
				var snow = new lib.flower();
				stage.addChild(snow);
				snow.x = snowX;
				snow.y = snowY;
				snow.scaleX = snowWH;
				snow.scaleY = snowWH;
				stage.addEventListener("tick", function(){snow.y=snow.y+2+speed; snow.rotation=snow.rotation+2+speed});
			}
			
			
		createsnow(0,0,0.5,1);
		createsnow(30,0,0.8,2);
		createsnow(40,-10,0.6,5);
		createsnow(140,-120,0.5,10);
		createsnow(340,-110,0.3,2);
		createsnow(120,-10,0.9,4);
		createsnow(70,-10,0.9,2);
		createsnow(180,-70,0.4, 3);
		createsnow(200,-150,0.4,6);
		createsnow(240,-130,0.7,5);
		createsnow(270,-120,0.5,2);
		createsnow(300,-50,0.8,3);
	}
	this.frame_242 = function() {
		if(i == 2) this.stop();
	}
	this.frame_255 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(125).call(this.frame_126).wait(116).call(this.frame_242).wait(13).call(this.frame_255).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(150.5,54,0.893,0.893,0,0,0,95.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(256));

	// Layer 5
	this.instance_1 = new lib.black_bg();
	this.instance_1.setTransform(149.6,125,0.893,0.893,0,0,0,0,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},10,cjs.Ease.get(-1)).wait(233).to({alpha:1},12,cjs.Ease.get(1)).wait(1));

	// clickTag
	this.clickTag = new lib.clickTag();
	this.clickTag.setTransform(150,125.4,0.997,1.001,0,0,0,150,124.5);
	this.clickTag.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(256));

	// cta
	this.cta = new lib.cta();
	this.cta.setTransform(142.4,208.5,0.283,0.283,0,0,0,0,-35.6);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(118).to({_off:false},0).to({scaleX:1,scaleY:1,y:208.4},6,cjs.Ease.get(-0.91)).to({regY:-35.5,scaleX:0.89,scaleY:0.89,y:208.5},2).wait(130));

	// bg2 copy
	this.instance_2 = new lib.bg2();
	this.instance_2.setTransform(150,125.1,0.893,0.893,0,0,0,0,-139.9);
	this.instance_2.alpha = 0.078;
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(27, 27, 1)];
	this.instance_2.cache(-170,-282,340,284);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(111).to({_off:false},0).to({alpha:0},11).wait(134));

	// bg2
	this.instance_3 = new lib.bg2();
	this.instance_3.setTransform(150,125,0.893,0.893,0,0,0,0,-140);
	this.instance_3.alpha = 0.078;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(111).to({_off:false},0).to({alpha:1},11).wait(134));

	// grass3
	this.instance_4 = new lib.grass2();
	this.instance_4.setTransform(173.3,251.2,0.893,0.893,-7.5,0,0,9,-45.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-45.3,scaleY:0.9,rotation:0,skewX:0.9,skewY:-5.5,x:182.2},42).to({regY:-45.2,scaleY:0.89,rotation:-7.5,skewX:0,skewY:0,x:173.3},27).to({regX:9.1,scaleY:0.89,rotation:0,skewX:-4.2,skewY:-7.5,x:177.8},36,cjs.Ease.get(-1)).to({regX:9,scaleY:0.89,rotation:-7.5,skewX:0,skewY:0,x:173.3},21).to({regX:9.1,scaleY:0.89,rotation:0,skewX:-4.2,skewY:-7.5,x:177.8},36).to({regX:9,scaleY:0.89,rotation:-7.5,skewX:0,skewY:0,x:173.3},21).to({regX:9.1,scaleY:0.89,rotation:0,skewX:-4.2,skewY:-7.5,x:177.8},36).to({regX:9,scaleY:0.89,rotation:-7.5,skewX:0,skewY:0,x:173.3},21).wait(16));

	// grass1
	this.instance_5 = new lib.grass2();
	this.instance_5.setTransform(142.9,265.3,0.893,0.893,-7.5,0,0,9,-45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-45.2,scaleY:0.9,rotation:0,skewX:2.5,skewY:-4.6,x:150.7,y:266.6},31).to({regX:9.1,regY:-45.1,scaleY:0.91,skewX:4.5,skewY:-4,x:121.5,y:258.9},6).to({scaleY:0.91,skewX:6.2,skewY:-3.8,x:153.6,y:267},5).to({scaleY:0.91,skewX:4.5,skewY:-4,x:170.3,y:251.7},3).to({regX:9,scaleY:0.89,rotation:-7.5,skewX:0,skewY:0,x:142.9,y:265.3},24).to({regX:9.1,scaleY:0.91,rotation:0,skewX:6.2,skewY:-3.8,x:153.6,y:267},36,cjs.Ease.get(-1)).to({regX:9,scaleY:0.89,rotation:-7.5,skewX:0,skewY:0,x:142.9,y:265.3},21).to({regX:9.1,scaleY:0.91,rotation:0,skewX:6.2,skewY:-3.8,x:153.6,y:267},36).to({regX:9,scaleY:0.89,rotation:-7.5,skewX:0,skewY:0,x:142.9,y:265.3},21).wait(73));

	// nest
	this.instance_6 = new lib.nest_1();
	this.instance_6.setTransform(89.3,204.9,0.893,0.893,0,0,0,0,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(256));

	// rabbit
	this.instance_7 = new lib.rabbit_1();
	this.instance_7.setTransform(250.9,329,0.893,0.663,0,0,0,0,-21);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31).to({_off:false},0).to({x:250.3,y:311.7},4).to({regY:-21.1,x:259.1,y:307.3},1).to({regY:-21,x:250,y:303.1},2).to({regY:-21.1,x:252.7,y:299.4},1).to({regY:-21,x:242.9,y:295.9},1).to({regY:-21.1,x:241.1,y:292.3},2).to({x:237.5,y:288.7},1).to({regY:-21,x:232.2,y:285.2},1).to({y:279.3},1).to({regY:-21.1,y:267.3},1).to({scaleY:0.67,x:231.6,y:266.2},1,cjs.Ease.get(1)).wait(31).to({regY:-21,scaleY:0.73,x:229,y:260.2},0).to({scaleY:0.89,x:221,y:242},11).wait(167));

	// grass2
	this.instance_8 = new lib.grass2();
	this.instance_8.setTransform(226,252.4,0.893,0.893,-7.5,0,0,9.1,-45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:9,scaleY:0.95,rotation:0,skewX:11,skewY:-7.3,x:230.5,y:257.6},37).to({regX:8.9,scaleY:0.96,skewX:13.5,skewY:-7.5,x:247.3,y:261.6},5).to({scaleY:0.95,skewX:11.1,skewY:-7.3,x:192.3,y:257.7},3).to({regX:9.1,scaleY:0.89,rotation:-7.5,skewX:0,skewY:0,x:226,y:252.4},24).to({regX:8.9,scaleY:0.96,rotation:0,skewX:13.5,skewY:-7.5,x:247.3,y:261.6},36,cjs.Ease.get(-1)).to({regX:9.1,scaleY:0.89,rotation:-7.5,skewX:0,skewY:0,x:226,y:252.4},21).to({regX:8.9,scaleY:0.96,rotation:0,skewX:13.5,skewY:-7.5,x:247.3,y:261.6},36).to({regX:9.1,scaleY:0.89,rotation:-7.5,skewX:0,skewY:0,x:226,y:252.4},21).to({regX:8.9,scaleY:0.96,rotation:0,skewX:13.5,skewY:-7.5,x:247.3,y:261.6},36).to({regX:9.1,scaleY:0.89,rotation:-7.5,skewX:0,skewY:0,x:226,y:252.4},21).wait(16));

	// bg
	this.instance_9 = new lib.bg("synched",0);
	this.instance_9.setTransform(150,125.4,0.893,0.893,0,0,0,168,140);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(103).to({startPosition:103},0).to({scaleX:2.62,scaleY:2.62,y:125.5,startPosition:112},11).wait(142));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.8,91.4,611.2,382.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;