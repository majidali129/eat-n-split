/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

const Form = ({ onAddFriend }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fName, setFName] = useState("");
  const [image, setIamge] = useState("https://i.pravatar.cc/48");

  function handleFriendName(e) {
    setFName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    onAddFriend({
      id: id,
      name: fName,
      image: `${image}?=${id}`,
      balance: 0,
    });

    setFName("");
  }

  return (
    <section className="flex flex-col gap-y-2 ">
      {isOpen && (
        <form
          onSubmit={handleSubmit}
          className="bg-[#eee4e1] py-4 px-4 flex flex-col gap-3 justify-center rounded-md"
        >
          <div>
            <label className="block md:inline-block  md:w-[50%] ">
              👬 Friend Name
            </label>
            <Input type="text" onchange={handleFriendName} value={fName} />
          </div>
          <div>
            <label className="block md:inline-block  md:w-[50%] ">
              🉑Image URL
            </label>
            <Input
              readOnly
              className="flex-3"
              type="text"
              value={image}
              onchange={(e) => setIamge(e.target.value)}
            />
          </div>

          <div className="flex  justify-end ">
            <Button className="border border-red-500" type="submit">
              Add
            </Button>
          </div>
        </form>
      )}

      <span className="flex w-full justify-end">
        <Button onclick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Add Friend"}
        </Button>
      </span>
    </section>
  );
};

export default Form;
