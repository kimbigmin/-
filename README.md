## 공통 API
📌 상태관리
```
hp.store.getState(); // data: 데이터 정보, view: 페이지 정보
```

<br/>

📌 state 값 조회
```
hp.getState('isLogin'); // true
```

<br/>

📌 state 값 변경
```
hp.setState('isLogin', false); // false
```

<br/>

📌 alert 
```
hp.alert('message', Options?);
```

```
➡️ Options
type?: 'alert' | 'confirmAlert'
title?: string
confirm?: string
cancel?: string
color?: 'error' | 'info' | 'success' | 'warning'
callbackFunc?: Function
```

<br/>

📌 loading 
```
hp.showLoading('message', Options?);
hp.hideLoading(); == hp.showLoading('hide');
```

```
➡️ Options
color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
disableShrink?: boolean
size?: number | string
thickness?: number
```

## 협업
hp = Helth Paps
main color = #66bb6a

<br>

## 논의
📌 스타일 파일은 어떻게 관리할 지 나중에 얘기 (/index.tsx)

📌 학생 결과 입력창 너무 작음 UI 수정 필요할듯 (Form/index.tsx)

📌 footer가 필요한가... 갤럭시는 모르겠는데 아이폰 사파리 기준으로 뒤로가기든 앞으로가기든 다 구현되어있음
