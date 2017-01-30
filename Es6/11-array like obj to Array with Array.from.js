
// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <title></title>
//   </head>
//   <body>
//     Well hey there!!!
//     <ul>
//     	<li class="products">15.99</li>
//     	<li class="products">7.99</li>
//     	<li class="products">32.99</li>
//     	<li class="products">24.99</li>
//     	<li class="products">5.99</li>
//     </ul>
//   </body>
// </html>

const prods = Array.from(document.querySelectorAll('.products'))
prods
 .filter(p => parseFloat(p.innerHTML)<10)
 .forEach(p=>p.style.color = 'red')