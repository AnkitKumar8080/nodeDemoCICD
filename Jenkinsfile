
pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE_NAME = "nodebackendcicd"
        DOCKER_CONTAINER_NAME = "nodebackendcicd_container"
        COMMIT_HASH_VERSIONING = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
    }
    
    stages {
        stage('Checkout') {
            steps{
                checkout scm
            }
        }
        
        stage('Docker Build') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE_NAME}:${COMMIT_HASH_VERSIONING} ."
            }
        }

        stage('Stop and Remove Old Container') {
          steps {
                sh "docker stop ${DOCKER_CONTAINER_NAME}"
                sh "docker rm ${DOCKER_CONTAINER_NAME}"
          }

        }
        
        stage('Docker Run'){
            steps {
                sh "docker run -d --name ${DOCKER_CONTAINER_NAME} -p 5004:5004 ${DOCKER_IMAGE_NAME}:${COMMIT_HASH_VERSIONING}"
            }
        }
    }
}