/* eslint-disable react/prop-types */
import Form from "../form/Form";
import Friend from "../friend/Friend";

const Friends = ({ friends, selectedFriend, onSelection, onAddFriend }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <div>
        <ul className="flex flex-col max-w-lg items-center gap-y-4">
          {friends.map((friend) => (
            <Friend
              key={friend.id}
              friend={friend}
              selectedFriend={selectedFriend}
              onSelection={onSelection}
            />
          ))}
        </ul>
      </div>
      <div>
        <Form onAddFriend={onAddFriend} />
      </div>
    </div>
  );
};

export default Friends;
