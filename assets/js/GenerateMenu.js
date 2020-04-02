(function(){

//load data
let menu = document.getElementById('menu');
var array = menu.innerHTML.split("\n")	

//remove empty (whitespace) strings
var filtered = array.filter(function(str) {
    return /\S/.test(str);
});

//remove whitespace in strings and split by forward slash
paths = filtered.map(function(e){return e.trim();});

var hierarchy = paths.reduce(function(hier,path){
    var x = hier;
    path.split('/').forEach(function(item){
        if(!x[item]){
            x[item] = {};
        }
        x = x[item];
    });
    x.path = path;
    return hier;
}, {});

var makeul = function(hierarchy, classname, idname){
    var dirs = Object.keys(hierarchy);
    var ul = '<ul';
    if(classname){
        ul += ' class="' + classname + '" id= "' + idname + '"';
    }
    ul += '>\n';
    dirs.forEach(function(dir){
        var path = hierarchy[dir].path;
        if(path){ // file
            ul += '<li class="file" data-url="' + path + '"><a href="' + path.replace(/^./g, '\/').replace(/(\.markdown|\.md)$/g,'\.html') + '">' + dir + '</a></li>\n';
        }else{
            ul += '<li class="folder">' + dir + '\n';
            ul += makeul(hierarchy[dir]);
            ul += '</li>\n';
        }
    });
    ul += '</ul>\n';
    return ul;
};

var ul = makeul(hierarchy, 'collapsibleList', 'searchableList');

document.getElementById('renderList').innerHTML = ul;
})();
