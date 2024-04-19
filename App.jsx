import Pagination from "./Component/Pagination";
import Search from "./Component/Search";
import Stories from "./Component/Stories";
import "./App.css";

const App = () => {
  return (
    <>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};

export default App;