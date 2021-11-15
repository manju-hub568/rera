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
           if(project_name == '' && project_type == '' && state == '' && district == '' && locality == '') {
                res.status(401).send("Please Fill Any One Field")
           } else {
               const proj_Data = await Rera.find({
                    $or: [
                         {Project_Name:project_name},
                         {Project_Type:project_type},
                         {State_or_UT:state},
                         {District:district},
                         {Locality:locality}
                    ]
               });
               res.status(201).send(proj_Data);  
           }             
      } catch (e) {
           res.status(400).send(e);
      }
 });

// /v1/enteries/rera/

app.post('/v1/enteries/rera/', async (req,res) => {
     try {
          const {pin} = req.body;
          if(pin == '') {
               res.status(401).send("Plaese Fill Any One Field")
          } else {
          const PinCode = await Pin.find({Pin_Code:pin});
          res.status(201).send(PinCode);
          }
     } catch (e) {
          res.status(401).send(e);
     }
})
 
app.listen(port, () => {
    console.log(`connected at ${port}`);
});
