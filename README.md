# criterion_channel_bookmarklets

## Purpose

These are the features that I wish the Criterion Channel provided me. 

I wish I could sort my list from shortest to longest. Sometimes I don't have all evening and I want to see which short films are on my list.

I wish I could have a "Just Pick One" button to get me unstuck from trying to decide which movie from my list I want to see tonight.

## Enter bookmarklets

To sort your list or to pick a movie at random, all that's required is a little JavaScript. Running your own JavaScript on someone else's web site can be tricky, but bookmarklets seem like the simplest way to quickly add these features.

The bookmarklets in this project are

* Pick a Movie
* Sort By Runtime

## The URLs for your bookmarklets

### V1.0.0

* `javascript:function sortShortToLong(){const ms=document.getElementsByClassName("item-type-video"),mslength=ms.length,nodesAndLengths=[];regex=/(\d+:)?\d+:\d+/;for(var i=mslength-1;i>=0;i--){const matches=ms[i].textContent.match(regex);let duration=matches[0];const hours=matches[1];duration&&!hours&&(duration="0:"+duration),duration?nodesAndLengths.push({node:ms[i],length:duration}):nodesAndLengths.push({node:ms[i],length:0})}const ourElement=nodesAndLengths,ourParent=ms[0].parentElement;nodesAndLengths.sort((a,b)=>a.length<b.length?-1:a.length>b.length?1:0),removeAllChildNodes(ourParent);for(const nl of nodesAndLengths)ourParent.appendChild(nl.node)}function removeAllChildNodes(parent){for(;parent.firstChild;)parent.removeChild(parent.firstChild)}sortShortToLong();`

* `javascript:function removeAllChildNodes(parent){for(;parent.firstChild;)parent.removeChild(parent.firstChild)}function pickAMovie(){const ms=document.getElementsByClassName("item-type-video"),mslength=ms.length,ourNumber=getRandomInt(0,mslength),ourElement=ms[ourNumber],ourParent=ourElement.parentElement;console.log(ourElement.textContent.replaceAll(/\s/g," ")),removeAllChildNodes(ourParent),ourParent.appendChild(ourElement)}function getRandomInt(min,max){return min=Math.ceil(min),max=Math.floor(max),Math.floor(Math.random()*(max-min)+min)}pickAMovie();`

## How to install

These instructions are general. Try to follow along. In your browser, find your bookmark manager. Add a new (raw/blank) bookmark. The URL of your bookmark should be one of the two bullet points from above, starting with "javascript:...". The name of the bookmark should be "Sort Short to Long (Criterion Channel My List)" for the first bullet, and "Pick A Movie (Criterion Channel My List)" for the second. Save the new bookmark.

## How to use

Log in to your account on the Criterion Channel. [View your list](https://www.criterionchannel.com/my-list). If your list is long, scroll down and keep clicking Show More until you see everything on your list.

To trigger the new feature, find your bookmarks and click on either "Sort Short to Long (Criterion Channel My List)" or "Pick A Movie (Criterion Channel My List)".

These scripts do not do anything to your actual Criterion Channel account. They only interact with your current view of your list in your browser. If anything seems broken, simply reload your list and you're back to where you were.

