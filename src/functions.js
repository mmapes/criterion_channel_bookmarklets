

function sortShortToLong()
{
    const ms = document.getElementsByClassName('item-type-video');
    const mslength = ms.length;
    const nodesAndLengths = [];
    regex = /(\d+:)?\d+:\d+/;
    for(var i = mslength - 1; i>=0; i--){
        const matches = ms[i].textContent.match(regex);
        // if there is no match for the first group of digits, prepend 0:
        let duration = matches[0];
        const hours = matches[1];

        if (duration && !hours)
        {
            duration = "0:" + duration;
        }

        if (duration)
        {
            nodesAndLengths.push( {"node": ms[i], "length": duration});
        } else {
            nodesAndLengths.push( {"node": ms[i], "length": 0});
        }
    }

    const ourElement = nodesAndLengths;
    
    const ourParent = ms[0].parentElement;
    nodesAndLengths.sort((a, b) => { if( a.length < b.length) { return -1;} if (a.length > b.length) { return 1;} return 0; });
    removeAllChildNodes(ourParent);

    for (const nl of nodesAndLengths) {
        ourParent.appendChild(nl.node);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function pickAMovie()
{
    const ms = document.getElementsByClassName('item-type-video');
    const mslength = ms.length;
    const ourNumber = getRandomInt(0, mslength);
    const ourElement = ms[ourNumber];
    const ourParent = ourElement.parentElement;

    console.log(ourElement.textContent.replaceAll(/\s/g,' '));

    removeAllChildNodes(ourParent);
    ourParent.appendChild(ourElement);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}