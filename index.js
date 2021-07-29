var inquirer = require('inquirer');
const { fstat } = require('node:fs');
inquirer
  .prompt([
   {
        type: "input",
        message: "What is the title of the project?",
        name: "title",
        validate: (value) => { if(value){return true} else {return 'we need a value to continue'}},
   },

   {
    type: "input",
    message: "What is the goal of the project?",
    name: "description",
    validate: (value) => { if(value){return true} else {return 'we need a value to continue'}},

   },

   {
    type: "input",
    message: "Table of Contents",
    name: "contents",
    validate: (value) => { if(value){return true} else {return 'we need a value to continue'}},
},

{
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
    validate: (value) => { if(value){return true} else {return 'we need a value to continue'}},
},

{
    type: "input",
    message: "How is this app intended to be used?",
    name: "usage",
    validate: (value) => { if(value){return true} else {return 'we need a value to continue'}},
},

{
    type: "list",
    message: "Are there any associated licenses?",
    name: "licenses",
    choices: ['The MIT License', 'The GPL License', 'N/A'],
    validate: (value) => { if(value){return true} else {return 'we need a value to continue'}},
},


{
    type: "input",
    message: "Who were the contributers to this application?",
    name: "contributors",
    validate: (value) => { if(value){return true} else {return 'we need a value to continue'}},
},
   

{
    type: "input",
    message: "Are there any questions?",
    name: "questions",
    validate: (value) => { if(value){return true} else {return 'we need a value to continue'}},
},

{
    type: "input",
    message: "Github username:",
    name: "git",
    validate: (value) => { if(value){return true} else {return 'we need a value to continue'}},
},

{
    type: "input",
    message: "E-mail:",
    name: "email",
    validate: (value) => { if(value){return true} else {return 'we need a value to continue'}},
},

  ])
  .then((
      {
        title,
        description,
        contents,
        installation,
        usage,
        licenses,
        contributors,
        questions,
        git,
        email
      }) => { 
          const temp = `# ${title}
          
          * [Description](#description)
          * [Contents](#contents)
          * [Installation](#installation)
          * [Usage](#usage)
          * [contributors](#contributors)
          * [questions](#questions)
          * [licenses](#licenses)
          ## Description
          ${description}
          ## Contents
          ${contents}
          ## Installatioin
          ${installation}
          ##Usage
          ${usage}
          ## Contribution
          ${contributors}
          ### Questions
          ${questions}
          ## Licenses
          ${licenses}
          ## Contributors
          ${contributors}

          #Contact
          * GitHub :${git}
          * E-mail :${email}`;
        
          createNewFile(title,template);


    // Use user feedback for... whatever!!
  });

  function createNewFile(fileName,template){
      fstat.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`, data, (err)=> {
        if(err){
            console.log(err)
        }
        console.log('Here is your ReadME');
    })
  }