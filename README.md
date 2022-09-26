
# git add, commit으로 파일 기록해놓을 수 있음

```url
https://codingapple.com/course-status/
```
"git add, commit으로 파일 기록해놓을 수 있음"을 참조했습니다.


```zsh
git add 파일명
git commit -m '아무메세지'
```

`git add (파일명)`은 git으로 추적할 파일을 올리는 명령입니다.
`git add .`으로 더 간소하게 모든 파일을 추적한다고 올리는 명령입니다.

`git commit -m "아무메시지"`

2단계로 구분한 이유는 기록이 필요한 것과 필요없는 것을 구분하기 위함입니다.
이미지는 특별하지 않은 경우 업데이트할 필요가 없습니다.

로컬 리포
커밋을 하기 전 영역입니다.


staging area는 git add추가 된 파일들이 있는 영역입니다.

원격 리포
git add로 추가되고 git commit으로 저장하는 영역입니다.

관련 도식화를 따로 구하겠습니다.

```mermaid
    gitGraph
       commit
       commit
       branch develop
       commit
       commit
       commit
       checkout main
       commit
       commit
```
머메이드에서 이런 도식 유용해보입니다.

```mermaid
flowchart LR;

id1[( 작업폴더 )] -- "git add" --> id2[(stagingArea)] -- "git commit" --> id3[(repoitory)]
```

```zsh
git status
```

중간에 git의 상태들을 확인 할 수 있는 명령입니다.

```zsh
git log --all --online
```

커밋한 내역 확인하기


```zsh
git config --list
```

설정한 환경 확인하는 커맨드



# git add, commit, diff 쉽게 하는 법 (VSCode)

커밋은 하기 전후 확인하고 진행하는 것이 기본이다.

```zsh
git diff
```
한계가 가 많다. 실제로 사용하지 않는다.

```zsh
git difftool
```
vi 모드에서 확인할 수 있다.

git difftool도 직접활용할 일이 많지 않다. 에티터 플러그인을 활용하는 것으로 해결하도록 한다.

# git 에서 branch 만들기

기능을 추가하거나 중간분기에 복사본을 만들어야 할 때 branch를 만들 수 있다.
처음부터 추가하면 안정적이지 않을 수 있다.

기능을 추가하거나 중간분기에 복사본을 만들어야 할 때 branch를 만들 수 있다.
처음부터 추가하면 안정적이지 않을 수 있다. 이 텍스트는 복사하는 거 까먹지 마세요.