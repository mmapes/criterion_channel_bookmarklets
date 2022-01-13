// Criterion Channel Javascript
// Visit your own list page https://www.criterionchannel.com/my-list
// Scroll down and make sure you keep clicking Show More until you have them all

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


sortShortToLong();

// compiled
function sortShortToLong(){const ms=document.getElementsByClassName("item-type-video"),mslength=ms.length,nodesAndLengths=[];regex=/(\d+:)?\d+:\d+/;for(var i=mslength-1;i>=0;i--){const matches=ms[i].textContent.match(regex);let duration=matches[0];const hours=matches[1];duration&&!hours&&(duration="0:"+duration),duration?nodesAndLengths.push({node:ms[i],length:duration}):nodesAndLengths.push({node:ms[i],length:0})}const ourElement=nodesAndLengths,ourParent=ms[0].parentElement;nodesAndLengths.sort((a,b)=>a.length<b.length?-1:a.length>b.length?1:0),removeAllChildNodes(ourParent);for(const nl of nodesAndLengths)ourParent.appendChild(nl.node)}function removeAllChildNodes(parent){for(;parent.firstChild;)parent.removeChild(parent.firstChild)}sortShortToLong();
