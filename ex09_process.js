process.stdout.write('Como é seu nome? ')
process.stdin.on('data', function(data) {
    process.stdout.write(`Seu nome é: ${data.toString()}\n`)
    process.exit()
})