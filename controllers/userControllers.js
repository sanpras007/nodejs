// const fs = require('fs');

// const fileName = "./users.json";

// const readSpecificUser = (req,res) =>{
//     const { id } = req.query;
//     console.log(id);
//     try{
//         const data = fs.readFileSync(fileName,"utf-8");
//         const newdata = JSON.parse(data);
//         const user = newdata.find(user => user.id === id);
//     if(user)
//         res.status(200).json({"data":user,"msg":"","err":""});
//     else
//         res.status(400).json({"data":"","msg":"no user found","err":""});
//     }catch(err){
//         res.status(500).json({"data":"","messgae":"","err":err.messgae}); 
//     }
// }

// const readuser = (req,res) =>{
//     try{
//         fs.readFile(fileName,"utf-8",(err,data)=>{
//             if(err) 
//                 res.status(500).json({"data":"","msg":"","err":err.messgae});
//             else{
//                 res.status(200).json({"data":data,"msg":"","err":""});
//             }
//         })
//     }catch(err){
//         res.status(500).json({"data":"","messgae":"","err":err.messgae});
//     }
// }

// const createUser = (req,res) =>{
//     try{
//         let data = req.body;
//         let users = fs.readFileSync(fileName,"utf-8");
//         users = JSON.parse(users);
//         let newusers = users.filter(user => user.id === data.id);
//         if(newusers.length > 0){
//             res.status(400).json({"data":"","msg":"alreay exist","err":""});
//         }
//         else{
//             users.push(data);
//             fs.writeFileSync(fileName,JSON.stringify(users));
//             res.status(200).json({"data":"","messgae":"added success","err":""});
//         }
//     }catch(err){
//         res.status(500).json({"data":"","messgae":"","err": err.message });
//     }
// }

// const deleteDetails = (req,res)=>{
//     try{
//         const id = req.params.id;
//         let data = fs.readFileSync(fileName,"utf-8");
//         let resultData = JSON.parse(data).filter(v => v.id !== id);
//         if (Object.keys(resultData).length !== 0) {
//             fs.writeFileSync(fileName, JSON.stringify(resultData));
//             console.log(resultData);
//             res.status(200).json({"data":"","msg":"delete success","err":""});
//         } else {
//             res.status(400).json({"data":"","msg":"","err":"delete failed"});
//         }
//     }
//     catch(err){
//         res.status(500).json({"data":"","msg":"","err":err.message});
//     }
// }

// const update = (req,res)=>{
//     try{
//         const datas = req.body;
//         let data = fs.readFileSync(fileName,"utf-8");
//         data = JSON.parse(data);
//         const index = data.findIndex(user => user.id === datas.id);
//         data[index] = { ...data[index], ...datas };
//         fs.writeFileSync(fileName,JSON.stringify(data));
//         res.status(200).json({"data":"","messgae":"update success","err":""});
//     }catch(err){
//         res.status(500).json({"data":"","messgae":"","err":err.messgae}); 
//     }
// }

// module.exports = {
//     createUser,
//     readSpecificUser,
//     readuser,
//     deleteDetails,
//     update,
// }