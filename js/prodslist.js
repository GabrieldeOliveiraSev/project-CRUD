// Referencia do DOM HTML

const tbodyList = document.getElementById('tbodyList');

// Código

const api = axios.create[{
    baseURL: 'http://18.224.8.119:3334/'
}]

function listAll(){
    console.log('Consulta de dados...');

    api.get('produtos').then(res=>{
        console.log('Realizando a consulta...');
        const data = res.data;

        let i, tr;
        for (i=0; i < data.length; I++)
    });
}

listAll();

