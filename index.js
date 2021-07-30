var inquirer = require('inquirer'); // the 'require' command initiates the 'inquirer' package
const fs  = require('fs'); // the 'require' command also initiaties the 'fs' package with the following modules
inquirer //calls upon inquirer
  .prompt([   //begins an input or section of code
   {
        type: "input", // telling which kind of content we will need. In this case, it's an input
        message: "What is the title of the project?",  //displayed prompt
        name: "title",  //label for the title which we can reference below
        validate: (value) => { if(value){return true} else {return 'we need a value to continue'}},  //making sure we input something when prompted
   },
        //  the rest of the types follow similarly:...
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

  ])            // we are going to call upon the names with a .then along with an arrow function
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
      }) => {                               // using template literal notation along with several new characters *, ##, to delineate how we want the ReadMe to be set up
          const template = `# ${title}   
          
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
        
          createNewFile(title,template);   //creating a new file using the template variables defined above.
  });                                      // writing a new file, making sure it's lower case, and eliminating white spaces/ making them uniform with .split and .join

  function createNewFile(fileName,data){ 
                                            
      fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`, data, (err)=> { 
        if(err){
            console.log(err)                    // if we have an error, we console log it. if not, we have our message.
        }
        console.log('Here is your ReadME');
    })
  }