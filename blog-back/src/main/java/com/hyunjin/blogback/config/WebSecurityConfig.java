package com.hyunjin.blogback.config;

import com.hyunjin.blogback.filter.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    /** Spring Security 설정 메서드 */
    @Bean
    protected SecurityFilterChain configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                // CORS 설정을 적용 (Cross-Origin Resource Sharing)
                .cors(cors -> cors.configurationSource(corsConfigrationSource()))
                // CSRF 보호 기능을 비활성화 (Cross-Site Request Forgery)
                .csrf(CsrfConfigurer::disable)
                // 세션 관리 정책을 설정합니다. (STATELESS: 세션을 사용하지 않음)
                .sessionManagement(sessionManagement -> sessionManagement
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                // HTTP 요청에 대한 인증 및 권한 설정을 구성
                .authorizeHttpRequests(request -> request
                        .requestMatchers("/", "api/v1/auth/**", "api/v1/search/**", "file/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "api/v1/board/**", "api/v1/user/*").permitAll()
                        .anyRequest().authenticated()
                )
                // 인증 오류 처리를 위한 핸들러를 설정
                .exceptionHandling(exceptionHandling -> exceptionHandling
                        .authenticationEntryPoint(new FailedAuthenticationEntryPoint())
                )
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        return httpSecurity.build();

    }

    /** CORS 구성을 위한 설정을 반환하는 메서드 */
    @Bean
    protected CorsConfigurationSource corsConfigrationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOrigin("*");
        configuration.addAllowedMethod("*");
        configuration.addExposedHeader("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }
}


