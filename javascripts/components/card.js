import utils from '../helpers/utils.js'
import bearData from '../helpers/data/bearData.js';

const addToBears = (bear) => {
bearData.addBears(bear);
createCards();
}

const createCards = () => {

  const getBears = bearData.getBear()

  let domString = '';

  for (let i = 0; i < getBears.length; i++) {
    domString += `
      <div class="card" style="width: 18rem;">
        <h5 class="card-title">${getBears[i].type}</h5>
        <img class="card-img-top bearImg" src="${getBears[i].img}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    `
  }

  utils.printToDom('#cards-bear', domString)
}

// ${getBears[i].type}

export default { createCards, addToBears }
