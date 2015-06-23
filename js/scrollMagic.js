console.log("ScrollMagic is installed");

// init controller
var controller = new ScrollMagic.Controller();

var tempo = "30%"



var introPin = new ScrollMagic.Scene({triggerElement: "#introtrigger" , duration: "200%"})
						.setPin("#intro", {pushFollowers: false})
						.offset(100) 
						.addIndicators({name: "introPin (duration: 100%)"}) 
						;

					

var introMoveQuill = new ScrollMagic.Scene({triggerElement: "#introtrigger", duration: "10%"})
					.setTween("#introQuill", {
						opacity: 1,
						marginRight: "40%"})
					.offset(200) 
					.addIndicators({name: "introMoveQuill (duration: 10%)"}) 
					;





// Dawn
var dawnOffSet = "300%";
var dawnPin = new ScrollMagic.Scene({triggerElement: "#dawntrigger" , duration: "80%"})
						.setPin("#dawn", {pushFollowers: true})
						.offset(dawnOffSet)
						.addIndicators({name: "dawnPin (duration: 80%)"}) 
						;

var dawnMoveQuill = new ScrollMagic.Scene({triggerElement: "#dawntrigger", duration: "10%"})
					.setTween("#dawn * #quill", {
						opacity: 1,
						marginRight: "40%"})
					.offset(dawnOffSet + tempo)
					.addIndicators({name: "moveQuill (duration: 80%)"}) 
					;

var dawnBodyBackground = new ScrollMagic.Scene({triggerElement: "#dawntrigger" })
					.setClassToggle("body", "dawnClass") // add class toggle
					.addIndicators({name: "dawnBodyBackground (duration: 80%)"}) 
					// .addTo(controller)
					;




// Tripes
var tribesOffSet = "300%";
var tribesBodyBackground = new ScrollMagic.Scene({triggerElement: "#tribestrigger"})
					.removeClassToggle("body")
					.setClassToggle("body", "tribesClass")
					.addIndicators({name: "tribesBodyBackground (duration: 80%)"}) 
					// .addTo(controller)
					;
var tribesPin = new ScrollMagic.Scene({triggerElement: "#tribestrigger" , duration: "80%"})
						.setPin("#tribes", {pushFollowers: true})
						.offset(tribesOffSet)
						.addIndicators({name: "tribesPin (duration: 80%)"}) 
						;

var tribesMoveQuill = new ScrollMagic.Scene({triggerElement: "#tribestrigger", duration: "10%"})
					.setTween("#tribes * #quill", {
						opacity: 1,
						marginRight: "40%"})
					.offset(tribesOffSet + tempo)
					.addIndicators({name: "moveQuill (duration: 80%)"}) 
					;





	controller.addScene([
				// introPin,
				// introMoveQuill,
				dawnPin,
				dawnBodyBackground,
			  	dawnMoveQuill,
			  	tribesBodyBackground,
			  	tribesPin,
			  	tribesMoveQuill,
			]);






