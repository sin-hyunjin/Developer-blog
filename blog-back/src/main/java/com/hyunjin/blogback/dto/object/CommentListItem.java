package com.hyunjin.blogback.dto.object;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
/** 댓글 목록 */
public class CommentListItem {
    private String nickname;
    private String profileImage;
    private String writeDatetime;
    private String content;
}
