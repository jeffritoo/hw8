fetch(
    "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
    )
    .then(response=> response.json()) //access and return a response with entire JSON Object

    .then(paintings => {         //now each JSON object is going into a function

       const paintingsElement = document.getElementById("paintings"); //a constant with the Element ID
       
       paintings.forEach(painting => {               //itterate through each JSON object

           const paintingElement = document.createElement("tr");

           paintingElement.innerHTML = 

           `<td>${painting.name}</td>

           <td>${painting.year}</td>

           <td>${painting.artist}</td>`;

           paintingsElement.appendChild(paintingElement);


           
       });
       
       
       
       
        /*
        jsonObject.forEach(jsonObject=> {
            console.log(jsonObject.name);
        });
        */
    });

    

    /*
    .catch(err => {
        console.error(err.message);
    });
    */