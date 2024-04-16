package com.hyunjin.blogback.global.auth.jwt.filter;

import com.hyunjin.blogback.global.auth.jwt.provider.JwtProvider;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

/**
 * 1. 클라이언트가 보낸 HTTP 요청이 서버에 도착
 * 2. 이 요청을 JwtAuthenticationFilter 클래스에서 처리. 이 클래스는 Spring Framework에서 제공하는 OncePerRequestFilter를 상속받아 구현된 필터이며 이는 각각의 요청이 한 번만 실행되도록 함.
 * 3. doFilterInternal() 메서드에서는 클라이언트가 보낸 요청의 헤더에서 Authorization 헤더를 가져와 Bearer 토큰을 파싱하는 작업을 수행
 * 4. parseBearerToken() 메서드에서는 Authorization 헤더에서 토큰을 추출. 이 토큰은 "Bearer " 문자열 이후에 오는 부분입니다.
 * 5. 추출된 토큰은 이후 인증과 권한 부여 과정에서 활용된다
 */
@Component
@RequiredArgsConstructor // 필수 생성자를 만들어줌
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtProvider jwtProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            // HTTP 요청에서 Bearer 토큰을 추출
            String token = parseBearerToken(request);
            if (token == null) {
                // 토큰이 없다면 다음 필더로 이동
                filterChain.doFilter(request, response);
                return;
            }
            // 추출한 토큰의 유효성 검사를 함
            String email = jwtProvider.validate(token);
            if ( email == null) {
                // 토큰이 유효하지 않다면 다음 필터로 이동
                filterChain.doFilter(request, response);
                return;
            }
            // 유저 정보를 담은 AuthenticationToken을 생성
            AbstractAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(email, null, AuthorityUtils.NO_AUTHORITIES);
            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request)); // 웹인증 세부정보 소스

            // 인증 정보를 SecurityContext에 설정
            SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
            securityContext.setAuthentication(authenticationToken);

            SecurityContextHolder.setContext(securityContext);
        } catch (Exception exception){
            exception.printStackTrace();
        }

        // 다음 필터로 요청 전달
        filterChain.doFilter(request, response);
    }

    /** request header로부터 Authorization을 가져와서 Bearer 토큰을 파싱 */
    private String parseBearerToken(HttpServletRequest request) {
        String authorization = request.getHeader("Authorization");

        // Authorization 헤더가 있는지 확인
        boolean hasAuthorization = StringUtils.hasText(authorization); // hasText : null or 0 or 공백이라면 False 반환
        if(!hasAuthorization) return null;

        // Bearer 토큰인지 확인
        boolean isBearer = authorization.startsWith("Bearer ");
        if(!isBearer) return null;

        // 7번쨰 자리부터 토큰 추출
        String token = authorization.substring(7);

        return token;
    }
}
