// Sample clothing items
const clothingOptions = {
  tops: [
    { name: "Tube Top", image: "images/tube_top.jpg" },
    { name: "New York", image: "images/new_york.jpg" },
     { name: "Red Sweater", image: "images/red_sweater.jpg" },
     { name: "Polo", image: "images/polo.jpg" },
    { name: "Red Long Sleeve", image: "images/red_sleeve.jpg" },
  ], 
  outerwear: [
    { name: "Spanish Denim", image: "images/spanish_denim.jpg" },
    { name: "Ralph Jacket", image: "images/dad_jacket.jpg" },
    { name: "Gap", image: "images/vintage_gap.jpg" },
  ],
  bottoms: [
    { name: "White Skirt", image: "images/white_skirt.jpg" },
    { name: "Light Jeans", image: "images/vintage_light.jpg" },
    { name: "Dark Jeans", image: "images/vintage_dark.jpg" },
  ], 
  shoes: [
    { name: "Sambas", image: "images/sambas.jpg" },
    { name: "White Heels", image: "images/white_heels.jpg" },
    { name: "Docs", image: "images/docs.jpg" },
    { name: "Striped Heels", image: "images/stripes.jpg" },
  ],
};



// Function to generate a random outfit
function generateOutfit() {
  const top = getRandomItem(clothingOptions.tops);
  const bottom = getRandomItem(clothingOptions.bottoms);
  const shoes = getRandomItem(clothingOptions.shoes);
  const outerwear = getRandomItem(clothingOptions.outerwear);
  // Update text and images for each category
  document.getElementById('top-name').textContent = top.name;
  document.getElementById('top-image').src = top.image;

  document.getElementById('bottom-name').textContent = bottom.name;
  document.getElementById('bottom-image').src = bottom.image;

  document.getElementById('shoe-name').textContent = shoes.name;
  document.getElementById('shoe-image').src = shoes.image;
  
  document.getElementById('outerwear-name').textContent = outerwear.name;
  document.getElementById('outerwear-image').src = outerwear.image;

  
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

document.getElementById('generate-btn').addEventListener('click', generateOutfit);


//A random item from an array
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// For the button
document.getElementById('generate-btn').addEventListener('click', generateOutfit);

