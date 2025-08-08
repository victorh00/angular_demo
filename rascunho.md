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
