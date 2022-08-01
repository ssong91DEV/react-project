pipeline {
    agent any
    environment {
        GIT_URL = "https://github.com/ssong91DEV/react-project.git/"
    }

    stages {
        stage("React-Project Test") {
            agent {
                node {
                    label 'react-project'
                }
            }
            stages {
                stage("Git Checkout") {
                    steps {
                        git url: GIT_URL,
                        branch: "main",
                        poll: true,
                        changelog: true
                    }
                }
            }
        }
    }

    // stages {
    //     stage('Parallel Stage') {
    //         parallel {
    //             stage('Build and Deploy') {
    //                 agent {
    //                     node {
    //                         label 'react-test'
    //                     }
    //                 }
    //                 stages {
    //                     stage('Checkout') {
    //                         steps {
    //                             git url: GIT_URL,
    //                             branch: "main",
    //                             poll: true,
    //                             changelog: true
    //                         }
    //                     }
    //                     stage("Docker Image Build") {
    //                         steps {
    //                             script {
    //                                 dockerImage = docker.build("songhb91/react-project")
    //                                 dockerImage.push("latest")
    //                             }
    //                         }
    //                     }
    //                     stage("Docker Image Push") {
    //                         steps {
    //                             script {
    //                                 docker.withRegistry('', "dockerhub-91") {
    //                                     dockerImage.push()
    //                                 }
    //                             }
    //                         }
    //                     }
    //                     stage("Docker Deploy") {
    //                         steps {
    //                             build job: "deploy on docker",
    //                             parameters: [
    //                                 string(name: 'node', value: 'docker-deploy'),
    //                                 string(name: 'name', value: 'react-project'),
    //                                 string(name: 'port', value: '80'),
    //                                 string(name: 'expose', value: '9120')
    //                             ]
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
}