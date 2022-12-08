pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                echo 'Building ..'
                bat "npm install"
                bat "npm run build"
            }
        }
        stage("Test"){
            steps {
                echo 'Testing ..'
            }
        }
        stage("Deploy") {
            steps {
                echo 'Deploying ..'
                bat "node_modules\\.bin\\pm2 stop all"
                bat "if exist C:\\Users\\Administrator\\Desktop\\build\\data (move C:\\Users\\Administrator\\Desktop\\build\\data C:\\Users\\Administrator\\Desktop)"
                bat "if exist C:\\Users\\Administrator\\Desktop\\build (rmdir /s /q C:\\Users\\Administrator\\Desktop\\build\\)"
                bat "xcopy /E /I ${WORKSPACE}\\build\\* C:\\Users\\Administrator\\Desktop\\build\\"
                bat "rmdir /s /q C:\\Users\\Administrator\\Desktop\\build\\data\\"
                bat "if exist C:\\Users\\Administrator\\Desktop\\data (move C:\\Users\\Administrator\\Desktop\\data C:\\Users\\Administrator\\Desktop\\build)"
                bat "node_modules\\.bin\\pm2 start all"
            }
        }
        stage('gitlab') {
          steps {
             echo 'Notify GitLab'
             updateGitlabCommitStatus name: 'build', state: 'pending'
             updateGitlabCommitStatus name: 'build', state: 'success'
          }
       }
    }
}

//TODO : Replace data folder with previous one.
