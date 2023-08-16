/* eslint-disable react/prop-types */
import Button from "../../ui/Button";

const Friend = ({ friend, selectedFriend, onSelection }) => {
  let isSelected = selectedFriend?.id === friend.id;
  const { name, image, balance } = friend;
  return (
    <li className="bg-[#eee4e11c]  hover:bg-[#eee4e1] flex items-center justify-between gap-x-4 py-2 px-5 rounded-md w-full">
      <img
        src={image}
        alt="Friend Name"
        width="50px"
        className="rounded-full"
      />
      <div className="flex flex-col">
        <span className="font-bold text-cyan-950">{`${name}`}</span>
        {balance < 0 && (
          <span className="text-red-500">
            You owe {name} {Math.abs(balance)}$
          </span>
        )}
        {balance > 0 && (
          <span className="text-green-500">
            {name} owe you {Math.abs(balance)}$
          </span>
        )}
        {balance === 0 && <span>You and {name} are even</span>}
      </div>
      <Button onclick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}{" "}
      </Button>
    </li>
  );
};

export default Friend;
