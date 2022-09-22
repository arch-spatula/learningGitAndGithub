
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

