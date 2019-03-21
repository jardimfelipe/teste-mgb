class Form {
    constructor() {
        this.form = document.querySelector("form");
        this.form.onsubmit = this.formSubmit;
    }

    formSubmit(e) {
        e.preventDefault();
        let validate = validateForm();
        if (validate) {
            const { target: form } = e;
            const { name, cpf, email, gender, status, date } = form;
            let tbody = document.querySelector("tbody")
    
            localStorage.setItem('name', name.value)
            localStorage.setItem('cpf', cpf.value)
            localStorage.setItem('email', email.value)
            localStorage.setItem('gender', gender.value)
            localStorage.setItem('status', status.value)
            localStorage.setItem('date', date.value)

            if (status.value === 'on') {
                status.value = 'Ativo';
            } else {
                status.value = 'Inativo';
            }
    
            tbody.innerHTML += `<tr><td>${name.value}</td><td>${cpf.value}</td><td>${email.value}</td><td>${gender.value}</td><td>${status.value}</td><td>${date.value}</td><td><a href="#" title="Excluir" onclick="removeCell(this)"><i class="fas fa-times"></i></a></td></tr>`;
        }
    }
}

function removeCell(element) {
    event.preventDefault();
    let cell = element.parentNode.parentNode.rowIndex;
    document.querySelector("table").deleteRow(cell);
}

function validateForm() {
    if( document.form.name.value == "" ) {  
        alert( "Preencha o seu nome" );      
        document.form.name.focus();      
        return false;  
     }  
     if( document.form.cpf.value == "" ) {  
        alert( "Preencha o seu cpf" );      
        document.form.cpf.focus();      
        return false; 
     }  
     if( document.form.email.value == "") {  
        alert( "Preencha o seu email" );      
        document.form.email.focus();      
        return false;  
     }  
     if( document.form.date.value == "-1" ) {  
        alert( "Preencha sua data de nascimento" );   
        document.form.date.focus();      
        return false;  
     }  
     return( true );  
}

function cpfMask(i){
   
    let v = i.value;
    
    if(isNaN(v[v.length-1])){
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }

 function dateMask(i){
   
    let v = i.value;
    
    if(isNaN(v[v.length-1])){
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "10");
    if (v.length == 2 || v.length == 5) i.value += "/";
    // if (v.length == 11) i.value += "-";
 
 }

let form = new Form();