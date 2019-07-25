function temParam(param) {
    return process.argv.indexOf(param) !== -1
}

if (temParam('--producao')) {
    console.log('Tem param')
} else {
    console.log('Nao tem param')
}