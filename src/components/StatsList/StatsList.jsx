import css from "./StatsList.module.css";

export default function StatsList({ stats: { followers, views, likes } }) {
  return (
    <ul className={css.statsList}>
      <li className={css.statsItem}>
        <span className={css.item}>Followers</span>
        <span className={css.itemValue}>{followers}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.item}>Views</span>
        <span className={css.itemValue}>{views}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.item}>Likes</span>
        <span className={css.itemValue}>{likes}</span>
      </li>
    </ul>
  );
}
