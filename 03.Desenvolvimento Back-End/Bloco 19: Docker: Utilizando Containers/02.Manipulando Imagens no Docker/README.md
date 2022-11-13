# DIA 2

O objetivo dos exercícios desse dia foi melhorar os aprendizados de Docker, usando Dockerfile e também utilizando conceitos de criar uma imagem.

Os requisitos do exercício são:

Para fixar

Pasta para-fixar

Vamos executar o comando docker run --rm primeira-imagem e verificar se realmente a mensagem que colocamos é impressa na tela.

Exercícios

Pasta exercises

1. Crie um Dockerfile utilizando a imagem chuanwen/cowsay.

2. Defina um ENTRYPOINT para a execução do comando.
  * Observe que o executável cowsay está no diretório /usr/games/
  * Lembre-se que com ele, diferente do CMD, o comando não poderá ser sobrescrito com o docker run, porém conseguiremos passar parâmetros ao binário e exploraremos esse recurso para poder passar a mensagem.

3. Utilize o CMD para definir uma mensagem padrão.

4. Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando.

5. Execute um novo container passando sua mensagem para testar. Além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como docker container run cowsay -f dragon-and-cow "VQV TRYBE", para exibir um dragão junto com a vaquinha.