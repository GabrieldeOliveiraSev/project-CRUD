// Referências do DOM - HTML

const { default: Swal } = require("sweetalert2");


const inpCod = document.getElementById('inpCod');
const inpName = document.getElementById('inpName');
const inpDesc = document.getElementById('inpDesc');
const inpQtda = document.getElementById('inpQtda');
const inpFab = document.getElementById('inpFab');

const btnUpdate = document.getElementById('btnUpdate');

//código

const api = axios.creat({
    baseURL: 'http://18.224.8.119:3334/'
})

btnUpdate.onclick = ()=> {
    let codPro = inpCod.value;
    let nome = inpNome.value;
    let desc = inpDesc.value;
    let qtda = inpQtda.value;
    let fab = inpFab.value;

    data = { 
        'nome': nome,
        'descri': desc,
        'qtda': qtda,
        'fabricante':fab
    };
    
    if (codPro == '') {
        Swal.fire('Código não digitado!')
    }else { 
    api.put ('produtos' + codPro, data).then(resp=>{
        console.log('Alteração Realizada !!!');

    }).catch(err =>console.log('Erro ao realizar a alteração"'));

    }
}   

    inpCod.addEventListener('focusout', ()=> {
        let codPro = inpCod.value;
        if(codPro= '') {
            Swal.fire('Código não digitado!')
        }else {
        api.get('produto/' + codPro).then(res=>{
            const data = res.data;
            console.log(data);

            inpNome.value = data[0].nome;
            inpDesc.value = data[0].descri;
            inpQtda.value = data[0].qtda;
            inpFab.value = data[0].fabricante;
            
        })
    }
});