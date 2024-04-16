package com.hyunjin.blogback.provider;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

/** jwt를 발급받기 위한 Provider */
@Component // 제어역선을 통한 의존성 주입
public class JwtProvider {

    @Value("${secret-key}")
    private String secretKey;
    /** 토큰 생성 메서드 */
    public String create(String email) {
        // 토큰 만료시간 (현재 시간에 1시간 뒤)
        Date expiredDate = Date.from(Instant.now().plus(1, ChronoUnit.HOURS));
        Key key = Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));

        // jwt 토큰 생성
        String jwt = Jwts.builder()
                .signWith(key,SignatureAlgorithm.ES256) //SignatureAlgorithm.ES256 알고리즘 사용
                .setSubject(email).setIssuedAt(new Date()).setExpiration(expiredDate) //주체는 email, 생성시간은 현재 시간
                .compact();

        return jwt;
    }
    /** 토큰 검증 메서드 */
    public String validate(String jwt) {
        Claims claims = null;
        Key key = Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));
        try{
            claims = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(jwt)
                    .getBody();

        }catch (Exception exception) {
            exception.printStackTrace();
            return null;
        }
        return claims.getSubject();
    }


}
