import { useNavigate, Link } from "react-router-dom";
import { useForm } from "../hooks";

export const Layout = ({ children }) => {
  const navigate = useNavigate();

  const { search, onInputChange } = useForm({
    search: "",
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`/items?q=${search}`);
  };

  return (
    <>
      <div className="flex h-16 bg-yellow-300">
        <form
          onSubmit={onSearchSubmit}
          className="m-auto flex maw-w-screen-lg flex-1 items-center gap-4 px-4"
        >
          <Link to="/" className="text-yellow-900">
            Challenge
          </Link>
          <input
            className="h-8 flex-1 px-4 text-black"
            name="search"
            type="text"
            value={search}
            onChange={onInputChange}
          />
          <button
            className="bg-gray-300 px-2 py-1 text-slate-700"
            type="submit"
          >
            Buscar
          </button>
        </form>
      </div>
      <div className="max-w-creen-lg m-auto p-4">{children}</div>
    </>
  );
};
