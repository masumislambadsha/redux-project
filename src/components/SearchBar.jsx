import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("badsha");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(setQuery(text))

    setText("");
  };
  return (
    <div className="flex  items-center justify-center">
      <form onSubmit={submitHandler} className="flex gap-5 p-10 ">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-2 px-4 py-2"
          placeholder="Search Anything"
          required
        />
        <button className="px-4 py-3 bg-green-500 rounded-xl text-white shadow-2xl shadow-green-950 hover:bg-green-600 transition-color duration-300 hover:scale-105 active:scale-90 cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
