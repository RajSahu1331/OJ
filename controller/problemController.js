const Problem = require("../models/problemModel");
// const mongoose = require("mongoose");

const getProblems = async function (req, res) {
  Problem.find()
    .then((result) => {
      res.render("questions", {
        prb: result
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getProblemById = async function (req, res) {
  try {
    // console.log("hiiii")
    const id = req.params.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      Problem.findById(req.params.id).then((result) => {
        res.render("question",{prb:result});
      });
    }
  } catch (err) {
    res.status(500).json();
  }
};



// const getProblemById_post = function (req, res) {
  
//   // const {language,code} = req.body;
//   // // res.send("hello");
//   // try{
//   //    console.log(`language is ${language} code is ${code}`)
//   //    res.status(200).json({ language,code });
//   // }
//   // catch(err){
//   //    console.log(err);
//   //    res.status(400).json(err)
//   // }
//   // if(error){
//   //   console.log(error);
//   // }
//   // else console.log("success");
//   res.end("hello");


// };

module.exports = {
  getProblems,
  getProblemById
  // getProblemById_post
};


