// Calculate Pearson's r
function calculateCorrelation(x, y) {
  return jStat.corrcoeff(x, y);
}

// Generate a random list of 12 integers from 1 to 5
function generateList() {
  newList = [];

  // Repeat 12 times
  for (let i = 0; i < 12; i++) {
    // Generate a random integer from 1 to 5
    newList.push(Math.floor(Math.random() * 5) + 1);
  }

  return newList;
}

// Generate two lists with no correlation
function generateZeroR() {
  validLists = false;

  lists = {
    x: [],
    y: [],
  };

  while (!validLists) {
    // Generate two random lists
    lists.x = generateList();
    lists.y = generateList();

    // Check if they have no correlation
    if (calculateCorrelation(lists.x, lists.y) === 0) {
      validLists = true;
    }
  }

  return lists;
}

// Get elements from the DOM
const generateButton = document.querySelector('#generate-btn');
const list1 = document.querySelector('#list-1');
const list2 = document.querySelector('#list-2');

// Create lists when generate button is clicked
generateButton.addEventListener('click', () => {
  const { x, y } = generateZeroR();
  list1.innerHTML = `x: ${x}`;
  list2.innerHTML = `y: ${y}`;

  const trace1 = {
    x,
    y,
    mode: 'markers',
  };

  const data = [trace1];

  const layout = {
    title: 'Marker Size',
    showlegend: false,
    height: 600,
    width: 600,
  };

  Plotly.newPlot('chart', data, layout, { staticPlot: true });
});
