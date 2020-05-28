import utils from '../helpers/utils.js'

const createForm = () => {

  let domString = '';

  domString += `
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Bears Enter Here</label>
      <input type="email" class="form-control form-bar" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Bear">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      <input type="email" class="form-control form-bar" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Bear Url Here">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `;

  utils.printToDom('#form-bear', domString)
}

export default { createForm }
