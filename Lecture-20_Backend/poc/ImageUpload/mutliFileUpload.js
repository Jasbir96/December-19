const express = require("express");
const multer = require("multer");
// single file upload
const sharp = require("sharp");
const path = require("path");
const app = express();
const fs = require("fs");
// barebone
// const upload = multer({ dest: "/public" });
// dest multer
//filter => images 
const filter = function (req, file, cb) {
  if (file.mimetype.startsWith("image")) {
    cb(null, true)
  } else {
    cb(new Error("Not an Image! Please upload an image"), false)
  }
}
//storageFilter => file=> jpg,destination
const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/raw")
  },
  filename: function (req, file, cb) {

    cb(null, `user-${Date.now()}.jpeg`)
  }
})
// ram
const upload = multer({
  storage: multerStorage,
  fileFilter: filter
})
app.use(express.json());
//  mutipart data=> everything=> image  , naming , extension => put
let multiImageHandler = upload.fields([{
  name: "Cover", maxCount: 1
}, {
  name: "images", maxCount: 3
}]);
app.post("/uploadData", multiImageHandler, uploadFile)
async function uploadFile(req, res) {
  try {
    // 
    console.log(req.files);
    await sharp(req.files.Cover[0].path).resize(2000, 1500).toFormat("jpeg").jpeg({
      quality: 90
    }).toFile(`public/final/cover.jpeg`)
    // cover
    let promiseArr = [];
    // start
    for (let i = 0; i < req.files.images.length; i++) {
      let filePromise = sharp(req.files.images[i].path)
        .resize(2000, 1500)
        .toFormat("jpeg")
        .jpeg({
          quality: 90
        }).toFile(`public/final/image${Date.now()}${i}.jpeg`);
      promiseArr.push(filePromise); 
    }
    await Promise.all(promiseArr);

    console.log("will reach after processing every image");
    // console.log(req.files.images);
    // await sharp(req.file.path)
    //   .resize(500, 500)
    //   .toFormat("jpeg")
    //   .jpeg({ quality: 30 })
    //   .toFile(`public/final/user-${Date.now()}.jpeg`)
    // // remove file 
    // fs.unlinkSync(req.file.path);
    res.status(200).json({
      status: "data uploaded successfully"
    })
  } catch (err) {
    console.log(err.message);
  }
}
// upload.array => mutiple of same type
//upload.fields=> multiple types of image
app.listen(3000, function () {
  console.log("Server is listening at port 3000");
})