const os = require('os')
const log = require('./logger')

const { freemem, totalmem } = os

const total = parseInt(totalmem() / 1024 / 1024)
const mem = parseInt(freemem() / 1024 / 1024)
const percents = parseInt((mem / total) * 100)

const stats = {
    free: `${mem} MB`,
    total: `${total} MB`,
    usage: `${percents} MB`,
}

setInterval(() => {
    log(`${JSON.stringify(stats)}\n`)
}, 2000);