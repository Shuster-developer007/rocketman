// import { Item } from '../../components/Item';
import { Link, useParams } from "react-router-dom";
import "./FastFood.css";
import { GrEdit } from "react-icons/gr";
import { useState } from "react";
import Sidebar from "./../../components/Sidebar";
import Header from "../../components/Header";
import { FastfoodModal } from "../../components/Modal/fastfoodModal";
import React_Skeleton from "../../components/React_Skeleton/React_Skeleton";
import { api } from "../../API/api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSubCategory } from "../../redux/subCategory/subCategoryAction";
import { Pagination } from "antd";

export const FastFood = () => {
  const [addModal, addSetModal] = useState(false);
  const [editModal, editSetModal] = useState(false);
  const [oneId, setOneId] = useState("");
  const [sub, setSub] = useState("");
  const [long, setLong] = useState("");
  const [loc, setLoc] = useState("");
  const [lang, setLang] = useState("");
  const [phone, setPhone] = useState("");
  const [Id, setOneid] = useState("");
  const [pagenation, setPagenation] = useState({
    page: 1,
    totalPage: 1,
    pageLimit: 6,
  });

  const { id } = useParams();
  const dispatch = useDispatch();
  const subCategories = useSelector((state) => state.subCategory.subCategory);

  const fastFoodEdit = async (fastFoodId) => {
    const { data } = await api.getSubCategoryById(fastFoodId);
    if (data.status === 200) {
      setOneId(data.data);
      setSub(data.data.sub_category_name);
      setPhone(data.data.phone);
      setOneid(data.data._id);
      setLong(data.data.long);
      setLang(data.data.lang);
      setLoc(data.data.location);
    }
  };

  const getSubCategories = async (page) => {
    const data = await api.getSubCategories(id, page);
    setPagenation({
      page: data?.info?.page,
      totalPage: data?.data?.data?.info?.pages,
      pageLimit: data?.data?.data?.info?.limit,
    });
    if (data.status === 200) {
      dispatch(setSubCategory(data.data?.data?.subcategories));
    }
  };

  useEffect(() => {
    getSubCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const title = [
    "ID",
    "DO'KONLAR",
    "TOVAR SONI",
    "TELEFON RAQAM",
    "MANZIL",
    "HOLAT",
    "TAHRIRLASH",
  ];

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
                  {subCategories.length ? (
                    subCategories.map((item) => (
                      <tr key={item._id} className="table-borderless">
                        <th scope="row" className="jg text-center">
                          {item.second_id}
                        </th>
                        <td scope="row" className="jg text-center">
                          <Link
                            to={item._id}
                            className="Item-link text-decoration-none text-dark"
                          >
                            {item.sub_category_name}
                          </Link>
                        </td>
                        <td className="jg text-center">
                          {item.products.length}
                        </td>
                        <td className="jg text-center">{item.phone}</td>
                        <td className="jg text-center">{item.location}</td>
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
                          onClick={() => fastFoodEdit(item._id)}
                        >
                          {" "}
                          <button
                            className="btn"
                            onClick={() => editSetModal(true)}
                          >
                            <i className="fa-solid fa-pen-clip fs-5"></i>
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
              <FastfoodModal
                loc={loc}
                setLoc={setLoc}
                lang={lang}
                setLang={setLang}
                long={long}
                setLong={setLong}
                setPhone={setPhone}
                phone={phone}
                sub={sub}
                setSub={setSub}
                Id={Id}
                setOneId={setOneId}
                id={id}
                oneId={oneId}
                getSubCategories={getSubCategories}
                editModal={editModal}
                editSetModal={editSetModal}
                addModal={addModal}
                addSetModal={addSetModal}
              />
              <div className="d-flex next align-items-center">
                <Pagination
                  simple
                  defaultCurrent={1}
                  total={pagenation.totalPage * pagenation.pageLimit}
                  defaultPageSize={pagenation.pageLimit}
                  onChange={(pageNumber) => getSubCategories(pageNumber)}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
