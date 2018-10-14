window.onload = function() {
    // Data for the "HTML Tables" Page
    var users = [
        {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
        {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
        {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
        {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
        {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
    ];

    var newTable, newTr, newTh, newTd, newA;

    // create table
    newTable = document.createElement("table");
    newTable.style = "border:1px solid;";
    newTable.border = "1";
    document.getElementById("table2").appendChild(newTable);

    // create table header
    newTr = document.createElement("tr");
    newTable.appendChild(newTr);
    newTh = document.createElement("th");
    newTh.innerHTML = "First Name";
    newTr.appendChild(newTh);
    newTh = document.createElement("th");
    newTh.innerHTML = "Last Name";
    newTr.appendChild(newTh);
    newTh = document.createElement("th");
    newTh.innerHTML = "Age";
    newTr.appendChild(newTh);
    newTh = document.createElement("th");
    newTh.innerHTML = "Email";
    newTr.appendChild(newTh);

    // create table body
    for (var i = 0; i < users.length; i++) {
        newTr = document.createElement("tr");
        newTable.appendChild(newTr);

        for (var j in users[i]) {
            newTd = document.createElement("td");

            if (j !== "email") {
                newTd.innerHTML = users[i][j];
            } else {
                newA = document.createElement("a");
                newA.href = "mailto:" + users[i][j];
                newA.innerHTML = users[i][j];
                newTd.appendChild(newA);
            }

            newTr.appendChild(newTd);
        }
    }
}


























