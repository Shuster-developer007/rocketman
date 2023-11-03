/* eslint-disable react/no-unknown-property */
// import { Item } from '../../components/Item';
import { useParams } from "react-router-dom";
import "./Food.css";
import { GrEdit } from "react-icons/gr";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useState } from "react";
import { FoodModal } from "../../components/Modal/FoodModal";
import React_Skeleton from "../../components/React_Skeleton/React_Skeleton";
import { api } from "../../API/api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSubProduct } from "../../redux/subProduct/subProductAction";
import { Pagination } from "antd";

export const Food = () => {
  const [addModal, addSetModal] = useState(false);
  const [editModal, editSetModal] = useState(false);
  const [oneId, setOneId] = useState("");
  const [productName, setProductName] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [pagenation, setPagenation] = useState({
    page: 1,
    totalPage: 1,
    pageLimit: 6,
  });

  const { id } = useParams();
  const dispatch = useDispatch();
  const subProducts = useSelector((state) => state.subProduct.subProduct);

  const getSubProducts = async (page) => {
    const { data } = await api.getSubProducts(id, page);
    setPagenation({
      page: data?.data?.info?.page,
      totalPage: data?.data?.info?.pages,
      pageLimit: data?.data?.info?.limit,
    });
    if (data.status === 200) {
      dispatch(setSubProduct(data?.data?.subproducts));
    }
  };

  const subProductEdit = async (subProductId) => {
    const { data } = await api.getSubProductById(subProductId);
    if (data.status === 200) {
      setOneId(data.data._id);
      setProductName(data.data.sub_product_name);
      setDesc(data.data.description);
      setPrice(data.data.price);
      setImg(data.data.image);
    }
  };

  useEffect(() => {
    getSubProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const title = ["ID", "TOVAR", "MA'LUMOT", "NARXI", "HOLAT", "TAHRIRLASH"];

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
                <thead className="thread table-dark">
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
                  {subProducts.length ? (
                    subProducts.map((item, i) => (
                      <tr key={item._id} className="table-borderless">
                        <th scope="row" className="jg text-center">
                          {item?.second_id}
                        </th>
                        <td scope="row" className="jg text-center">
                          {item.sub_product_name}
                        </td>
                        <td className="jg text-center ">
                          {item.description}
                        </td>
                        <td className="jg text-center">{item.price}</td>
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
                          onClick={() => subProductEdit(item._id)}
                        >
                          {" "}
                          <button
                            className="btn"
                            onClick={() => editSetModal(true)}
                          >
                            <i className="fa-solid fa-pen-clip fs-5"></i>
                          </button>
                        </td>
                        <td></td>
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
              <FoodModal
                setImg={setImg}
                img={img}
                price={price}
                setPrice={setPrice}
                desc={desc}
                setDesc={setDesc}
                productName={productName}
                setProductName={setProductName}
                setOneId={setOneId}
                oneId={oneId}
                id={id}
                getSubProducts={getSubProducts}
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
                  onChange={(pageNumber) => getSubProducts(pageNumber)}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
