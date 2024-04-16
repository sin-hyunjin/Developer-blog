package com.hyunjin.blogback.common;

public interface ResponseCode {

    /** HTTP Status 200 */
    String SUCCESS = "SU"; // 성공적인 요청일ㄷ 때

    /** HTTP Status 400 */
    String VALIDATION_FAILED = "VF"; // 유효성 검사 실패
    String DUPLICATE_EMAIL = "DE"; // 중복된 이메일
    String DUPLICATE_NICKNAME = "DN"; // 중복된 닉네임
    String DUPLICATE_TEL_NUMBER = "DT"; // 중복된 전화번호
    String NOT_EXISTED_USER = "NU"; // 존재하지 않는 사용자
    String NOT_EXISTED_BOARD = "NB"; // 존재하지 않는 게시물

    /** HTTP Status 401 */
    String SIGN_IN_FAIL = "SF"; // 로그인 실패
    String AUTHORIZATION_FAIL = "AF"; // 인증 실패

    /**
     * HTTP Status 403
     */
    String NO_PERMISSION = "NP"; // 권한 없음

    /**
     * HTTP Status 500
     */
    String DATABASE_ERROR = "DBE"; // 데이터베이스 오류
}
