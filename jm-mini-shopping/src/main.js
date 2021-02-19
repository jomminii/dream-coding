

// Fetch the items from the JSON file
function loadItems () {
  return fetch('data/data.json')
  .then(response => response.json()) // json으로 변환
  .then(json => json.items)
}

function updateItems(items, key, value) {
  items.forEach(item => {
    if (item[key] === value) {
      item.classList.remove('invisible');
    } else {
      item.classList.add('invisible');
    }
  })
}

function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }
  const container = document.querySelector('.items');
  console.log(container.classList)
  // updateItems(container, key, value)
  // const filtered = items.filter(item => item[key] == value)
  // displayItems(filtered)
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items))
  buttons.addEventListener('click', event => onButtonClick(event, items));
}

function createHTMLString(item) {
  return `
    <li class="item">
      <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
      <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

// main
loadItems()
.then(items => {
  displayItems(items);
  setEventListeners(items)
})
.catch(console.log);