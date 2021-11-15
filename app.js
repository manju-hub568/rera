const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

require('./db/dbcon');

const Rera = require('./models/reras');
const Pin = require('./models/pins');

app.get('/rera_dataset', async (req, res) => {
    try {
         const sData = await Rera.find();
         res.status(201).send(sData);
    } catch (e) {
         res.status(400).send(e);
    }
 });

 // /v1/landdata/rera

 app.post('/v1/landdata/rera', async (req,res) => {
      try {

           const {project_name,project_type,state,district,locality} = req.body;
// if(project_name !== '' && project_type !== '' && state !== '' && district !== '' && locality !== '') {
//            const proj_Data = await Rera.find({
//                 $or: [
//                      {["Project Name"]:project_name},
//                      {["Project Type"]:project_type},
//                      {["State/UT"]:state},
//                      {["District"]:district},
//                      {["locality"]:locality}
//                 ]
//            }).limit(1);
//            res.status(201).send(proj_Data);
//           } else {
               const proj_Data = await Rera.find({
                    $or: [
                         {["Project Name"]:project_name},
                         {["Project Type"]:project_type},
                         {["State/UT"]:state},
                         {["District"]:district},
                         {["locality"]:locality}
                    ]
               });
               res.status(201).send(proj_Data);               
//           }
      } catch (e) {
           res.status(400).send(e);
      }
 });

// /v1/enteries/rera/

app.post('/v1/enteries/rera/', async (req,res) => {
     try {
          const {pin} = req.body;
          const PinCode = await Pin.find({["Pin Code"]:pin});
          res.status(201).send(PinCode);
     } catch (e) {
          res.status(401).send(e);
     }
})
 
app.listen(port, () => {
    console.log(`connected at ${port}`);
});
