/* Make sure you can print an invoice. And add totals. */

const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1 store data in array called products
     products = ['Underpants:6.99', 'Socks:5.99', 'T-shirt:14.99', 'Trousers:31.99',  'Shoes:23.99'];

for (let i = 0; i < products.length; i++) { // number 2 find a good loop
  // number 3 store the name/price in seperate varables
    input = products[i];
    index = input.indexOf(':');
    name = input.slice(0, index);
    price = Number(input.slice(index + 1, input.length));


  // number 4 add a total count
  total += price;
  
  // number 5 display the correct information * Underpants — $6.99
  let itemText = name + ' — $' + price;
  
  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);

// Search engine 5 words

const list2 = document.querySelector('.output-2 ul');
const searchInput = document.querySelector('.output-2 input');
const searchBtn = document.querySelector('.output-2 button');

list2.innerHTML = '';

let myHistory = [];

searchBtn.onclick = function() {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1
    myHistory.unshift(searchInput.value);
    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list2.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for (let i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      const listItem2 = document.createElement('li');
      listItem2.textContent = itemText;
      list2.appendChild(listItem2);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2
      myHistory.shift();

    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}
