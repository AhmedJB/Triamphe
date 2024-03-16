import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { axiosInstance, formatImage } from "../../utils/handler";
import { API_URL } from "../../utils/constants";
import QueryString from "qs";

function ProductsSection() {
  const [current, setCurrent] = useState(1);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productsData, setData] = useState([]);

  const formatParams = (page) => {
    const params = {
      pagination: {
        page,
        pageSize: 20,
      },
      populate: "*",
    };
    const query = QueryString.stringify(params, {
      encodeValuesOnly: true, // prettify URL
    });
    return query;
  };

  const fetchProducts = async (page) => {
    const resp = await axiosInstance.get(
      API_URL + `products?${formatParams(page)}`
    );
    if (resp.status === 200) {
      const data = await resp.data;
      setData(data.data);
      setPagination(data.meta.pagination);
      setLoading(false);
    } else {
      console.log(`Failed`);
    }
  };

  const updateProducts = async (page) => {
    setLoading(true);
    fetchProducts(page);
  };

  useEffect(() => {
    fetchProducts().then(() => console.log(`Fetched Products`));
  }, []);

  return (
    <>
      {!loading && productsData.length > 0 && (
        <>
          <section className={`w-full my-4`}>
            <h1 className={`text-black font-semibold text-[3rem] text-center`}>
              Nos Produits
            </h1>
            <div className={`container flex flex-wrap gap-4 justify-center`}>
              {productsData.length > 0 &&
                productsData.map((e, i) => {
                  return (
                    <ProductCard
                      key={`product-${i}`}
                      url={`${formatImage(
                        e.attributes.image.data.attributes.formats.thumbnail.url
                      )}`}
                      title={e.attributes.name}
                    />
                  );
                })}
            </div>
            {pagination && (
              <div
                className={`w-full flex items-center justify-center mt-11 gap-3`}
              >
                {new Array(pagination.pageCount).fill(0).map((e, i) => {
                  return (
                    <div
                      key={`pagnation-${i}`}
                      className={`w-[30px] aspect-square rounded-md shadow-1 grid place-items-center font-semibold transition-all hover:scale-105 cursor-pointer ${
                        current === i + 1 ? "bg-goldenLight text-white" : ""
                      }`}
                      onClick={() => updateProducts(i + 1)}
                    >
                      {i + 1}
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </>
      )}
    </>
  );
}

export default ProductsSection;
