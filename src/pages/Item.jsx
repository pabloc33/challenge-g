import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useItem } from "../hooks";
import { Layout } from "../layout/Layout";
import { Spinner } from "../components";
import { getCurrencyPrice } from "../helpers";

export const Item = () => {
  const {
    startLoadingItem,
    startLoadingDescription,
    singleItem,
    description,
    loading,
  } = useItem();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    startLoadingItem(id);
  }, [id]);

  useEffect(() => {
    startLoadingDescription(id);
  }, [id]);

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        singleItem &&
        description && (
          <div className="grid gap-2">
            <img src={singleItem?.thumbnail} alt={singleItem?.title} />
            <p className="text-xl font-bold">{getCurrencyPrice(singleItem)}</p>
            <p>{singleItem?.title}</p>
            <hr />

            <p>{description?.plain_text}</p>
          </div>
        )
      )}
    </Layout>
  );
};
