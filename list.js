window.onload = function() {
// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];
var newOl, newUl, newLi, newUlTemp;

newOl = document.createElement("ol");
document.getElementById("list1").appendChild(newOl);
for  (var i = 0; i < fruits.length; i++) {
    newLi = document.createElement("li");
    newLi.innerHTML = fruits[i];
    newOl.appendChild(newLi);
}
newUl = document.createElement("ul");
    document.getElementById("list2").appendChild(newUl);
    for (var i = 0; i < directory.length; i++) {
        newLi = document.createElement("li");
        newLi.innerHTML = directory[i].name;
        newUl.appendChild(newLi);

        if (directory[i].type === "directory") {
            newUlTemp = document.createElement("ul");
            newLi.appendChild(newUlTemp);
            
            for (var j = 0; j < directory[i].files.length; j++) {
                newLi = document.createElement("li");
                newLi.innerHTML = directory[i].files[j].name;
                newUlTemp.appendChild(newLi);
            }
        }
    }
};












