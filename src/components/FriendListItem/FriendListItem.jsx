import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.friendslistItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.userName}>{name}</p>
      <p className={clsx(isOnline ? css.statusOnline : css.statusOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
