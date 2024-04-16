## 1. Basic Authentication 
 - 사용자 이름 / 비밀번호를 Base64로 인코딩하여 Authorization 헤더에 포함하여 전송 
 - ex ) Authorization : Basic ~~~~

단점 : 매우 안전하지 않음.... , SSL/TLS와 함께 사용 됨

## 2. Bearer Token Authentication
 - 헤더에 토큰을 포함하여 전송 Authorization 헤더에 포함하여 전송
 - JWT 을 사용하여 인증
 - 간단한 방식, 상태를 유지하지 않음, 확장성이 높음
 - ex) Authorization : Bearer ~~~~ 

**JWT란 ?** 
>JWT (JSON Web Token) : 클레임 이라고 불리는 정보를 JSON 형태로 안전하게 전송하기 위한 토큰 
- 인증과 정보 교환에 사용, 서명이 되어 있어서 신뢰성 확보가 가능
1. Header : 토큰의 타입과 사용된 알고리즘 정보를 담고 있음, Base64Url로 인코딩
2. payload : 클레임 정보, 대상, 발행자, 만료 시간 등 다양한 정보가 포함됨, Base64Url로 인코딩
3. Signature : Header +  Payload +  Secret Key를 사용하여 생성된 서명 

인증, 정보교환 

**장점** 
- 상태 유지 X
- 간단하고 자기 포함적 
- 확장성이 높음 

**단점**
- 크기 : 클레임이 많을 수록 토큰의 크기가 커짐
- 보안 : 서명은 되어있지만 암호화는 되어있지 않음. 중요한 정보를 JWT에 포함하면 안됨!
- 토큰 관리 : 만료 시간, 갱신 


## 3. OAuth
 - 토큰 기반 인증 방식, 사용자가 직접 자격을 증명 X 미리 인증받아서 토큰을 발급 받음
 - 이 토큰을 활용하여 API를 요청하는 방식 OAuth2.0
 - kakao / naver / git / facebook .... 
 

## 4. API Key / Session based Authentication 

