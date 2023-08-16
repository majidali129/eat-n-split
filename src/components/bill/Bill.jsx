/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

const Bill = ({ friend, onSplitBill }) => {
  const [totalBill, setTotalBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = totalBill ? totalBill - paidByUser : "";
  const [customer, setCustomer] = useState("user");

  function handleTotalBill(e) {
    setTotalBill(Number(e.target.value));
  }
  function handleMyExpense(e) {
    setPaidByUser(Number(e.target.value));
  }

  function handleSplition(e) {
    e.preventDefault();
    if (!totalBill || !paidByFriend) return;
    onSplitBill(customer === "user" ? paidByFriend : -paidByUser);
    setTotalBill("");
    setPaidByUser("");
  }

  return (
    <section className="bg-[#eee4e1] flex flex-col gap-y-4 py-12 rounded-md px-4 h-auto md:h-[70vh]">
      <h1 className="text-xl md:tet-2xl font-bold text-cyan-950 text-center">{`Split A Bill With ${friend.name}`}</h1>

      <form className="flex flex-col gap-y-3" onSubmit={handleSplition}>
        <div>
          <label className="block md:inline-block  md:w-[50%] ">
            💰 Bill Value
          </label>
          <Input value={totalBill} onchange={handleTotalBill} />
        </div>
        <div>
          <label className="block md:inline-block  md:w-[50%] ">
            🧍‍♀️ Your Expense
          </label>
          <Input value={paidByUser} onchange={handleMyExpense} />
        </div>
        <div>
          <label className="block md:inline-block  md:w-[50%]">
            👨🏼‍🤝‍👨🏻 {friend.name}&apos;s Expense
          </label>
          <Input readOnly value={paidByFriend} />
        </div>
        <div>
          <label className="block md:inline-block  md:w-[70%] ">
            🤑 Who is paying the bill?
          </label>
          <select
            className="mt-2 py-1  w-full md:w-[30%] rounded outline-none border-none"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          >
            <option value="you">You</option>
            <option value="friend">{friend.name}</option>
          </select>
        </div>

        <div className="flex justify-end">
          <Button type="submit">Split Bill</Button>
        </div>
      </form>
    </section>
  );
};

export default Bill;
