import { FavoriteListItem } from "types/interface";
import "./style.css";
import defaultProfileImage from "assets/image/default-profile-image.png";

/** Interface  */
interface Props {
  favoriteListItem: FavoriteListItem;
}
/** Component : favoriteListItem 컴포넌트 */
const FavoriteItem = ({ favoriteListItem }: Props) => {
  /** Properties */
  const { nickname, profileImage } = favoriteListItem;

  /** render : favoriteListItem  */
  return (
    <div className="favorite-list-item">
      <div className="favorite-list-item-profile-box">
        <div
          className="favorite-list-item-profile-image"
          style={{
            backgroundImage: `url(${
              profileImage ? profileImage : defaultProfileImage
            })`,
          }}
        ></div>
      </div>
      <div className="favorite-list-item-nickname">{nickname}</div>
    </div>
  );
};

export default FavoriteItem;
