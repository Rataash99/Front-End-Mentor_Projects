let inputData = document.getElementById('input-data');
let outputBtn = document.getElementById('output-btn');
let listData = document.getElementById('list-data');

let url;
inputData.addEventListener('input', (e) => {
    url = e.target.value;
})
const fetchData = () => fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
.then(res => res.json())
.then((result) => {
    let ans = result.result.short_link2;
    let li = document.createElement('li');
    li.innerHTML = 
    `<p class = "url">${url}</p>
    <hr class = 'li-hr'>
    <p class = "short-url">https://www.${ans}</p>
    <button onclick = "copyText()" class = 'copy btn3'>Copy</button>`;
    listData.append(li);
})
let copyText = (e) => {
    console.log(e);
}
outputBtn.addEventListener('click',fetchData);
