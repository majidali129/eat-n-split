/* eslint-disable react/prop-types */
import { useState } from "react";
import Bill from "../bill/Bill";
import Friends from "../friends/Friends";

const initialFriends = [
  {
    id: 118836,
    name: "Hamza",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Salman",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Kashif",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const EatAndSplit = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleNewFriend(newFriend) {
    setFriends((prevFriends) => [...prevFriends, newFriend]);
    console.log(friends);
  }

  function handleSelection(friend) {
    setSelectedFriend((curFriend) =>
      curFriend?.id === friend.id ? null : friend
    );
  }

  function handleSplitBill(bill) {
    console.log(bill);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + bill }
          : friend
      )
    );
  }

  return (
    <section className=" py-14 px-9 flex flex-col gap-y-6 md:max-w-4xl mx-auto md:flex-row gap-14 justify-start">
      <Friends
        friends={friends}
        onAddFriend={handleNewFriend}
        onSelection={handleSelection}
        selectedFriend={selectedFriend}
      />
      {selectedFriend && (
        <Bill onSplitBill={handleSplitBill} friend={selectedFriend} />
      )}
    </section>
  );
};

export default EatAndSplit;
