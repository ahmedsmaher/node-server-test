const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('scremIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMsg: 'Welcome to Homepage',
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
    });
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'wrong url'
    })
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        welcomeMsg: 'Welcome to projects page'
    });
});

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});

// const express = require('express');
// const hbs = require('hbs');
// const fs = require('fs');

// var app = express();

// hbs.registerPartials(__dirname + '/views/partials');

// app.set('view engine', 'hbs');

// app.use((req, res, next) => {
//    var now = new Date().toString();
//    var log = `${now}: ${req.method} ${req.url}`;
   
//    console.log(log);
//    fs.appendFile('sever.log', log + '\n', (err) => {
//        if(err) {
//            console.log('Unable to append to server log');
//        }
//    });
//    next();
// });

// // app.use((req, res, next) => {
// //     res.render('maintinance.hbs');
// // });

// app.use(express.static(__dirname + '/public'));

// hbs.registerHelper('getCurrentYear', () => {
//    return new Date().getFullYear()
// });

// hbs.registerHelper('scremIt', (text) => {
//    return text.toUpperCase();
// });

// app.get('/', (req, res) => {
//   // res.send('<h1>Hello Express</h1>');
// //   res.send({
// //     name: 'Ahmed',
// //     likes: [
// //         'coding',
// //         'friends'
// //     ]
// //   });
//     res.render('home.hbs', {
//         pageTitle: 'Home Page',
//         welcomeMsg: 'Welcome to Homepage'
//     });
// });

// app.get('/about', (req, res) => {
//    res.render('about.hbs', {
//     pageTitle: 'About Page'
//    });
// });

// app.get('/bad', (req, res) => {
//     res.send({
//         errMsg: 'unable to fulfill that request'
//     });
// });

// app.listen(3000, () => {
//     console.log('server is up at port 3000');
// });