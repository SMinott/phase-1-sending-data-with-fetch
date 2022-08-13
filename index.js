// Add your code here

function submitData() {
    fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com"
        })
    })
    .then(resp => resp.json)
    .then(data => submitData(data))
    .catch(error => alert('DANGER!!!'))
    // .catch(error => alert(error.message))

    return fetch('http://localhost:3000/users')
}

// function fetchData(){
// fetch('http://localhost:3000/users', submitData)
// .then(resp => resp.json)
// .then(data => submitData(data))
// .catch(error => alert('DANGER!!!'))
// }