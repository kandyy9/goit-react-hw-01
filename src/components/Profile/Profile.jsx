import MainInfo from "../MainInfo/MainInfo";
import StatsList from "../StatsList/StatsList";
import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.Profile}>
      <MainInfo name={name} tag={tag} location={location} image={image} />
      <StatsList stats={stats} />
    </div>
  );
}
