 /* Main Slider Active */
 $(".owl-carousel").owlCarousel({
     'items': 1,
     'loop': true,
     'autoplay': true
 });

 /*charts table*/
 var ctx = document.getElementById('myChart').getContext('2d');
 var myChart = new Chart(ctx, {
     type: 'bar',
     data: {
         labels: ['January', 'February', 'March', 'April', 'May', 'June'],
         datasets: [{
             label: '# of Votes',
             data: [10, 19, 3, 5, 2, 3],
             backgroundColor: [
                 '#36cbba',
                 '#36cbba',
                 '#36cbba',
                 '#36cbba',
                 '#36cbba',
                 '#36cbba'
             ],

         }]
     },
     options: {
         scales: {
             yAxes: [{
                 ticks: {
                     beginAtZero: true
                 }
             }]
         }
     }
 });
 /*charts rounds*/

 new Chart(document.getElementById("myChart2"), {
     type: 'pie',
     data: {
         labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
         datasets: [{
             label: "Population (millions)",
             backgroundColor: ["#172A3A ", "#36cbba", "#3581b8", "#13505b", "#333333"],
             data: [2478, 5267, 734, 784, 433]
         }]
     },
     options: {
         title: {
             display: true,

         }
     }
 });


 /*Cumulative  profit*/
 var ctx = $("#myChart_profit");
 var myChart_profit = new Chart(ctx, {
     type: 'line',
     data: {
         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
         datasets: [{
             label: "2015",
             data: [10, 8, 6, 5, 12, 8, 16, 17, 6, 7, 6, 10],
             backgroundColor: [
                 '#36cbba'
             ],
         }]

     }
 });

 /*aos Animate On*/

 AOS.init();