
// Handle form submission
document.querySelector("form").addEventListener("submit", e => {
    // Cancel default behavior of sending a synchronous POST request
    e.preventDefault();
    // Create a FormData object, passing the form as a parameter
    const formData = new FormData(e.target);
    
    //Create table
    const tblElement = document.createElement("table");

    const thRow = document.createElement("thead");

    const thKey = document.createElement



    formData.forEach((val,key) => {

        const trElement = document.createElement("tr");

        const tdKeyElement = document.createElement("td");

        tdKeyElement.textContent = key;

        trElement.appendChild(tdKeyElement);

        const tdValElement = document.createElement("td");

        tdValElement.textContent = val;

        trElement.appendChild(tdValElement);

        tblElement.appendChild(trElement);


    });

    const divOutput = document.getElementById("output");
    divOutput.appendChild(tblElement);





  });