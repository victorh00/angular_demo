# arq

mostrar saldo
menu opções
form da operação
extrato

- Cada transação realizada no sistema deve possuir SOMENTE as seguintes informações:

  1. Data da Transação (Date)
  2. Tipo de Transação (Depósito, Transferência, Pagamento)
  3. Valor da Transação (valor maior que zero)

- Sempre que a transação for do tipo DEPÓSITO, o valor da transação deve ser adicionado ao saldo da conta.
- Sempre que a transação for do tipo TRANSFERÊNCIA ou PAGAMENTO DE BOLETO, o valor da transação deve ser subtraído do saldo da conta.
- O saldo deve sempre ser atualizado na tela da aplicação a cada transação realizada.

---

as info da conta devem ficar num módulo específico "Conta"

- saldo
- data de acesso
- registro de transações realizadas
- histórico de transação

os componentes apenas interagem com a interface

- nova transação: coleta e valida dados do form e envia para "Conta"
- saldo: exibir info da "Conta" na interface

from zero

/app/components
/header
/footer
/menu (deixar espaço para adicionar funcionalidades depois)
/body* (vai depender da função, nomear de acordo)
/display* (barra lateral para ver resultado, testar etc)

/header
div: logo, slogan
div:

.montserrat-<uniquifier> {
font-family: "Montserrat", sans-serif;
font-optical-sizing: auto;
font-weight: <weight>;
font-style: normal;
}

.playfair-display-<uniquifier> {
font-family: "Playfair Display", serif;
font-optical-sizing: auto;
font-weight: <weight>;
font-style: normal;
}

css units
Normalmente os browsers especificam o tamanho default da fonte do elemento root (raiz) sendo 16px, então guarde isso no coração!
10px = 0.625rem
12px = 0.75rem
14px = 0.875rem
16px = 1rem
18px = 1.125rem
meio paia

paleta

#042940
#005C53
#9FC131
#DBF227
#D6D58E

html, body {
height: 100%;
margin: 0;
}

body {
display: flex;
flex-direction: column;
}

main {
flex: 1;
}

https://m2.material.io/design/color/dark-theme.html#ui-application
https://www.flaticon.com/icon-fonts-most-downloaded/2
https://codepen.io/JFarrow/pen/nJgRga
https://medium.com/@mateus2050/hamburguer-menu-html-and-css-only-c06364fa9bfdx'
https://www.youtube.com/watch?v=BwXFgcEfg-Y
https://m2.material.io/design/color/dark-theme.html#ui-application

features atuais:

- banco
- calculadora
- memoteca
- checklist
- cronometro

implementar memoteca: crud de post-its
