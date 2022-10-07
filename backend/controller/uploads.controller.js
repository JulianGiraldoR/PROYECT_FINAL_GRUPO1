// carga archivos en la carpeta uploads

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

exports.upload = upload.single('myFile')

exports.uploadFile = (req, res) => {
    res.send({ data: 'the file was uploaded successfully' })
}