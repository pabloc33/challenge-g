import { useDispatch, useSelector } from "react-redux";
import {
  onLoadDescription,
  onLoadItem,
  onLoadItems,
  onLoading,
} from "../store/item/itemSlice";
import clienteAxios from "../api/clienteAxios";

export const useItem = () => {
  const dispatch = useDispatch();
  const { items, singleItem, description, loading } = useSelector(
    (state) => state.item
  );

  const startSearchingItems = async (search) => {
    dispatch(onLoading());
    try {
      const { data } = await clienteAxios(
        `/sites/MLA/search?q=:${search.search}&limit=4`
      );

      dispatch(onLoadItems(data.results));
    } catch (error) {
      console.log(error.message);
    }
  };

  const startLoadingItem = async (id) => {
    dispatch(onLoading());
    try {
      const { data } = await clienteAxios(`/items/${id}`);

      dispatch(onLoadItem(data));
    } catch (error) {
      console.log(error);
    }
  };

  const startLoadingDescription = async (id) => {
    dispatch(onLoading());
    try {
      const { data } = await clienteAxios(`/items/${id}/description`);

      dispatch(onLoadDescription(data));
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    //* Properties
    items,
    singleItem,
    description,
    loading,
    //* Methods
    startSearchingItems,
    startLoadingItem,
    startLoadingDescription,
  };
};
