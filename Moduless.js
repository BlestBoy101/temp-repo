const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

// Method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}
console.log(currentOS)

const path = require('path')

console.log(path.sep)

const filePath = path.join('/Content', 'Subfolder','test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'Content', 'Subfolder', 'test.txt')
console.log(absolute)