import { FavoriteListItem } from "types/interface";
import "./style.css";
import defaultProfileImage from "assets/image/default-profile-image.png";

/** interface  */
interface Props {
  favoriteListItem: FavoriteListItem;
}
/** component : favoriteListItem 컴포넌트 */
const FavoriteItem = ({ favoriteListItem }: Props) => {
  /** properties */
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
