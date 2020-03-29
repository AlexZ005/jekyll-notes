//script by Sunny S.M from here https://stackoverflow.com/questions/11351135/create-ul-and-li-elements-in-javascript
(function(){
        var ul = document.createElement('ul');
        ul.setAttribute('id','proList');


var array = menu.innerHTML.split("\n");

var filtered = array.filter(function(str) {
    return /\S/.test(str);
});

productList = filtered.map(function(e){return e.trim();});

        document.getElementById('renderList').appendChild(ul);
        productList.forEach(renderProductList);

        function renderProductList(element, index, arr) {
            var li = document.createElement('li');
            li.setAttribute('class','item');

            ul.appendChild(li);

            li.innerHTML=li.innerHTML + element;
        }
    })();
	
	
	


