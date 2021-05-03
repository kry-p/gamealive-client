# gamealive-client

<p>
  <image src="https://img.shields.io/badge/using-React.js-%2361dafb?style=flat-square&logo=react"/>&nbsp
</p>

게임물관리위원회의 실시간 심의정보를 제공하는 웹 사이트 gamealive의 클라이언트입니다.

## 실행 전 요구사항

아래 패키지 매니저는 수동 설치를 필요로 합니다.

+ npm

또, 클라이언트 단독 사용 시 ```serve``` npm 모듈을 전역 설치하여야 합니다.

## 실행 방법

소스를 다운로드 후 직접 빌드하거나, Release 빌드를 다운로드해 로컬에 저장합니다.  

* 소스를 다운로드하였을 경우 여기부터 진행합니다.

다운로드 후 서버 루트 디렉터리에서 아래 명령 중 하나를 실행합니다.   
```yarn install```  
```npm install```

오프라인 설치 시에는 Release 빌드를 다운로드 후 아래 명령을 실행합니다.  
```yarn install --offline```

Yarn이 설치되어 있지 않을 경우 [링크](https://github.com/yarnpkg/yarn/release)에서 다운로드한 파일로 아래 명령을 실행합니다.  
```node (yarn 모듈 위치) install --offline```

위 작업이 완료되면  ```yarn build```나 ```npm run build```로 프로덕션 빌드를 작성합니다.  

* Release를 다운로드한 경우 여기부터 진행합니다.  

프로덕션 빌드가 들어 있는 디렉터리에 serve 명령을 실행합니다. 아래는 예시입니다.   
```serve -s build```

## 🚧 구현 예정인 기능 🚧

+ 자율심의 게임물 정보
+ 커뮤니티

## FAQ & Known problems

아직 내용이 없습니다. 궁금한 점이나 문제가 있다면 Issue 란에 질문해 주세요.
