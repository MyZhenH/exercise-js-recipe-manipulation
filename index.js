//******* Exercises on DOM Manipulation Part 1 *******

//1. What is the name of the recipe?

const recipeName = document.querySelector("#recipe-name");

const nameOfTheRecipe = recipeName.innerText; //Alternativ 1 - innerText
console.log(`Recipe name: ${nameOfTheRecipe}`);

const name = recipeName.textContent; //Alternativ 2 - textContent gives the content of the element.
console.log(`Recipe name: ${name}`);

//2. What HTML tag is used to display the Recipe name?

// const recipeName = document.querySelector("#recipe-name"); //Redan definierad
const htmlTagOnRecipe = recipeName.tagName; //Note: tagName returns the HTML tag of the element.
console.log(`HTML tag: ${htmlTagOnRecipe}`);


//3. What is the font size of the paragraph tag with the class "description".

const classDescription = document.querySelector(".description");
const fontSizeOnClassDescription = window.getComputedStyle(classDescription); //window.getComputedStyle() to get the computed font size of an element.
const fontSize = fontSizeOnClassDescription.fontSize;
console.log(`Font size: ${fontSize}`);

//4. What is the value of the alt atrribute on the image?

const image = document.querySelector(".image-container img");
const altText = image.getAttribute("alt");
console.log(`Value of alt: ${altText}`);


//5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:
/*{
  url: string
  height: number,
  width: number,
}*/

//6. How many ingredients has the paste?

const paste = document.querySelector(".ingredients-list-paste");

const numberOfPaste = paste.children.length;
console.log(`It has ${numberOfPaste} ingredienser`);


//7. Which is the forth element in the list containing the ingredients for the paste?

// const paste = document.querySelector(".ingredients-list-paste"); // redan definierad
const theFourthIngredient = paste.children[3];
const ingredient = theFourthIngredient.textContent;
console.log(`the forth ingredient is: ${ingredient}`);

//8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:
/*{
    order: number;
    text: instruction;
  }*/

