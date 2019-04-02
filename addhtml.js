function add(element) {
    let ul = document.getElementById("names");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    ul.appendChild(li);
}

function add1() {
    let forma = document.getElementById('nams');

    let form_id = forma.id.value;
    let form_name = forma.name.value;

    fetch('http://localhost:1337/employees', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, ',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: form_name, rate_per_hour: 45 })
    }).then(res => res.json())
        .then(res => console.log(res));

}
function getEmployeeList() {
    fetch('http://localhost:1337/employees')
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
            let names = data.map(name => name.name);
            console.log(names);
            names.forEach(element => {
                console.log(element);
                add(element);

            });
            //console.log(data[0].name);

        })
}
 getEmployeeList();

function deleteEmployee() {
    let forma = document.getElementById('nams');
    let form_id = forma.id.value;

    fetch('http://localhost:1337/employees', {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: form_id })
    }).then(response => response.json())
        .then(response => console.log(response));
}
