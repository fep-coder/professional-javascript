function assert(value, text) { 

    const li = document.createElement("li"); 
    li.className = value ? "pass" : "fail"; 
    li.appendChild(document.createTextNode(text)); 
    
    let results = document.getElementById("results"); 

    if (!results) {
        results = document.createElement("ul");
        results.setAttribute("id", "results");
        document.body.appendChild(results);
    }

    results.appendChild(li);
}

function pass(text) {
    assert(true, text);
}

function fail(text) {
    assert(false, text);
}

function report(text) {
    pass(text);
}

function separate() {
    report("----------------------------------------");
}
