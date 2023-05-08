# Desafio-NodeJs-API-Rest

# 1. Tecnologias utilizadas com suas respectivas versões.

MySQL: Banco de dados utilizado para armazenar e gerenciar os dados. Para simular o banco de dados localmente, foi utilizado o XAMPP, uma ferramenta que inclui o MySQL, PHP e Apache em um pacote fácil de instalar. Foi baixada a versão 8.2.4 do XAMPP, que inclui o MySQL 8.2.4.
link para baixar: https://www.apachefriends.org/pt_br/download.html
video de como instalar: https://www.youtube.com/watch?v=i_ypCik4VX0

Node.js: Plataforma de desenvolvimento de aplicativos JavaScript do lado do servidor. Foi utilizada a versão v18.13.0.

Express.js: Framework para Node.js utilizado para criar aplicativos da Web e APIs. As seguintes versões foram utilizadas para as bibliotecas de tipos e dependências do Express.js:

    "@types/cors": "^2.8.13"
    "@types/express": "^4.17.17"
    "cors": "^2.8.5"
    "express": "^4.18.2"
    "express-async-errors": "^3.1.1"
    Outras dependências utilizadas no projeto:
    "mysql2": "^3.3.0": Driver de banco de dados para o MySQL
    "reflect-metadata": "^0.1.13": Biblioteca para trabalhar com metadados em tempo de execução
    "typeorm": "0.3.15": Biblioteca ORM (Object-Relational Mapping) para o TypeScript

Além disso, foram utilizadas as seguintes dependências de desenvolvimento:

    "ts-node": "10.7.0": TypeScript em tempo de execução
    "ts-node-dev": "^2.0.0": Monitoramento de arquivos TypeScript para reinicialização automática do servidor
    "typescript": "4.5.2": Linguagem de programação utilizada para escrever o código-fonte do projeto.

# 2. Orientações de instalação e execução do ambiente em localhost;

    1.Abra o Prompt de Comando e navegue para a área do seu sistema onde deseja clonar o repositório.
    Em seguida, digite o seguinte comando:

    git clone https://github.com/AllanFelizzeti/Desafio-NodeJs-API-Rest.git

    Isso irá clonar o repositório do GitHub para a sua máquina.

    2.Navegue pelas pastas do projeto até a pasta desafioRest e abra no seu editor de código favorito e, em seguida, abra o terminal.
    Para instalar as dependências do projeto, digite o seguinte comando:
    npm install
    ou
    yarn install
    Isso irá instalar todas as dependências necessárias para executar o projeto.

# 3. Orientações de execução do banco de dados, com sua estrutura (incluir Dump SQL das tabelas);

Para isso, basta iniciar o XAMPP e iniciar os serviços do Apache e do MySQL. Em seguida, acesse o painel de controle do MySQL clicando no botão "Admin" ao lado da linha correspondente ao MySQL. Isso abrirá o phpMyAdmin, uma ferramenta de gerenciamento de banco de dados.

Para importar o dump para um banco de dados vazio ou para um banco de dados existente, siga os seguintes passos:

    1.Crie um banco de dados vazio ou selecione o banco de dados existente para o qual deseja importar o dump, no phpMyAdmin.

    2.No phpMyAdmin, selecione o banco de dados para o qual deseja importar o dump.

    3.Clique na guia "Importar" na parte superior da página.

    2. Navegue pelas pastas do projeto até encontrar a pasta 'api', selecione o arquivo SQL que deseja importar.

    5.Clique no botão "Executar" na parte inferior da página para iniciar a importação.

Para mais detalhes sobre como fazer a importação do arquivo SQL, um vídeo tutorial pode ser encontrado no seguinte link: https://www.youtube.com/watch?v=mFI88qPAdJI. Após a importação, o banco de dados deve estar pronto para ser utilizado novamente.

# 4. Execução da aplicação;

Após a instalação das dependências e da configuração do banco de dados, execute o seguinte comando para iniciar o servidor:
1.Navegue pelas pastas do projeto até a pasta desafioRest no editor de código, pelo terminal e rode o comando:
npm run server
Se tudo estiver correto, você verá a mensagem "Database ok" e "Server started on port 3333🚀" no terminal.
É importante notar que o projeto só poderá ser executado se o banco de dados já estiver rodando.

Após isso para fazer os teste das rotas disponiveis logo abaixo da pasta API um arquivo Insomnia_testeDasrotas
que é um tipo json nesse arquivo contém todas as rotas.

# 5. Documentação com uma explicação do formato de entrada esperado de cada rota,bem como o formato de saída de dados de cada rota.

    OBS: Juntamente com API também se encontam um Arquivo Json Do Insomnia
        e um Arquivo de dump das tabelas do banco de dados, após clonar o repositorio
        só abrir VS Code é só arratar para seu maquina para extrair.

        Se tudo estiver ok so abrir o Insomnia importar o arquivo descrito acima usando passo a passo 2 desse modulo
        primeira rota a ser testada deve ser Post para criar uma Empresa, em seguida a Get para ver a Empresa criada.
        Assim é possivel testar a rota Put para mudar algum dado da Empresa.
        Há também a Post para criar uma Licença passando o id da empresa em seguida a rota Get para ver a licença criada.
        A seguir é possível testar a Put alterando algum dados da Licença por último a Delete para exluir algum dado da Licença
        e a´pos o Delete da Empresa.

        OBS: Nas rotas de PUT e Belete http://localhost:3333/lice/1 nunca esqueça de passar o id que deseja alterar ou deletar.

        video de instalação do Insomnia: https://www.youtube.com/watch?v=4mZwTUXndUs

        Para importar um aruivo para o Insomnia faça:
           - no canto inferior esquerdo tem Preferences clique
           - vai abri uma tela Insomnia Preferences
           - logo abaixo tera um menu escolha Data clique em importar
           - escolha ou arraste o arquivo clique em scan e depoid e importar
           - pronto vai abrir já na interface pricital só trocar de Design para Debug
           - as rotas estão dividas e, duas pastas Licença e Empresa

1.) Para importar o arquivo test.sql em seu gerenciador de banco de dados favorito, você pode seguir os seguintes passos:

    1.1 Abra o VScode e acesse o arquivo test.sql que está localizado abaixo do arquivo README no repositório.

    1.2 Clique com o botão direito do mouse no arquivo e selecione "Copiar caminho do arquivo".

    1.3 Abra o gerenciador de banco de dados e selecione a opção de importação.

    1.4 Cole o caminho do arquivo que você copiou na etapa 2 no campo "Caminho do arquivo".

    1.4 Selecione o banco de dados que você deseja importar e clique em "Importar".

2.) Para importar o arquivo JSON do Insomnia para o seu ambiente local, siga estes passos:

    2.1 Navegue até a pasta "api" no repositório.

    2.2 Localize o arquivo JSON que você deseja importar para o Insomnia.

    2.3 Clique com o botão direito do mouse no arquivo e selecione "Copiar caminho do arquivo".

    2.4 Abra o Insomnia e clique em "Importar/Exportar" no menu principal.

    2.5 Selecione "Importar dados" e escolha "Da área de trabalho".

    2.6 Cole o caminho do arquivo que você copiou na etapa 3 no campo "Caminho do arquivo".

    2.7 Selecione o arquivo JSON e clique em "Importar".

# 6. Que o banco de dados possua chaves estrangeiras que mantenha a integridade entre as duas tabelas (toda licença deve pertencer a uma empresa)

    Aqui nesse quesito ao importar o arquivo.sql o mesmo não trouxe a Chave estrageira
    no campo empresa_id, para fazer isso é preciso no gerenciador de banco de dados, excluir
    a migration CreateLicencataple... e a e drop a tabela lecenca.

    Após isso no treminal do projeto pare a aplicação e rode o comando a baixo
    - npm run typeorm -- -d ./src/database/data-source.ts migration:run
    esse comando vai gerar a tabela novamente com a Chave estrangeira.

    Para ver o relacionamento no PHPAdmin selecione a tabela no menu superior term um
    botão Insert clique nele, no compo empresa_id vera que já esta buxando o id das empresas
    já cadastradas.
