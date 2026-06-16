async function getStudents() {

    try {

        const response =
        await fetch(
        "https://jsonplaceholder.typicode.com/users"
        );

        if(!response.ok){
            throw new Error("API gagal diakses");
        }

        const data = await response.json();

        let output = "";

        data.forEach(student => {

            output += `
            <div class="card">
                <h3>${student.name}</h3>
                <p>${student.email}</p>
                <p>${student.phone}</p>
            </div>
            `;

        });

        document.getElementById("result")
        .innerHTML = output;

    }

    catch(error){

        document.getElementById("result")
        .innerHTML =
        "Ralat: " + error.message;

    }

}