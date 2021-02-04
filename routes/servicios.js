const { Router } = require('express');
const router = Router();

router.get("/", (req,res)=>{
	res.render("index");
});

let gatos = [
    {id: 0, nombre: 'Domestico', img:"gato1.jpg",comida_favorita:'atun', edad_maxima:'3', lugar_descanso:['sofa', 'garage']},
    {id: 1, nombre: 'guiña', img:"gato2.jpg",comida_favorita:'roedores', edad_maxima:'5', lugar_descanso:['madriguera', 'copas de arboles']},
    {id: 2, nombre: 'leon', img:"gato3.jpg", comida_favorita:'cebras', edad_maxima:'8', lugar_descanso:['arboles', 'arbustos']}
];

// esta es la forma de pasar los daros del arreglo a un for en los temples (erchivo.ejs)
router.get("/cats",(req,res)=>{
    res.render('gatos',{gatos: gatos});
 });
// esta es la forma de pasar datos especificos con el uso de un indicador unico id o codigo que diferencie 
router.get("/:id",(req, res) => {
// hacer salida por id    
    const id = req.params.id;
//se pasan datos del arreglo de gatos pero con la identificacion unica definida, en este caso id
   
    res.render('detalles', {minino: gatos[id]});
   
});






module.exports = router;
