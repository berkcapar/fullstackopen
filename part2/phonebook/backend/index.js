const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())

app.use(morgan('tiny'));

let persons = [
    {
      name: "Berk",
      number: "524234",
      id: 1
    },
    {
      name: "Deniz",
      number: "05243 234",
      id: 2
    },
    {
      name: "Ege Çapar",
      number: "0531 1313 13",
      id: 3
    },
    {
      name: "Çınar Çabuk",
      number: "0514 141 31 31",
      id: 4
    },
    {
      name: "Tuna",
      number: "tuna",
      id: 5
    }
  ]


app.get('/api/persons',(req,res) =>{
res.json(persons)
})

app.get('/info' ,(req,res)=>{

    res.send(`
        <h1>Phonebook has info for ${persons.length} people</h1>
        ${new Date()}`)
})

app.get('/api/persons/:id', (req,res)=>{
    const id = Number(req.params.id)
    const person = persons.find(person=>person.id ===id)
    if(person){
        res.json(person)
    }else{
        res.status(404).end()
    }

})

app.delete('/api/persons/:id',(req,res)=>{
    const id = Number(req.params.id)
    notes = notes.filter(note=>note.id !== id)
    res.status(204).end()
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

const person = {
    name: body.name,
    number: body.number,
    id: generateId()
}

const checkExistingName = persons.map(person=>person.name)

if(checkExistingName.includes(body.name)){
    return res.status(400).json({
        error: 'This user already add to phonebook'
    })
}

persons = persons.concat(person)
res.json(person)

})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})