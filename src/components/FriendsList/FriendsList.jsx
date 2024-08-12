import css from "./FriendsList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendsList({ list }) {
  return (
    <ul className={css.friendsList}>
      {list.map((friend) => (
        <li className={css.friendCard} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
