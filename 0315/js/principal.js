import { receberUsuario } from "./script.js";

    document.addEventListener(
        'mouseover', () => {
            let usuario = receberUsuario();
                carregarUsuario(usuario);
        }
    )

    function carregarUsuario(usuario){

        document.getElementById('fullNome').value = usuario.nome,
        document.getElementById('fullCpf').value = usuario.cpf,
        document.getElementById('fullRenda').value = 'R$: ' + usuario.renda,
        document.getElementById('fullAliquota').value = usuario.aliquota + '%',
        document.getElementById('fullImposto').value = 'R$: ' + usuario.imposto
        
    }