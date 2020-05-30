import utils from '../helpers/utils.js'
import pushBear from '../helpers/data/bearData.js'
import card from '../components/card.js'

const addBear = (e) => {
  e.preventDefault();
  card.addToBears();
}

const createForm = () => {

  let domString = '';

  domString += `
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1" class="headingForm">Bears Enter Here</label>
      <input class="form-control form-bar one" id="bearType" aria-describedby="emailHelp" placeholder="Your Bear">
      <input class="form-control form-bar two" id="bearImg" aria-describedby="emailHelp" placeholder="Bear Url Here">
    </div>
    <button type="submit" class="btn btn-primary" id="add-to-bear">Submit</button>
  </form>
  `;

  utils.printToDom('#form-bear', domString)
  $('body').on('click', '#add-to-bear', addBear)
}

export default { createForm }
