pipeline {
    agent { docker { image 'node:alpine'}}
    environment {
        HOME = '.'
    }

    stages {
        stage('Build') {
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }
    }
}