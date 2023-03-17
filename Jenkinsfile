pipeline {
    agent any

    stages {
        stage('Clonar Repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/lariibravo/modulo12.git'
            }
        }
        
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }
        stage('Iniciar servidor') {
            steps {
                 sh 'NO_COLOR=1 npm run cy:run'
            }

        }
}
}