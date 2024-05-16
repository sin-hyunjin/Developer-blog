package com.hyunjin.blogback.dto.request.auth;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SighUpRequestDto {

    // 이메일: 필수값이고 이메일 형식이어야 함
    @NotBlank
    @Email
    private String email;

    // 비밀번호: 필수값이며 최소 8자, 최대 20자여야 함
    @NotBlank
    @Size(min = 8, max = 20)
    private String password;

    // 닉네임: 필수값
    @NotBlank
    private String nickname;

    // 전화번호: 필수값, 숫자로만 이루어져 있으며 11자 이상 13자 이하여야 함
    @NotBlank
    @Pattern(regexp = "^$[0-9]{11,13}$")
    private String telNumber;

    // 주소: 필수값
    @NotBlank
    private String address;

    // 상세 주소
    private String addressDetail;

    // 개인정보 동의 여부: 필수값이며 true 여야 함
    @NotNull
    @AssertTrue
    private Boolean agreedPersonal;

}
