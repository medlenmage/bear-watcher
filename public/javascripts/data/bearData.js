const bears = [];

const addBears = () => {
  const boxvalue = {
    type: document.getElementById('bearType').value,
    img: document.getElementById('bearImg').value
  }
  bears.push(boxvalue)
}

const getBear = () => {
  return bears;
}

export default { addBears, getBear }
