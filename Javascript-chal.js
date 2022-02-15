

/* JavaScript:
Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.

Examples
getHashTags("How the Avocado Became the Fruit of the Global Trade")
--> ["#avocado", "#became", "#global"]

getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
--> ["#christmas", "#probably", "#will"]

getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
--> ["#surprise", "#parents", "#fruit"]

getHashTags("Visualizing Science")
--> ["#visualizing", "#science"]

*/


function getHashTags(phrase) {

let phraseSplit = phrase.trim().split(" ")
console.log(phraseSplit);

let phraseSorted = phraseSplit.sort((a,b) => b.length - a.length)
console.log(phraseSorted);


let phraseMapped = phraseSorted.map(e => {
return "#"+e
})
console.log(phraseMapped);


return phraseMapped.slice(0,3);
}
