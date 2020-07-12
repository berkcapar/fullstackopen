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

app.get('/api/persons/:id', (req,res, next)=>{
    //const id = Number(req.params.id)
    //const person = Phonebook.find(person=>person.id ===id)

    Phonebook.findById(req.params.id).then(person=>{
        if(person){
            res.json(person) 
        } else {
            response.status(404).end()
        }
       
    })
    .catch(error => next(error))       
})

app.delete('/api/persons/:id',(req,res, next)=>{
    // const id = Number(req.params.id)
    // notes = notes.filter(note=>note.id !== id)
    Phonebook.findByIdAndDelete(req.params.id).then(person=>{
        res.status(204).end()
    })
    .catch(error => next(error))
   
})


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
    
})
    person.save().then(savedPerson =>{
        res.json(savedPerson)
    })

})

const unknownEndpoint = (req,res) =>{
    res.status(404).send({error:'unknown endpoint'})
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) =>{
    console.error(error.message)

    if (error.name = 'CastError'){
        return res.status(400).send({error:'malformatten id!'})
    }
    next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})