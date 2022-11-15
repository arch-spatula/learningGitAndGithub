# Git Fetch와 Git Pull

[Git Fetch와 Git Pull 명령어의 차이점](https://www.freecodecamp.org/korean/news/git-fetch-vs-pull/)

단순한 팁으로 `git fetch`는 로컬 리포랑 원격 리포의 차이를 볼 수 있습니다.

```shell
git fetch
```

```shell
git pull
```

혹은

```shell
git pull <remote> <branch>
```

으로 명령하면 로컬 리포의 브랜치 작업이 덮어쓰기가 됩니다.

# .gitignore

`.gitignore` 파일도 생성합니다. git 작업 규모가 작을 때는 상관없지만 나중에 생성하도록 합니다. git 작업을 가볍게 유지할 수 있습니다. git이 추적하지 않을 대상을 지정합니다.

# pull request 는 다른 사람들이 pull하라는 요청

# git checkout -b branch name

다른 브랜치 생성방법

# 로컬에서 원격리포 만들기(git add remote origin branch)

https://stackoverflow.com/questions/11266478/git-add-remote-branch

```shell
git remote add github git://github.com/jdoe/coolapp.git
```

https://www.youtube.com/watch?v=JUKZVlIDrtY

[git - checkout과 reset의 차이점](https://www.youtube.com/shorts/tGBAcAVKG-w)

[Git Explained in 100 Seconds](https://www.youtube.com/watch?v=hwP7WQkmECE)

![Pull & Push](<img/image%20(6).png>)

# git config --list

워 이런식으로 되어 있습니다. 초기 설체에 적극적으로 알아보도록 합니다.

```shell
git config --list
```

```txt
push.default=simple
user.name=YourName
user.email=YourEMail
core.repositoryformatversion=0
core.filemode=false
core.bare=false
core.logallrefupdates=true
core.symlinks=false
core.ignorecase=true
remote.origin.url=RepositoryURL
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
branch.master.remote=origin
branch.master.merge=refs/heads/master
branch.develop.remote=origin
branch.develop.merge=refs/heads/develop
```
