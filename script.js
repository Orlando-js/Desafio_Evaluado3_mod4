// Función asíncrona
const getPosts = async () => {

    // URL guardada en una variable
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response = await fetch(url);
        const data = await response.json();

        let lista = document.querySelector('#post-data > ul');

        // Recorrer el arreglo obtenido con forEach(), e ir agragando
        // los elementos de a uno a la lista
        data.forEach((elemento)=>{
            lista.innerHTML += `<li>
                                    <p><strong>${elemento.title}</strong></p>
                                    <p>${elemento.body}</p>
                                    </br>
                                </li>`;
        });

    } 

    catch(err) {
        console.log(err);
    }
    
}