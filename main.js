// 24. Poupança. Leia o valor depositado mensalmente e a quantidade de meses. Considere rendimento de 0,5% ao mês. Exiba o saldo mês a mês e o total de rendimentos ao final.

const monthlyDeposit = Number(prompt("Valor do depósito mensal (R$):"));
const months = Number(prompt("Quantidade de meses:"));

let balance = 0;
let totalDeposited = 0;

for (let month = 1; month <= months; month++) {
    balance += monthlyDeposit;
    totalDeposited += monthlyDeposit;

    balance *= 1.005;

    console.log(`Mês ${month}: R$ ${balance.toFixed(2)}`);
}

const totalEarnings = balance - totalDeposited;

console.log(`Total depositado: R$ ${totalDeposited.toFixed(2)}`);
console.log(`Rendimentos: R$ ${totalEarnings.toFixed(2)}`);
console.log(`Saldo final: R$ ${balance.toFixed(2)}`);