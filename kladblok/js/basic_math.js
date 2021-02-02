  /*Round floats*/
  
  let lotsOfDecimal = 1.766584958675746364;
  lotsOfDecimal;
  let twoDecimalPlaces = lotsOfDecimal.toFixed(2);
  twoDecimalPlaces;
  document.querySelector('.results-1').innerHTML = twoDecimalPlaces;
  document.querySelector('.input-1').innerHTML = lotsOfDecimal;

  /* Start te machine boolean */
  const btn = document.querySelector('.start-machine');
  const txt = document.querySelector('.start-machine-txt');

  btn.addEventListener('click', updateBtn);

  function updateBtn() {
    if (btn.textContent === 'Start machine') {
      btn.textContent = 'Stop machine';
      txt.textContent = 'The machine has started!';
    } else {
      btn.textContent = 'Start machine';
      txt.textContent = 'The machine is stopped.';
    }
  }


/* some math and boolean at the same time */
  let finalResult;
  let evenOddResult;

  let numb1 = 3;
  let numb2 = 3;
  let numb3 = 10;
  let numb4 = 2;

  let numb5 = numb1 + numb2;
  let numb6 = numb3 - numb4;

  finalResult = numb5 * numb6;
  evenOddResult = finalResult;


  section.innerHTML = ' ';
  let para1 = document.createElement('p');
  let finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
  para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
  let para2 = document.createElement('p');
  let evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.'
  para2.textContent = evenOddResultCheck;

  section.appendChild(para1);
  section.appendChild(para2);

/*Rounding number and convert a string to a number. Final result should be 4633,33 */

  let result = 7 + 13 / 9 + 7; // 15,44444444
  let result2 = 100 / 2 * 6; // 300

  result = result * result2; // 4633,3333
  let finalResult2 = result.toFixed(2)
  let finalNumber = Number(finalResult2);


  section.innerHTML = ' ';
  let para3 = document.createElement('p');
  para3.textContent = `Your finalResult is ${ finalResult2 }`;
  let para4 = document.createElement('p');
  let finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
  para4.textContent = finalNumberCheck;

  section.appendChild(para3);
  section.appendChild(para4);
