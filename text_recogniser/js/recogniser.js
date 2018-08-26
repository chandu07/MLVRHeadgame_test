const pc1 = new DrawableCanvas(document.getElementById('p1'))
const gc = new DrawableCanvas(document.getElementById('g'))
const net = new brain.NeuralNetwork()
const data = []
trainingData.addEventListener('click',() =>{
    var myObj = {}
    var outObj = {}
    var outObj_name = String(document.getElementById("training_data").value)
    myObj['input'] = pc1.getVector()
    outObj[outObj_name] = 1
    myObj['output'] = outObj
    data.push(myObj)
    console.log(myObj)
    pc1.reset()
})
train.addEventListener('click', () => {
    console.log(data)
    const result = net.train(data, {log: true})
    console.log(result.toString())
    err.innerHTML = result.error
    iterations.innerHTML = result.iterations
    TResults.removeAttribute('style')
})
guess.addEventListener('click', () => {
    const result = brain.likely(gc.getVector(), net)
    Guess.innerHTML = result
    Guesswork.removeAttribute('style')
    gc.reset()
})