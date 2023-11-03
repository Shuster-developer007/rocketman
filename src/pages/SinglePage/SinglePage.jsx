import { Link, useParams } from "react-router-dom";
import "./SinglePage.css";
import { GrEdit } from "react-icons/gr";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { SModal } from "../../components/Modal/smodal";
import React_Skeleton from "../../components/React_Skeleton/React_Skeleton";
import { api } from "../../API/api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../redux/product/productAction";
import { Pagination } from "antd";

export const SinglePage = () => {
  const [addModal, addSetModal] = useState(false);
  const [editModal, editSetModal] = useState(false);
  const [oneId, setOneId] = useState("");
  const [productName, setProductName] = useState("");
  const [pagenation, setPagenation] = useState({
    page: 1,
    totalPage: 1,
    pageLimit: 6,
  });

  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.product?.product);
  const productEdit = async (productId) => {
    const { data } = await api.getProductById(productId);
    if (data.status === 200) {
      setOneId(data.data._id);
      setProductName(data.data.product_name);
    }
  };

  const getProducts = async (page) => {
    const { data } = await api.getProducts(id, page);
    setPagenation({
      page: data?.info?.page,
      totalPage: data?.data?.info?.pages,
      pageLimit: data?.data?.info?.limit,
    });
    if (data.status === 200) {
      dispatch(setProduct(data?.data?.products));
    }
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const title = ["ID", "TOVAR", "TOVAR SONI", "HOLAT", "TAHRIRLASH"];

  return (
    <>
      <Sidebar />
      <div className="ummumiy">
        <Header />
        <section className="py-4">
          <div className="container px-4">
            <button
              onClick={() => addSetModal(true)}
              type="button"
              className="btn-add mt-3 d-flex gap-2 justify-content-center align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Qo'shish
              <div className="added_border">
                <i className="fa-solid fa-plus plus_icon"></i>
              </div>
            </button>
            <div className="category mt-3">
              <table className="table table-hover table-borderless">
                <thead className="thread">
                  <tr className="table-dark">
                    {title.map((el, i) => (
                      // eslint-disable-next-line react/jsx-key
                      <th key={i} scope="col" className="jg text-center">
                        {el}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="">
                  {products?.length ? (
                    products?.map((item) => (
                      <tr key={item?._id} className="table-borderless">
                        <th scope="row" className="jg text-center">
                          {item.second_id}
                        </th>
                        <td scope="row" className="jg text-center">
                          <Link
                            to={item._id}
                            className="Item-link text-decoration-none text-dark"
                          >
                            {item.product_name}
                          </Link>
                        </td>
                        <td className="jg text-center">
                          {item.subProducts.length}
                        </td>
                        <td className="jg text-center">
                          {item.status == true ? (
                            <div className="d-flex justify-content-center align-items-center">
                              <div className="enabled d-flex align-items-center justify-content-center">
                                enabled
                              </div>
                            </div>
                          ) : (
                            <div className="d-flex justify-content-center align-items-center ">
                              <div className="disabled text-danger justify-content-center align-items-center d-flex">
                                disabled
                              </div>
                            </div>
                          )}
                        </td>
                        <td
                          className="jg text-center"
                          onClick={() => productEdit(item._id)}
                        >
                          <button
                            className="btn"
                            onClick={() => editSetModal(true)}
                          >
                            <GrEdit color="green" size={20} />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      {title.map((el, i) => (
                        // eslint-disable-next-line react/jsx-key
                        <td key={i}>
                          <React_Skeleton />
                        </td>
                      ))}
                    </tr>
                  )}
                </tbody>
              </table>
              <SModal
                product={productName}
                setProduct={setProductName}
                setOneId={setOneId}
                oneId={oneId}
                id={id}
                getProducts={getProducts}
                addModal={addModal}
                addSetModal={addSetModal}
                editModal={editModal}
                editSetModal={editSetModal}
              />
              <div className="d-flex next align-items-center">
                <Pagination
                  simple
                  defaultCurrent={1}
                  total={pagenation.totalPage * pagenation.pageLimit}
                  defaultPageSize={pagenation.pageLimit}
                  onChange={(pageNumber) => getProducts(pageNumber)}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
