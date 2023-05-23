let quoteList = [];
const quoteAPI = " https://api.gameofthronesquotes.xyz/v1/random/50";
console.log(quoteAPI);
const displayElm = document.getElementById("content");

const fetchData = () => {
  fetch(quoteAPI)
    .then((response) => {
      return response.json();
      console.log(response);
    })
    .then((data) => {
      quoteList = data;
      console.log(data);
    });
  // displayQuote();
};
fetchData();

const displayQuote = () => {
  let quoteString = "";
  quoteList.forEach((quote) => {
    quoteString += `
    <div class="card" style="width: 18rem">

    <div class="card-body">
      <h5 class="card-title">Quote</h5>
      <p class="card-text">
        ${quote?.sentence}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name:${quote?.character?.name}</li>
      <li class="list-group-item">House Name:${quote?.character?.house?.name}</li>
      <li class="list-group-item">${quote?.character?.house?.slug}</li>
    </ul>

  </div>`;
  });

  displayElm.innerHTML = quoteString;
};
//
