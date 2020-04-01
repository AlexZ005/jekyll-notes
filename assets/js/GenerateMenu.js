//ToDo: nested listing

(function(){

//load data
let menu = document.getElementById('menu');
var array = menu.innerHTML.split("\n")	

//remove empty (whitespace) strings
var filtered = array.filter(function(str) {
    return /\S/.test(str);
});

//remove whitespace in strings and split by forward slash
productList = filtered.map(function(e){return e.trim();});
productList = productList.map(function(e){return e.split('/');});

//generate list and merge
var productListMerged = {};
for (var i=0; i < productList.length; i++) {
var object = {};
productList[i].reduce(function(o, s) { return o[s] = {}; }, object);
_.merge(productListMerged,object)
}


var list = [];
//print list to ul, excluded chapters.html from _includes/sidebar.html
function getDeepKeys(obj) {
    var keys = [];
		
    for(var key in obj) {
        keys.push(key);
		
        if(typeof obj[key] === "object") {
            var subkeys = getDeepKeys(obj[key]);
			subkeys = subkeys[0];
//			console.log("subkeys " + subkeys);
			//console.log("current keys " + getDeepKeys(obj[key]).length);
			if ( subkeys != "" ) {
			list.unshift("Group " + key);
//			console.log("Group " + key);
			}
			else {
			list.unshift("- " + key);
	//		console.log("- " + key);
			}
		//	console.log(list)
            keys = keys.concat(subkeys.map(function(subkey) {
                return key + "." + subkey;
            }));

        }
    }
    return [keys, list];
}

var deep = getDeepKeys(productListMerged);
list = deep[1];

console.log(list);

var ul = document.createElement('ul');
ul.setAttribute('class','collapsibleList');
list.forEach(renderProductList);
function renderProductList(element, index, arr) {
console.log(element);
var li = document.createElement('li');
ul.appendChild(li);
li.innerHTML=li.innerHTML + element;
console.log("This is " + ul);
}

console.log(ul);
document.getElementById('renderList').appendChild(ul);
        })();
	
