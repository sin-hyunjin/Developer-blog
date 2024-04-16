package com.hyunjin.blogback.dto.object;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
/** 좋아요 리스트 목록 */
public class FavoriteListItem {
    private String email;
    private String nickname;
    private String profileImage;
}
