const {Schema,mongoose} = require("mongoose")

const PatientSchema = new Schema ({
    patientname: {
        type: String,
        required: [true,'Patient is required'],
        unique: true
    },
    dni: {
        type: String,
        required: [true,'DNI is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true,'Password is required'],
        unique: true
    },
    
    adress: {
        type: String,
        required: [true,'Adress is required ']
    },
    phone: {
        type: String,
        required: [true,'Phone is required ']
    },
    birthday: {
        type: String,
        required: [true,'Date of birth is required ']
    },
    sex: {
        type: String,
        required: [true,'Sex is required ']
    },
    socialwork: {
        type: String,
        required: [true,'Social work is required ']
    },
    numberAffiliate: {
        type: String,
        required: [true,'NumberAffiliate is required']
    },
    role : {
        type: String,
        default: 'USER_ROLE',
        enum: ['ADMIN_ROLE','PATIENT_ROLE']
    },
    isActive : {
        type:Boolean,
        default : true
    },
    createAt: {
        type :Date,
        default:Date.now()
    }

})

const PatientModel = mongoose.model('Patient', PatientSchema);
module.exports = PatientModel;