let quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
let substring = 'green eggs and ham.';

/*Retrieve the length of the quote, and store it in a variable called quoteLength.*/
let quoteLength = quote.length;
/*Find the index position where substring appears in quote, and store that value in a  variable called index.*/

let index = quote.indexOf(substring);
/*Use a combination of the variables you have and available string properties/methods to trim down the original 
quote to "I do not like green eggs and ham.", and store it in a variable called revisedQuote.*/

let revisedQuote = quote.substr(index-index, index) + substring;


section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `The quote is ${ quoteLength } characters long.`;
let para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);

/* How to convert to lower and upper case. And how to capitalize*/
const list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
  let input = cities[i];
  let lowerCase = input.toLowerCase();
  let firstLetter = lowerCase.slice(0,1).toUpperCase();
  lowerCase = lowerCase.slice(1)
  result = firstLetter + lowerCase;

  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}

/* How to cut strings and adjust them*/
const list = document.querySelector('.output ul');
list.innerHTML = '';
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let i = 0; i < stations.length; i++) {
  let input = stations[i];

  let code = input.slice(0,3);
  let index = input.indexOf(';');
  let name = input.substr(index + 1, input.length)
  input = `${code}: ${name} `

  let result = input;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
