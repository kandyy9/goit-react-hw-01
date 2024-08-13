import css from "./App.module.css";
import userData from "../../userData.json";
import Profile from "../Profile/Profile.jsx";
import friends from "../../friends.json";
import FriendsList from "../FriendsList/FriendsList.jsx";
import transactions from "../../transactions.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx";

export default function App() {
  return (
    <div className={css.container}>
      {userData.map((user, index) => (
        <Profile key={index} user={user} />
      ))}
      <FriendsList list={friends} />
      <TransactionHistory items={transactions}></TransactionHistory>
    </div>
  );
}
