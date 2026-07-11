import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["Photos", "Videos"];

  const activeTab = useSelector((state) => state.search.activeTab)
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center gap-5 ">
      {tabs.map((tab, idx) => {
        return (
          <button
            className={` bg-amber-500 cursor-pointer px-4 py-3 rounded uppercase text-white duration-300 active:scale-90  transition-all ${activeTab == tab && "bg-green-500 "}`}
            onClick={() => dispatch(setActiveTabs(tab))}
            key={idx}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
