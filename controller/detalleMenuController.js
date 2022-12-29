let menu = require('../data/platos.json')

module.exports = {
    menu : (req, res) => {
        let id = +req.params.id
        let comida = menu.find((comi) => comi.id === id)
       
            res.render('detalleMenu',{
                comida
            });
        
    }
}