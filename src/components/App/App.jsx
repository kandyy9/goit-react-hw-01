import css from "./App.module.css";
import userData from "../../userData.json";
import Profile from "../Profile/Profile.jsx";

export default function App() {
  return (
    <div className={css.container}>
      {userData.map((user, index) => (
        <Profile key={index} user={user} />
      ))}
    </div>
  );
}
