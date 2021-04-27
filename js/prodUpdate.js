// Referências do DOM - HTML
const inpCod = document.getElementById('inpCod');
const inpName = document.getElementById('inpName');
const inpDesc = document.getElementById('inpDesc');
const inpQtda = document.getElementById('inpQtda');
const inpFab = document.getElementById('inpFab');

const lblDataHora = document.getElementById('lblDataHora');

const btnUpdate = document.getElementById('btnUpdate');
const btnConsult = document.getElementById('btnConsult')
//código

const api = axios.create({
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

    btnConsult.onclick = ()=> {
        let codPro = inpCod.value;
        if(codPro=='') {
            limparCampos();
            Swal.fire('Código não digitado!')
            
        }else {
            desc = inpDesc.value;
        api.get('produto/' + codPro).then(res=>{
            const data = res.data;
            console.log('Numero de registro = '+data.legth);

        if (data.lenhth == 0) {
            inpNome.value = data[0].nome;
            inpDesc.value = data[0].descri;
            inpQtda.value = data[0].qtda;
            inpFab.value = data[0].fabricante;
            lblDataHora.innerHTML = data[0]
        }  

        });  


    };
};
 
  
function limparCampos() {
    inpCod.value = '';
    inpNome.value = '';
    inpDesc.value = '';
    inpQtda.value = '';
    inpFab.value = '';
    lblDataHora= '';
    
}