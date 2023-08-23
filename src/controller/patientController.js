const PatientModel = require("../models/patient.models");

const addPatientController = async (req , res)=>{
   try {
     
    const {patientname,dni,password,adress,phone,birthday,sex,socialwork,numberAffiliate,role,isActive,createAt} = req.body;
    const newPatient = new PatientModel({
      patientname,
      password,
      dni,
      adress,
      phone,
      birthday,
      sex,
      socialwork,
      numberAffiliate,
      role,
      isActive,
      createAt});
    await newPatient.save();
    res.json({message:'Patient create has been succesfull'});
   } catch (error) {
      console.error(error);
      res
      .status(500)
      .json({mesage: error.message + 'Patient not creating'});
    
   } 
   
};
const getPatientController = async (req, res) => {
   try {
     const allPatient = await PatientModel.find();
     res.json(allPatient);
   } catch (error) {
     console.error(error);
     res
       .status(500)
       .json({ message: error.message + "Patient could not be accesed" });
   }
 };
 const getPatientByPatientnameController = async (req, res) => {
  try {
      const {patientname} = req.params;
    const patient = await PatientModel.findOne({ patientname})
    if (!patient) return res.status(404).json({message: `Patient  '${patientname}'not found`})
    res.json(patient);
  } catch (error) {
      console.error(error);
    res
      .status(500)
      .json({ message: error.message + "Patient could not be accesed" });
  }
};
const putPatientController = async (req, res,next) => {
  try {
    const { patientname } = req.params;
    const patient = req.body;
    let updatedPatient = await PatientModel.findOne({

  patientname});
    updatedPatient.patientname = patient.patientname;
    patientname.password = patient.password;
    await updatedPatient.save();
    res.json({message: "put API - Updated patient", updatedPatient});
  } catch (error) {
    next(error.message);

  }
};
const deletePatientByLastnameController = async (req, res) => {
  try {
      const {dni} = req.params;
      await PatientModel.deleteOne({ dni})
    res.json({message: `Patient with the DNI  ${dni} deleted`})
    
  } catch (error) {
    next(error.message);
   
  }
};

module.exports = {addPatientController,getPatientController,getPatientByPatientnameController,deletePatientByLastnameController,putPatientController}