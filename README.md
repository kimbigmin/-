## 공통 API
📌 Helth Paps 상태관리
```
hp.store.getState();
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
hp.alert('내용', 옵션);
```

```
옵션
type: 'alert' | 'confirmAlert' // default = 'alert'
titleLabel?: string
confirmLabel?: string
cancelLabel?: string
closeHandler?: Function
```

## 용어
hp = Helth Paps

