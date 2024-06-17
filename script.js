const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', addImage);
let db = []

function addImage() {
    const text = input.value;
    const newimg = {
        img: text
    }

    db.push(newimg)
    setlocalstorage();
    fetchdata()
}

console.log(db);

function setlocalstorage() {
    localStorage.setItem('dblocal', JSON.stringify(db));
}

function getlocalstorage() {
    const data = localStorage.getItem('dblocal');
    if (!data) {
        return
    } else {
        db.push(...JSON.parse(data))
    }
}

getlocalstorage();

const grid2crawler = document.querySelector(".grid2");

function fetchdata () {
    grid2crawler.innerHTML = "";
    db.forEach(image => {
        grid2crawler.innerHTML += `
        <div class="column">
            <a href="./images/moebius/moebius1.jpg"><img src="${image.img}" alt=""></a>
            
        </div>
        `
    })
}

fetchdata();
