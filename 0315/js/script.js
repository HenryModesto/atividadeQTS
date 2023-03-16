import { Usuario } from "./usuario.js";

export function receberUsuario() {
    const urlParams = new URLSearchParams(window.location.search);

    return objetoUsuario(
        urlParams.get('fullNome'), urlParams.get('fullCpf'), urlParams.get('fullRenda')
    )
}


function objetoUsuario(nome, cpf, renda) {
    return new Usuario(nome, cpf, renda);

}