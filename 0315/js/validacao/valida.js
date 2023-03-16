document.querySelector('#btnRegister').addEventListener('click',schedule)
const fullNome = document.querySelector('#fullNome')
const fullRenda = document.querySelector('#fullRenda')



function schedule() {
    if (fullNome.value == 0 || fullRenda.value == 0 || fullCpf.value == 0 ) {
        fullNome.focus()
        fullNome.style.border = '.2rem solid red'
        fullCpf.style.border = '.2rem solid red'
        fullRenda.style.border = '.2rem solid red'

        alert('[ERRO] Preencha os campos vazios!')

    } else if (fullNome.value < 3) {
        alert('[ERRO] Digite um nome valido!')
        fullNome.focus()
        fullNome.style.border = '.2rem solid red'
    } else if(fullRenda.value = 0)
        alert('[ERRO] Preencha os campos vazios!')
        fullRenda.focus()
        fullRenda.style.border = '.2rem solid red'
}


