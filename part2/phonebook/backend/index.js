require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const Phonebook = require('./models/phonebook')
const { response } = require('express')

app.use(express.json())
app.use(express.static('build'))

app.use(morgan('tiny'));







app.get('/api/persons',(request,response) =>{
    Phonebook.find({}).then(person => {
        response.json(person)
      })
    })

app.get('/info' ,(req,res)=>{

    res.send(`
        <h1>Phonebook has info for ${Phonebook.length} people</h1>
        ${new Date()}`)
})

app.get('/api/persons/:id', (req,res)=>{
    //const id = Number(req.params.id)
    //const person = Phonebook.find(person=>person.id ===id)

    Phonebook.findById(req.params.id).then(person=>{
        res.json(person)
    })
})

app.delete('/api/persons/:id',(req,res)=>{
    // const id = Number(req.params.id)
    // notes = notes.filter(note=>note.id !== id)
    Phonebook.findByIdAndDelete(req.params.id).then(person=>{
        res.status(204).end()
    })
   
})
const generateId = () => {
    const newId = Math.floor((Math.random()*100) + persons.length)
    return newId
}

app.post('/api/persons',(req,res)=>{
    const body = req.body

    if(!body.name){
        return res.status(400).json({
            error: 'name missing!'
        })
    }

    if(!body.number){
        return res.status(400).jsın({
            error: 'number missing'
        })
    }

const person = new Phonebook({
    name: body.name,
    number: body.number,
    id: generateId()
})

const checkExistingName = persons.map(person=>person.name)

if(checkExistingName.includes(body.name)){
    return res.status(400).json({
        error: 'This user already add to phonebook'
    })
} else {
    person.save().then(savedPerson =>{
        res.json(savedPerson)
    })
    
}
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})