/#Configurações Iniciais do Projeto Django:
Ao criar um novo projeto Django, você precisa fazer algumas configurações iniciais.

1. **Criar um Ambiente Virtual (Opcional, mas recomendado):** É uma boa prática criar um ambiente virtual para isolar as dependências do seu projeto Django do sistema operacional. Você pode usar a ferramenta `virtualenv` para criar um ambiente virtual.
2. **Instalar o Django:** Use o pip (gerenciador de pacotes do Python) para instalar o Django. Execute o seguinte comando no seu terminal:

pip install django

Criar um Novo Projeto Django: Use o comando django-admin ou manage.py para criar um novo projeto Django. Por exemplo:

django-admin startproject nomedoseuprojeto

Configurar o Banco de Dados: Abra o arquivo settings.py e configure o banco de dados que você deseja usar. O Django suporta vários bancos de dados, como SQLite, PostgreSQL, MySQL, entre outros.


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

