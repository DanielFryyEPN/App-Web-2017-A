/**
 * Created by danie on 6/19/2017.
 */
declare let module;
module.exports = {
  welcome: (req, res) => {
    // POST
    if(req.method == "POST")
      return res.json({saludo: "Hello"});
    else
      return res.send("Error");
  },
  bienvenido: (req, res) => {
    //PUT
    if(req.method == "PUT")
      return res.json({saludo: "Hello"});
    else
      return res.send("Error");
  }
};
