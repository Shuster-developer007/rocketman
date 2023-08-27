import { Link } from "react-router-dom";
import "./Category.css";
import { GrEdit } from "react-icons/gr";
import { BtnSlider } from "../../components/BtnSlider";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useState } from "react";
import { CategoryModal } from "../../components/Modal/categoryModal";
import React_Skeleton from "../../components/React_Skeleton/React_Skeleton";
import { api } from "../../API/api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/category/categoryAction";
import { Pagination } from "antd";

export const Category = () => {
  const [addModal, addSetModal] = useState(false);
  const [editModal, editSetModal] = useState(false);
  const [oneId, setOneId] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.category);
  const [pagenation, setPagenation] = useState({
    page: 1,
    totalPage: 1,
    pageLimit: 6,
  });

  const getCategories = async (pageNumber) => {
    const { data } = await api.getCategories(pageNumber);
    setPagenation({
      page: data?.info?.page,
      totalPage: data?.data?.info?.pages,
      pageLimit: data?.data?.info?.limit,
    });
    if (data.status === 200) {
      dispatch(setCategory(data?.data?.categories));
    }
  };

  const categoryEdit = async (categoryId) => {
    const { data } = await api.getCategoryById(categoryId);
    if (data.status === 200) {
      setOneId(data.data);
    }
  };

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const title = ["KATEGORIYA", "DO'KONLAR", "TAHRIRLASH", "STATUS"];

  return (
    <>
      <Sidebar />
      <div className="ummumiy">
        <Header />
        <section className="py-4">
          <div className="container px-4">
            <button
              className="btn btn-success categoryBtn"
              onClick={() => addSetModal(true)}
            >
              Qo’shish +
            </button>
            <div className="category mt-4 ">
              <table className="table table-hover table-borderless ">
                <thead className="thread ">
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
                  {categories.length ? (
                    categories.map((item) => (
                      <tr key={item._id} className="table-borderless">
                        <th scope="row" className="jg text-center">
                          <Link
                            to={`${item._id}`}
                            className="Item-link text-decoration-none text-dark"
                          >
                            {item.category_name}
                          </Link>
                        </th>
                        <td className="jg text-center">
                          {item.subCategories.length}
                        </td>
                        <td
                          className="jg text-center"
                          onClick={() => categoryEdit(item._id)}
                        >
                          <button
                            className="btn"
                            onClick={() => editSetModal(true)}
                          >
                            <GrEdit color="green" size={20} />
                          </button>
                        </td>
                        <td className="jg text-center">
                          <BtnSlider status={item.status} />
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
              <CategoryModal
                oneId={oneId}
                getCategories={getCategories}
                addModal={addModal}
                addSetModal={addSetModal}
                editModal={editModal}
                editSetModal={editSetModal}
                categories={categories}
              />
              <div className="d-flex next align-items-center">
                <Pagination
                  simple
                  defaultCurrent={1}
                  total={pagenation.totalPage * pagenation.pageLimit}
                  defaultPageSize={pagenation.pageLimit}
                  onChange={(pageNumber) => getCategories(pageNumber)}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
