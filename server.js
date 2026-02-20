const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.set('view engine', 'ejs');
app.set('views', __dirname);

const members = [
    { 
        name: "Токаренко Олександра", 
        group: "ІС-43", 
        course: "2", 
        faculty: "Факультет інформатики та обчислювальної техніки", 
        department: "ІСТ", 
        form: "Денна", 
        specialty: "126 - Інформаційні системи та технології",
        educationalProgram: "Інформаційні управляючі системи та технології",
        age: 19, 
        photo: "/assets/photo_2026-02-17_11-31-15.jpg" 
    },
    { 
        name: "Либа Марина", 
        group: "ІС-43", 
        course: "2", 
        faculty: "Факультет інформатики та обчислювальної техніки", 
        department: "ІСТ", 
        form: "Денна", 
        specialty: "126 - Інформаційні системи та технології",
        educationalProgram: "Інформаційні управляючі системи та технології",
        age: 18, 
        photo: "/assets/photo_2026-02-17_11-26-19.jpg" 
    },
    { 
        name: "Прокошина Карина", 
        group: "ІС-41", 
        course: "2", 
        faculty: "Факультет інформатики та обчислювальної техніки", 
        department: "ІСТ", 
        form: "Денна", 
        specialty: "126 - Інформаційні системи та технології",
        educationalProgram: "Інформаційні управляючі системи та технології",
        age: 19, 
        photo: "/assets/photo_2026-02-17_11-21-35.jpg" 
    },
    { 
        name: "Стяглюк Анна", 
        group: "ІС-41", 
        course: "2", 
        faculty: "Факультет інформатики та обчислювальної техніки", 
        department: "ІСТ", 
        form: "Денна", 
        specialty: "126 - Інформаційні системи та технології",
        educationalProgram: "Інформаційні управляючі системи та технології",
        age: 19, 
        photo: "/assets/photo_2026-02-17_11-12-56.jpg" 
    }
];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/member/:id', (req, res) => {
    const id = parseInt(req.params.id) - 1;
    if (id >= 0 && id < members.length) {
        res.render('member', { member: members[id] });
    } else {
        res.redirect('/');
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
