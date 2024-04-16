package com.hyunjin.blogback.dto.object;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
/** 게시물 목록 */
public class BoardListItem {
    private int boardNumber;
    private String title;
    private String content;
    private String boardTitleImage;
    private int favoriteCount;
    private int viewCount;
    private String writeDatetime;
    private String writerNickname;
    private String writerProfileImage;

}
