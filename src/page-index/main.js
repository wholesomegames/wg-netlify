// import 'normalize.css';

import '../style.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

if (document.readyState !== 'loading')
    init();
else
    document.addEventListener('DOMContentLoaded', init);

function init() {

}


randomizeGames();

/*

2, 24
5, 22
8, 20
11, 18
14, 16
17, 14
20, 12
23, 10
26, 8
29, 6
32, 4
35, 2

*/

function randomizeGames() {
    let stack = Array.from(document.querySelectorAll('.game-container'));
    shuffle(stack);
    let rows = [];

    // let groups = getGroups(stack.length);

    let group = [8, 20];

    let w2 = group[0];
    let w3 = group[1];

    for(let i = 0; i < w2; i++) {
        rows.push(stack.splice(0, 2));
    }

    for(let i = 0; i < w3; i++) {
        rows.push(stack.splice(0, 3));
    }

    shuffle(rows);

    let frag = document.createDocumentFragment();
    rows.forEach(row => {
        let div = document.createElement('div');
        div.className = `game-grid x${row.length}`;
        row.forEach(node => {
            div.appendChild(node);
        });
        frag.appendChild(div);
    });

    let container = document.getElementById('games');
    container.innerHTML = '';
    container.appendChild(frag);
}

function getGroups(n) {
    let gropus = [];
    let x2 = 0

    while(x2 < n) {
        let x3 = n - x2
        if(x3 % 3 == 0)
            groups.push([x2, x3]);

        x2 += 2
    }

    return groups;
}

function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}