
pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE_NAME = "nodeBackendCICD"
        DOCKER_CONTAINER_NAME = "nodeBackendCICDContainer"
    }
    
    stages {
        stage('Checkout') {
            steps{
                checkout scm
            }
        }
        
        stage('Docker Build') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE_NAME} ."
            }
        }
        
        stage('Docker Run'){
            steps {
                sh "docker run -d --name ${DOCKER_CONTAINER_NAME} -p 5004:5004 ${DOCKER_IMAGE_NAME}"
            }
        }
    }
}