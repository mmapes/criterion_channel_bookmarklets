// Criterion Channel Javascript
// Visit your own list page https://www.criterionchannel.com/my-list
// Scroll down and make sure you keep clicking Show More until you have them all

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

pickAMovie();

// compiled
// Criterion Channel Javascript
// Visit your own list page https://www.criterionchannel.com/my-list
// Scroll down and make sure you keep clicking Show More until you have them all

function removeAllChildNodes(parent){for(;parent.firstChild;)parent.removeChild(parent.firstChild)}function pickAMovie(){const ms=document.getElementsByClassName("item-type-video"),mslength=ms.length,ourNumber=getRandomInt(0,mslength),ourElement=ms[ourNumber],ourParent=ourElement.parentElement;console.log(ourElement.textContent.replaceAll(/\s/g," ")),removeAllChildNodes(ourParent),ourParent.appendChild(ourElement)}function getRandomInt(min,max){return min=Math.ceil(min),max=Math.floor(max),Math.floor(Math.random()*(max-min)+min)}pickAMovie();

// compiled