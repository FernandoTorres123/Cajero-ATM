let cuentas = [
    { nombre: "Hiromi", saldo: 200, password: 'helloworld' },
    { nombre: "Luis", saldo: 290, password: 'l33t' },
    { nombre: "Carlos", saldo: 67, password: '123' }
];

let userName = '';
let money = 0;

const getData = () => {

    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    login(user, password);

}

const login = (user, password) => {
    for (let i = 0; i < cuentas.length; i++) {
        if (user === cuentas[i].nombre) {
            if (password === cuentas[i].password) {
                // alert('Todo bien mien');
                showMenu(i);
                document.getElementById('user').value = '';
                document.getElementById('password').value = '';
                return
            } else {
                alert('Algo esta mal mien');
                return
            }
            // menu(i);
        }
    }
    alert('No existe ese usuario mien');
}

const showMenu = (userPosition) => {

    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('menu').style.display = 'grid';

    userName = cuentas[userPosition].nombre;
    money = cuentas[userPosition].saldo;
    document.getElementById('name').innerText = userName;

    document.getElementById('salir').addEventListener('click', function () {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('mainPage').style.display = 'grid';
        userPosition = '';

    });

    //Parte de consultar

    document.getElementById("consultar").addEventListener('click', function () {

        money = cuentas[userPosition].saldo;


        document.getElementById('menu').style.display = 'none';
        document.getElementById('mostrarSaldo').style.display = 'grid';


        document.getElementById('saldo').innerText = money;
        // alert(`${money}`);

    });

    document.getElementById("regresar").addEventListener('click', function () {
        document.getElementById('menu').style.display = 'grid';
        document.getElementById('mostrarSaldo').style.display = 'none';

    });


    //Parte de despositar

    document.getElementById("depositar").addEventListener('click', function () {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('depositarSaldo').style.display = 'grid';

        document.getElementById('money1').innerText = money;
    });

    document.getElementById('confirmDepositos').addEventListener('click', function () {

        let deposito = document.getElementById("deposito").value;
        deposito = Number(deposito);

        let money = cuentas[userPosition].saldo + deposito;

        if (deposito <= 0) {

            alert('Ingresa un numero valido');
            document.getElementById("deposito").value = '';


        } else {

            if (money <= 990) {
                cuentas[userPosition].saldo = cuentas[userPosition].saldo + deposito;

                let result = cuentas[userPosition].saldo;

                document.getElementById("money1").innerText = result;
                document.getElementById("deposito").value = '';

                document.getElementById("deposito-hecho").innerText = `Has depositado ${deposito} \n El saldo total es ${result}`;

                return
            } else {
                alert('No se puede mien');
                document.getElementById("deposito").value = '';
                return
            }

        }


    });


    document.getElementById("regresar1").addEventListener('click', function () {
        money = cuentas[userPosition].saldo;


        document.getElementById('menu').style.display = 'grid';
        document.getElementById('depositarSaldo').style.display = 'none';

        document.getElementById('money1').innerText = money;

        document.getElementById("deposito-hecho").innerText = '';

    });


    //Parte de reitirar

    document.getElementById('retirar').addEventListener('click', function () {
        money = cuentas[userPosition].saldo;


        document.getElementById('menu').style.display = 'none';
        document.getElementById('retirarSaldo').style.display = 'grid';

        document.getElementById('money2').innerText = money;

    });

    document.getElementById('confirmRetiro').addEventListener('click', function () {

        let retiro = document.getElementById("retiro").value;
        retiro = Number(retiro);

        let money = cuentas[userPosition].saldo - retiro;

        if (retiro <= 0) {

            alert('Ingresa un numero valido');
            document.getElementById("retiro").value = '';


        } else {

            if (money >= 10) {
                cuentas[userPosition].saldo = cuentas[userPosition].saldo - retiro;

                let result = cuentas[userPosition].saldo;

                document.getElementById("money2").innerText = result;
                document.getElementById("retiro").value = '';

                document.getElementById("retiro-hecho").innerText = `Has retirado ${retiro} \n El saldo total es ${result}`;

                return
            } else {
                alert('No se puede mien');
                document.getElementById("retiro").value = '';
                return
            }

        }

    });

    document.getElementById("regresar2").addEventListener('click', function () {
        money = cuentas[userPosition].saldo;


        document.getElementById('menu').style.display = 'grid';
        document.getElementById('retirarSaldo').style.display = 'none';

        document.getElementById('money2').innerText = money;

        document.getElementById("retiro-hecho").innerText = '';

    });

}