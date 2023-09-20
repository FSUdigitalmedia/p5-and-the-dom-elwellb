let followMouse;
let initButton;
let dontDoThat;
let img;
let slider;

function setup() {
  followMouse = createP("You can't get rid of me");
  followMouse.position(mouseX, mouseY);
  followMouse.mouseClicked(makeRed);
  initButton = createButton("Don't Click Me");
  initButton.mousePressed(buttonPressed);

  dontDoThat = createP("You were specifically instructed NOT to do that.");
  dontDoThat.hide();

  img = createImg("/assets/ThumbsUp.jpg", "Good job for not touching the button!");
  img.position(350, 200);

  slider = createSlider(1, 50, 25);
  slider.position(250,50);
  slider.addClass("mySlider");
  img.doubleClicked(hideText);


}

function buttonPressed() {
   initButton.remove();
   dontDoThat.show();
   dontDoThat.style("font-size", "40px");
   dontDoThat.style("color", "DarkRed");
   followMouse.html("Why would you do that?");
   img.position(500, 200);
   img.attribute("src", "/assets/ThumbsDown.jpg");

}

function hideText(){
dontDoThat.hide();
followMouse.hide();
}

function draw() {

  followMouse.position(mouseX, mouseY);
  let textSize = slider.value();
  followMouse.style("font-size", textSize + "px");
  dontDoThat.style("font-size", textSize + "px");
}

function makeRed() {
  followMouse.style("color", "red");
}

/*

Some Questions:
0. What is this percent sign all about? (hint: it's "modulus")
1. Where, in the p5 reference, do we find all this DOM stuff?
2. Why is the text so large when it's just a "paragraph"?
3. "color" and "red"? Where did those come from and where 
   could you find more style attributes that could be
   changed?

Some Things to Try:
0. Make the text follow the mouse pointer
1. Make a button
2. Make the button affect the style or position of some text
3. Make a picture that shows up on the page. Does it have to
   be created in p5 or can you just place it in the HTML?
   What's the difference?
4. Can you make the position of the image change when the
   button is pressed?
5. Make a slider and have it change the text size
6. Add some CSS in style.css to make the slider huge and
   rotated 30 degrees
6. "hide" the text when the image is double-clicked
   
*/