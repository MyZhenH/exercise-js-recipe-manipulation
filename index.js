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

const imageContainer = document.querySelector(".image-container img");

const imageHeight = imageContainer.height;
const imageWidth = imageContainer.width;
const imageUrl = imageContainer.src;

console.log(imageHeight);
console.log(imageWidth);
console.log(imageUrl);

const imageObj = {
  url: imageUrl,
  height: imageHeight,
  width: imageWidth,
};

console.log(imageObj);


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

const instructionsObj = [
{Order: 1,
  Text: "Smula sönder 10 stycken digistivetex och blanda sen med smöret. Bred ut det i botten av en en rund form med lösbara kanter. Det ska bli som en tjockt täcke på botten av formen."
},

{Order: 2,
  Text: "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke."
},

{Order: 3,
Text: "Vispa äggvitorna hårt med en elvisp. De är tillräckligt vispade när du kan vända upp och ner på bunken utan att det rör sig."
},

{Order: 4,
  Text: "Häll upp grädden i en mellanstor bunke. Vispa de relativ hårt. En aning hårdare en vanligt."
},

{Order: 5,
  Text: "Blanda i philadelphiaosten och vaniljsockret med äggulorna och vispa ihop."
},

{Order: 6,
  Text: "Häll nu över innehållet i bunken med äggulor över grädden. Vispa ihop på lägsta hastigheten."
},

{Order: 7,
  Text: "Häll sedan över det innehållet till bunken med äggvitorna. Blande ihop med en gaffel tills det blir en slät fluffig smet."
},

{Order: 8,
  Text: "Häll smeten i formen, smula över de resterande digistivetexen om du vill."
},

{Order: 9,
  Text: "Ställ in i frysen över natten."
},

{Order: 10,
  Text: "Servera och toppa med det du känner för."
},

];

console.log(instructionsObj);

