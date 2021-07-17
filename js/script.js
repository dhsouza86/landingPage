function cadastraEmail(){
    let input = document.getElementById('email').value;
    localStorage.setItem('email', input);
    document.getElementById('email').value='';
    alert("Endereço cadastrado com sucesso!");
}