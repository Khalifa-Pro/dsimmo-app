pipeline {
    agent any

    environment {
        SCANNER_HOME = tool 'Sonar'  // Nom de l'installation SonarQube Scanner configurée dans Jenkins
    }

    stages {
        stage('SonarQube Analysis - Angular') {
            steps {
                script {
                    // Exécuter l'analyse avec SonarQube Scanner
                    withSonarQubeEnv('SonarQube') {  // Nom du serveur SonarQube configuré dans Jenkins
                        sh "${SCANNER_HOME}/bin/sonar-scanner -Dsonar.projectKey=test-dsimmo-app -Dsonar.sources=. -D.sonar.host.url=http://172.17.0.3:9000 -Dsonar.login=sqp_d5d6859a94ad7dd261a37dcdc14cbbe0a21f11b1"
                    }
                }
            }
        }

        stage('Quality Gate') {
            steps {
                script {
                    // Attendre et vérifier le résultat du Quality Gate de SonarQube
                    timeout(time: 1, unit: 'HOURS') {
                        waitForQualityGate abortPipeline: true
                    }
                }
            }
        }
    }

    post {
        always {
            // Nettoyer l'espace de travail après chaque build
            cleanWs()
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}