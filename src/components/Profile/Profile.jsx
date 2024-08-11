import MainInfo from "../MainInfo/MainInfo";
import StatsList from "../StatsList/StatsList";
import css from "./Profile.module.css";

export default function Profile({ user }) {
  return (
    <div className={css.Profile}>
      <MainInfo user={user}></MainInfo>
      <StatsList user={user}></StatsList>
    </div>
  );
}
