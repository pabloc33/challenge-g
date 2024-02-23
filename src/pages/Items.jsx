import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useItem } from "../hooks";
import { Layout } from "../layout/Layout";
import { ItemCard, Spinner } from "../components";

export const Items = () => {
  const { items, loading, startSearchingItems } = useItem();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  useEffect(() => {
    startSearchingItems({ search: q });
  }, [q]);

  return (
    <Layout>
      <div className="grid gap-4">
        {loading ? (
          <Spinner />
        ) : (
          items?.map((item) => <ItemCard key={item.id} item={item} />)
        )}
      </div>
    </Layout>
  );
};
