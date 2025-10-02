import React from "react";
import AccountsListsItem from "./AccountsListsItem";

const AccountsLists = () => {
  const lists = [
    { id: 1, title: "Your Orders" },
    { id: 2, title: "Your Wish List" },
    { id: 3, title: "Your Prime" },
    { id: 4, title: "Your Account" },
  ];

  return (
    <div className="accounts-lists">
      <h3>Accounts & Lists</h3>
      <ul>
        {lists.map((item) => (
          <AccountsListsItem key={item.id} title={item.title} />
        ))}
      </ul>
    </div>
  );
};

export default AccountsLists;
