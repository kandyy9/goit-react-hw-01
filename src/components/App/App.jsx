import css from "./App.module.css";
import userData from "../../userData.json";
import Profile from "../Profile/Profile.jsx";
import friends from "../../friends.json";
import FriendsList from "../FriendsList/FriendsList.jsx";
import transactions from "../../transactions.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx";

export default function App() {
  const { username, tag, location, avatar, stats } = userData[0];
  return (
    <div className={css.container}>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendsList list={friends} />
      <TransactionHistory items={transactions}></TransactionHistory>
    </div>
  );
}
