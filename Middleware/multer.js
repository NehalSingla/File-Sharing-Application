var multer=require('multer');
var path = require('path')


function checkExt(file, cb) {
    //let fileExts = ['.png', '.jpg', '.jpeg', '.gif', '.pdf']
    //let isAllowedExt = fileExts.includes(file.originalname.split('.')[1].toLowerCase());
      var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.pdf') {
            return cb(new Error('Error: File type not allowed!'))
        }
        cb(null, true)
    }
    // if(isAllowedExt){
    //     return cb(null ,true) 
    // }
    // else{
    //    cb('Error: File type not allowed!')
    // }


// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public/uploads/')
//     },
//     filename: function (req, file, cb) {
//       var photoname =file.originalname;
//       cb(null, photoname)
//     }
// })
var storage=multer.diskStorage({
    destination:'./public/uploads/',
    filename:function(req,file,cb){
        cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
    }
});

exports.upload = multer({ storage: storage ,
    fileFilter: function (req, file, cb) {
    checkExt(file, cb);   
    }
}).array('myFiles')

exports.uploadUserImage = multer({ storage: storage ,
    fileFilter: function (req, file, cb) {
    checkExt(file, cb);   
    }
}).single('userFile')