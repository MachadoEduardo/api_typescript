#### Qual problema o middleware resolve e por que UserService melhora a organização?
R: O middleware resolve o problema de ter que repetir a mesma lógica em várias rotas. 
Ele funciona como uma camada entre a requisição e a execução da rota, permitindo tratar tarefas comuns antes ou depois do controller, como autenticação, validação de token, logs, controle de acesso e tratamento de erros.
Já o UserService melhora a organização porque separa a regra de negócio da parte responsável por receber requisições HTTP. Assim, o controller cuida de req e res, enquanto o UserService cuida de operações relacionadas ao usuário, como cadastrar, buscar, atualizar ou validar dados.
