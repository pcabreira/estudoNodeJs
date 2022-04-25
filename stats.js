const os = require('os')

const { freemem, totalmem } = os

setInterval(() => {
    console.log(freemem(), totalmem())
}, 2000);