const par = document.getElementById("p1")
console.log(par)

par.textContent = "Channels Class!"

function sayHello(name) {
    alert("Alert Say Hello:" + name)
}

window.onload = function () {
    const form = document.getElementById("hello-form")

    form.onsubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(form)

        let name 

        for (const entry of formData.entries()) {
           // console.log(`olha os meus vslores ${entry[0]} , ${entry[1]}`)
            name  = entry[1]
        }

        //displayHello("display-hello", name)

        const payLoad = JSON.stringify({name}) 

        const XHR = new XMLHttpRequest()
 
        // Define what happens on successful data submission
        XHR.onload = (e) => {
          document.getElementById('display-hello').textContent = XHR.response.hello
        }
     
        // Define what happens in case of error
        XHR.onerror = (e) => {
          console.error(e)
        }
     
        // Set up our request
        XHR.open('POST', 'http://localhost:5001/api')
     
        XHR.setRequestHeader('Content-Type', 'application/json')
     
        XHR.responseType = 'json'
     
        // The data sent is what the user provided in the form
        XHR.send(payLoad)
    

    }

    
}


const displayHello = (id, name) => {
    document.getElementById(id).textContent = `Hello, ${name}!`
}



