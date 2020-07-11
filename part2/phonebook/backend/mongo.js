
const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://berkcapar:${password}@phonebook.yvzrx.mongodb.net/phonebook?retryWrites=true&w=majority`

//const generateId = () =>{
  //  return Math.floor((Math.random() * 9999) + 1);
//} 

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
  
})

const Phonebook = mongoose.model('Phonebook', phonebookSchema)

if(process.argv[3]&& process.argv[4]){
    const phonebook = new Phonebook({
        name: process.argv[3],
        number: process.argv[4],
       // id: generateId()
    })
    phonebook.save().then(result => {
        console.log(`added ${phonebook.name} with number ${phonebook.number} to phonebook`)
        mongoose.connection.close()
        })
    
}else{
    Phonebook.find({}).then(result => {
        result.forEach(phonebook => {
         console.log(phonebook)
            })
           mongoose.connection.close()
        })
}





