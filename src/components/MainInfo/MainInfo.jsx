import css from "./MainInfo.module.css";

export default function MainInfo({ name, tag, location, image }) {
  return (
    <div className={css.mainInfo}>
      <img className={css.profileAvatar} src={image} alt="User avatar" />
      <p className={css.name}>{name}</p>
      <p className={css.userTag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
}
