node {

  properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '5', daysToKeepStr: '', numToKeepStr: '10')), pipelineTriggers([])])

  stage('checkout') {
    checkout scm
  }
  stage('install') {
    sh 'npm install'
  }

}
