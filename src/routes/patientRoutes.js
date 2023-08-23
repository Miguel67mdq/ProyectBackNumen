const express =require('express');
const {addPatientController, getPatientController, deletePatientByLastnameController, putPatientController, getPatientByPatientnameController } = require('../controller/patientController');
const validator = require('../utils/middleware/validatorMiddleware');
//const { addUserController, getUserController, getUserByUsernameController,deleteUserByUsernameController} = require('../controller/usuarioController');
const router = express.Router();
const expressValidator = require('express-validator');

router.post('/patient', expressValidator.body('patientname')
.isString()
.isLength({min:5,max:20})
.withMessage("El paciente debe ser un string y tener entre 5 y 20 caracteres."),
expressValidator.body('password')
.matches(/^(?=.*[a-zA-Z])(?=.*\d).+$/).withMessage("El password debe contener al menos una letra y al menos un numero") 
.isString()
.isLength({min:5,max:20})
.withMessage("El password debe ser un string y tener entre 5 y 20 caracteres ."),
validator,
addPatientController)

router.get('/patient',getPatientController)
router.get('/patient/:patientname',getPatientByPatientnameController)
router.put('/patient/:patientname',putPatientController)
router.delete('/patient/:dni',deletePatientByLastnameController)


module.exports = router;