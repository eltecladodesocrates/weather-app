const request = require('request')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

const address = process.argv[2]

if (!address) {
    console.log('Please, provide an address')
} else {
    geocode(address, (error, data) => {

        if (error) {
            return console.log(error)
        } 
        weather(data.latitude, data.longitude, data.location, (error, data) => {
            
            if (error) {
                return console.log(error)
                
            }
            console.log(error)
            console.log(data)
        })
        
    })
}

