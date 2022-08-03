pipeline {
    agent {
        label 'react'
    }
    stages {
        stage('Checkout') {
            steps {
                git url: "https://github.com/ssong91DEV/react-project.git/",
                branch: "main",
                poll: true,
                changelog: true
            }
        }
        stage("Docker Image Build") {
            steps {
                script {
                    dockerImage = docker.build("songhb91/react-project")
                    dockerImage.push("latest")
                }
            }
        }
        stage("Docker Image Push") {
            steps {
                script {
                    docker.withRegistry('', "dockerhub-91") {
                        dockerImage.push()
                    }
                }
            }
        }

        stage("Clean") {
            steps {
                script {
                    try {
                        if(isUnix()) {
                            sh('docker stop react-project')
                            sh('docker rm react-project')
                        } else {
                            bat('docker stop react-project')
                            bat('docker rm react-project')
                        }
                    } catch(err) {
                        echo err.message
                    }
                }
            }
        }

        stage("Pull Image & Run") {
            steps {
                script {
                    docker.withRegistry("", "dockerhub-91") {
                        app = docker.image("songhb91/react-project:latest")
                        app.pull()
                        app.run("-p 9120:80 --name react-project")
                    }
                }
            }
        }
    }
}