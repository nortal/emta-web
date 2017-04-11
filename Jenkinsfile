node {

  properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '5', daysToKeepStr: '', numToKeepStr: '10')), pipelineTriggers([])])

  stage('checkout') {
    checkout scm
  }
  stage('install') {
    sh 'npm install'
  }
  stage('build') {
    sh 'npm run build'
  }
  stage('archive') {
    sh 'tar -C dist -czf emta-web-dist.tar.gz .'
    archiveArtifacts artifacts: 'emta-web-dist.tar.gz', onlyIfSuccessful: true
  }


}
