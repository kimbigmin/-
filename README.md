## 공통 API
📌 Helth Paps 상태관리
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
type: 'alert' | 'confirmAlert' // default = 'alert'
titleLabel?: string
confirmLabel?: string
cancelLabel?: string
closeHandler?: Function
```

## 용어
hp = Helth Paps

