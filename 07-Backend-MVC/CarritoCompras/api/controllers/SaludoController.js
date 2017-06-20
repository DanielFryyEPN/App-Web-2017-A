module.exports = {
    welcome: function (req, res) {
        // POST
        if (req.method == "POST")
            return res.json({ saludo: "Hello" });
        else
            return res.send("Error");
    },
    bienvenido: function (req, res) {
        //PUT
        if (req.method == "PUT")
            return res.json({ saludo: "Hello" });
        else
            return res.send("Error");
    }
};
