var globalData = [];

var currPage = 0;

// H1
const h1Ele = document.createElement('h1');

h1Ele.innerText = 'Song of Ice and Fire';

h1Ele.id = 'title';

// paragraph
const pELe = document.createElement('p');

pELe.innerText = 'Displaying data for 10 books';

pELe.id = 'description';

// Main DIV
const mainDiv = document.createElement('div');

mainDiv.className = 'table-responsive';

// table
const tableEle = document.createElement('table');

tableEle.className = 'table table-bordered';
tableEle.id = 'table'

// thead
const theadEle = document.createElement('thead');
theadEle.className = 'table table-bordered table-dark';

// tr
const trEle = document.createElement('tr');

['ISBN', 'Name', 'Author', 'Pages', 'Publisher', 'Released', 'Characters'].forEach((columnName) => {
  // th
  const thEle = document.createElement('th');
  thEle.innerText = columnName;
  trEle.appendChild(thEle);
})

theadEle.appendChild(trEle);

// tbody
const tbodyEle = document.createElement('tbody');

tableEle.append(theadEle, tbodyEle);

mainDiv.appendChild(tableEle);

// btns DIV
const btnsDiv = document.createElement('div');

btnsDiv.className = 'd-flex justify-content-center';
btnsDiv.id = "buttons";


const prevBtn = document.createElement('button');
// const oneBtn = document.createElement('button');
// const twoBtn = document.createElement('button');
// const threeBtn = document.createElement('button');
const nextBtn = document.createElement('button');

prevBtn.className = 'btn btn-dark'
prevBtn.innerText = 'Previous'
prevBtn.style.marginRight= '3px'
// oneBtn.innerText = '1';
// oneBtn.className = 'btn btn-dark '
// oneBtn.style.marginRight= '3px'
// twoBtn.innerText = '2';
// twoBtn.className = 'btn btn-dark '
// twoBtn.style.marginRight= '3px'
// threeBtn.innerText = '3';
// threeBtn.className = 'btn btn-dark '
// threeBtn.style.marginRight= '3px'
nextBtn.innerText = 'Next';
nextBtn.className = 'btn btn-dark '

btnsDiv.append(prevBtn,nextBtn);

document.body.style.textAlign = 'center'
document.body.append(h1Ele, pELe, mainDiv, btnsDiv);



//logic


const getBooks = async () => {
    try {
      const response = await fetch('https://www.anapioficeandfire.com/api/books'); // promise got resolved and passed to the next line
      console.log(response);
  
      const books = await response.json();
     
      console.log(books);
      globalData=books;
      


      books.slice(0, 5).forEach(({ isbn, name, authors, numberOfPages, publisher, released, characters}) => {
        // tr
        const innerTr = document.createElement('tr');
    
        // tds
        const innerTdISBN = document.createElement('td');
        innerTdISBN.innerText = isbn;
        const innerTdName = document.createElement('td');
        innerTdName.innerText = name;
        const innerTdAuth = document.createElement('td');
        innerTdAuth.innerText = authors;
        const innerTdPage= document.createElement('td');
        innerTdPage.innerText = numberOfPages;
        const innerTdPub= document.createElement('td');
        innerTdPub.innerText = publisher;
        const innerTdRelease= document.createElement('td');
        innerTdRelease.innerText = released;
        const innerTdChar= document.createElement('td');
        innerTdChar.innerText = characters[0];
    
        innerTr.append(innerTdISBN, innerTdName, innerTdAuth, innerTdPage, innerTdPub, innerTdRelease, innerTdChar);
    
        tbodyEle.appendChild(innerTr);
      })
    } catch (err) {
        console.log(err)
      }


}

getBooks();



//Core function Next Data
const showNextSetOfData = () => {

  tbodyEle.innerHTML = '';

  currPage++;

  const startIndex = currPage * 5;

  const endIndex = (currPage * 5) + 5;

  globalData.slice(startIndex, endIndex).forEach(({ isbn, name, authors, numberOfPages, publisher, released, characters }) => {
    // tr
    const innerTr = document.createElement('tr');

    // tds
    const innerTdISBN = document.createElement('td');
        innerTdISBN.innerText = isbn;
        const innerTdName = document.createElement('td');
        innerTdName.innerText = name;
        const innerTdAuth = document.createElement('td');
        innerTdAuth.innerText = authors;
        const innerTdPage= document.createElement('td');
        innerTdPage.innerText = numberOfPages;
        const innerTdPub= document.createElement('td');
        innerTdPub.innerText = publisher;
        const innerTdRelease= document.createElement('td');
        innerTdRelease.innerText = released;
        const innerTdChar= document.createElement('td');
        innerTdChar.innerText = characters[0];
    
        innerTr.append(innerTdISBN, innerTdName, innerTdAuth, innerTdPage, innerTdPub, innerTdRelease, innerTdChar);
    tbodyEle.appendChild(innerTr);

  });
}

//Core function Previous Data
const showPrevSetOfData = () => {

    tbodyEle.innerHTML = '';
  
    currPage--;
  
    const startIndex = currPage * 5;
  
    const endIndex = (currPage * 5) + 5;
  
    globalData.slice(startIndex, endIndex).forEach(({ isbn, name, authors, numberOfPages, publisher, released, characters }) => {
      // tr
      const innerTr = document.createElement('tr');
  
      // tds
      const innerTdISBN = document.createElement('td');
          innerTdISBN.innerText = isbn;
          const innerTdName = document.createElement('td');
          innerTdName.innerText = name;
          const innerTdAuth = document.createElement('td');
          innerTdAuth.innerText = authors;
          const innerTdPage= document.createElement('td');
          innerTdPage.innerText = numberOfPages;
          const innerTdPub= document.createElement('td');
          innerTdPub.innerText = publisher;
          const innerTdRelease= document.createElement('td');
          innerTdRelease.innerText = released;
          const innerTdChar= document.createElement('td');
          innerTdChar.innerText = characters[0]; 
      
          innerTr.append(innerTdISBN, innerTdName, innerTdAuth, innerTdPage, innerTdPub, innerTdRelease, innerTdChar);
      tbodyEle.appendChild(innerTr);
  
    });
  }

prevBtn.addEventListener('click',showPrevSetOfData);
nextBtn.addEventListener('click', showNextSetOfData); 
