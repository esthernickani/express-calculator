const express = require('express');
const app = express()
const { mean, mode, median } = require('./operations.js')

app.get('/mean', (request, response, next) => {
    let query = request.query.nums
    let queryNums = query.split(',')
    let nums = queryNums.map(queryNum => {
        return parseInt(queryNum)
    })
    let meanResult = mean(nums)

    try {
        if (query === '') {
            let error = new Error(`Nums are required`);
            error.code = 400;
            throw error;
        } else if (isNaN(meanResult)) {
            let error = new Error(`One or more of the inputs is not a number`);
            error.code = 400;
            throw error;
        } else {
            return response.json({
                operation: 'mean',
                value: meanResult
            })
        }
    
    } catch (err) {
        next(err)
    }
    
})

app.get('/median', (request, response, next) => {
    let query = request.query.nums
    let queryNums = query.split(',')
    let nums = queryNums.map(queryNum => {
        return parseInt(queryNum)
    })
    let medianResult = median(nums)

    try {
        if (query === '') {
            let error = new Error(`Nums are required`);
            error.code = 400;
            throw error;
        } else if (Array.isArray(medianResult)) {
            return response.json({
                operation: 'median',
                value: medianResult
            })
        }
        else if (isNaN(nums)) {
            let error = new Error(`One or more of the inputs is not a number`);
            error.code = 400;
            throw error;
        } else {
            return response.json({
                operation: 'median',
                value: medianResult
            })
        }
    
    } catch (err) {
        next(err)
    }
})

app.get('/mode', (request, response, next) => {
    let query = request.query.nums
    let queryNums = query.split(',')
    let nums = queryNums.map(queryNum => {
        return parseInt(queryNum)
    })
    let modeResult = mode(nums)

    try {
        if (query === '') {
            let error = new Error(`Nums are required`);
            error.code = 400;
            throw error;
        } else if (Array.isArray(modeResult)) {
            return response.json({
                operation: 'mode',
                value: modeResult
            })
        } else if (isNaN(nums)) {
            let error = new Error(`One or more of the inputs is not a number`);
            error.code = 400;
            throw error;
        } else {
            return response.json({
                operation: 'mode',
                value: modeResult
            })
        }
    
    } catch (err) {
        next(err)
    }
})

const errorHandler = (error, request, response, next) => {
    console.log(`error ${error.message}`)
    let status = error.status || 400
    response.status(status).send(error.message)
}

app.use(errorHandler)
app.use(express.json())
app.listen(3000, function() {
    console.log('App on port 3000')
})
