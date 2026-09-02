#### Qual problema o middleware resolve e por que UserService melhora a organização?
R: O middleware resolve o problema de ter que repetir a mesma lógica em várias rotas. 
Ele funciona como uma camada entre a requisição e a execução da rota, permitindo tratar tarefas comuns antes ou depois do controller, como autenticação, validação de token, logs, controle de acesso e tratamento de erros.
Já o UserService melhora a organização porque separa a regra de negócio da parte responsável por receber requisições HTTP. Assim, o controller cuida de req e res, enquanto o UserService cuida de operações relacionadas ao usuário, como cadastrar, buscar, atualizar ou validar dados.

#### Por que centralizar erros melhora a API?
R: Centralizar o tratamento de erros deixa a API mais padronizada e fácil de manter. Em vez de cada rota decidir como responder a uma falha, um único mecanismo define o formato das respostas, códigos HTTP e mensagens.

#### Diferença entre validação de tipo e regra de negócio:
R: A validação de tipo verifica se o dado está no formato esperado, por exemplo, se idade é um número ou se email é uma string. Já a regra de negócio verifica se o valor faz sentido dentro das regras do sistema, por exemplo, exigir que a idade seja maior que 18 ou impedir o cadastro de um e-mail já existente.

### Diferença entre Service e Repository
Repository é responsável pelo acesso e manipulação dos dados. Ele faz operações como buscar, salvar, atualizar ou excluir informações no banco de dados. Service é responsável pelas regras de negócio da aplicação. Ele recebe uma solicitação, aplica validações e regras necessárias e, quando precisa acessar dados, utiliza o Repository.