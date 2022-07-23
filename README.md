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
hp.alert('message', Options);
```

```
➡️ Options
type: 'alert' | 'confirmAlert'
title?: string
confirm?: string
cancel?: string
color?: 'error' | 'info' | 'success' | 'warning'
callbackFunc?: Function
```

<br/>

📌 loading 
```
hp.showLoading('message', Options);
hp.hideLoading(); // == hp.showLoading('hide')
```

```
➡️ Options
color: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
disableShrink: boolean
size: number | string
thickness: number
```

## 용어
hp = Helth Paps

