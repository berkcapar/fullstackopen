const logger = require ('./logger')
const { request, response } = require('express')

const requestLogger = (request,response,next) =>{
    logger.info('Method:', request.method)
    logger.info('Path:', request.path)
    logger.info('Body:', request.body)
    logger.info('---')
    next()
}
const unknownEndpoint = (request,response)=>{
    logger.error(error.message)
}

const errorHandler = (error,request,response,next) =>{
    logger.error(error.message)

if(error.name ==='CastError'){
    return response.status(400).send({error:'malformatten id'})
} else if (error.name === 'ValidationError'){
    return response.status(400).json({error: error.message})
}
next(error)
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler,
}