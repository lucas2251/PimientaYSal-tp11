let menu = require("../data/platos.json")


module.exports = {
home:(req,res)=>{
    
return res.render("index",{menu})
},
menu:(req,res)=>{
    return res.render("detalleMenu")
}}