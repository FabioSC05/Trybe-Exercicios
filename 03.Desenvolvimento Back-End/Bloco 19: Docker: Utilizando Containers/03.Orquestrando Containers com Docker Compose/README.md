# DIA 3

O objetivo dos exercícios desse dia foi aprimorar ainda mais o conhecimento de docker e facilitar a criação e utilização de imagens com o docker compose.

Os requisitos do exercício são:

Exercícios

Pasta exercise-one

Exercício 1:

Vamos aprimorar nossos conhecimentos sobre images e volumes, para isso:

1. Crie um arquivo HTML chamado missao_trybe.html que tenha a seguinte estrutura:
  * Tag <title> com o seguinte texto “Trybe”;
  * Tag <H1> com o seguinte texto “Missão da Trybe”;
  * Tag <p> com o seguinte texto “Gerar oportunidade para pessoas”;
  * Salve o arquivo em qualquer lugar da sua máquina com a extensão html

2. Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.

3. Após criar o container acesse a página HTML que está rodando no servidor em seu browser.

4. Acesse o arquivo missao_trybe.html e acrescente a tag <p> com o seguinte texto “Nosso negócio é GENTE! #VQV”;

5. Obtenha o id do container httpd:2.4;

6. Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host;

7. Agora pare o container httpd:2.4;

8. Exclua o seu container;

9. Verifique se a pasta onde você salvou o arquivo html permanece no mesmo lugar;

10. Obtenha o IMAGE ID do servidor;

11. Depois de obter o IMAGE ID, exclua a imagem.

Pasta exercise-two

Exercício 2:

Crie o arquivo Compose para subir um ghost blog, essa plataforma é similar com o Wordpress e é utilizada para criar sites de conteúdo. Você pode ler no site oficial como criar conteúdos nele e utilizá-lo. Para esse exercício, utilizaremos apenas sua página de exemplo:

1. Utilize a versão “3” no arquivo;

2. Crie um service para subir a plataforma, utilize a imagem ghost:1-alpine;

3. Publique a porta 2368, fazendo bind também para a 2368;

4. Suba a aplicação utilizando o docker-compose e então acesse a porta publicada para validar se deu tudo certo.

Pasta exercise-three

Exercício 3:

Por padrão o ghost utiliza um sqlite interno para salvar as informações, porém, vamos alterar esse comportamento para exercitar nossos conhecimentos:

1. Crie um novo serviço para o nosso banco de dados, podemos utilizar um mysql, utilize a imagem mysql:5.7;

2. Precisamos definir uma senha root para o nosso bd, para isso utilize a variável MYSQL_ROOT_PASSWORD, lembre-se que é possível utilizar a sintaxe ${} para passar uma env do host, para a env do container;

3. Agora precisamos configurar nosso service com o ghost para utilizar o MySQL, para isso defina a variável database__client para mysql;

4. Defina o nome ghost para o nome do database utilizando a variável database__connection__database;

5. E então, indique a conexão para o nosso MySQL na env database__connection__host;

6. Para definir a pessoa usuária (root) e senha (a mesma que definimos no nosso MySQL), utilize respectivamente as envs database__connection__user e database__connection__password.

7. Utilize a opção depends_on para criar relações de dependências entre os serviços.

8. Suba o ambiente com o novo arquivo usando o docker-compose e então acesse a porta.

Pasta exercise-four

Exercício 4:

Agora vamos praticar os conceitos de volumes e networks.

1. Configure o nosso serviço mysql para utilizar um volume, conforme vimos no conteúdo, utilize o caminho target /var/lib/mysql.

2. Ao invés de utilizar a rede padrão criada pelo Compose, defina uma rede chamada my-network para a comunicação dos dois serviços.

3. Suba o ambiente com o novo arquivo usando o docker-compose e então acesse-o.

Pasta exercise-five

Exercício 5:

Agora vamos criar um novo arquivo Compose, para rodarmos uma aplicação React, conforme vimos alguns exemplos do conteúdo:

1. Inicie um novo projeto ReactJS utilizando o create-react-app;

2. Crie o Dockerfile, conforme vimos na aula passada;

3. Crie um novo arquivo Compose utilizando a versão 3;

4. Defina um serviço no arquivo para nosso app, para isso utilize a opção build para apontar para o Dockerfile;

5. Publique a porta exposta no Dockerfile fazendo bind para a porta 8080 do localhost;

Pasta exercise-six

Exercício 6:

Para simularmos o processo de desenvolvimento, faça a alteração em alguma parte do código do app react, e então execute o comando para subir o serviço novamente, “rebuildando” a imagem para aplicar as alterações.

Pasta exercise-seven

Exercício 7:

Crie um arquivo Compose para subir o Wordpress com MySQL:

1. Utilize a imagem wordpress:latest e mysql:5.7;

2. Faça bind da porta 80 do container do wordpress para 8080 do host;

3. Defina as seguintes variáveis para o wordpress:
  * WORDPRESS_DB_HOST: db:3306
  * WORDPRESS_DB_USER: wordpress
  * WORDPRESS_DB_PASSWORD: wordpress
  * WORDPRESS_DB_NAME: wordpress

4. Defina as seguintes variáveis para o mysql:
  * MYSQL_ROOT_PASSWORD: somewordpress
  * MYSQL_DATABASE: wordpress
  * MYSQL_USER: wordpress
  * MYSQL_PASSWORD: wordpress

5. Defina o volume db_data para o mysql;

6. Utilize o parâmetro depends_on para criar dependência entre os serviços;

7. Adicione a política de restart com o valor always aos serviços;

8. Suba os serviços utilizando docker-compose e abra no terminal para validar o funcionamento.
