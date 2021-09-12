
const express = require("express");
const db = require("./db.json")
const bodyParser = require("body-parser")

const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/users", (req, res) => {
    res.send(200, {
        result: db
    });
});

app.get("/users/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.send(400, {
            result: "Geçersiz Değer"
        })
    }
    else {
        const user = db.find(x => x.id == req.params.id);
        if (user) {
            res.send(200, {
                result: user
            })
        }
        else {
            res.send(404, {
                result: "Kullanıcı Bulunamadı"
            })
        }

    }
});

app.post("/users", (req, res) => {
    const saveData = {
        id: new Date().getTime(),
        full_name: req.body.full_name,
        country: req.body.country,
        email: req.body.email,
        created_at: new Date()

    }
    db.push(saveData);
    res.send(saveData);
});

app.patch("/users/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.send(400, {
            result: "Geçersiz Değer"
        })
    }
    else {
        const user = db.find(x => x.id == req.params.id);
        if (user) {
            Object.keys(req.body).forEach(key=>{
                user[key] = req.body[key]
            });

            res.send(200, {
                result: user
            })
        }
        else {
            res.send(404, {
                result: "Kullanıcı Bulunamadı"
            })
        }

    }
});

app.delete("/users/:id", (req, res) => { 
    if (isNaN(req.params.id)) {
        res.send(400, {
            result: "Geçersiz Değer"
        })
    }
    else {
        const userIndex = db.findIndex(x => x.id == req.params.id);
        if (userIndex > -1) {
            db.splice(userIndex,1);
            res.send(200, {
                result: "Kullanıcı Bilgisi Silindi."
            })
        }
        else {
            res.send(404, {
                result: "Kullanıcı Bulunamadı"
            })
        }

    }
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Sunuçu Çalışıyor.")
});