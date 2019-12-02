var ejs = require('ejs');

var template = `
<% if (user) { %>
    <h2><%= user.name%></h2>
    <h2><%= user.age%></h2>
    <p><%= arr.join(' / '); %></p>
<% } %>
`

var arr = [1, 22, 4, 5];



var user =  {
    name: "howhow",
    age: "30"
}


var html = ejs.render(template, {user: user, arr: arr})


console.log(html)


