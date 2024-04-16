package com.hyunjin.blogback.global.dto.response;

import com.hyunjin.blogback.global.common.ResponseCode;
import com.hyunjin.blogback.global.common.ResponseMessage;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

/** 모든 responseDto 코드와 메세지가 있음 */
@Getter
@AllArgsConstructor
public class ResponseDto {

    private String code;
    private String message;

    private static ResponseEntity<ResponseDto> databaseError() {
        ResponseDto responseBody = new ResponseDto(ResponseCode.DATABASE_ERROR, ResponseMessage.DATABASE_ERROR);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseBody);
    }
}
