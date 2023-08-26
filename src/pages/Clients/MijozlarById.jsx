import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import "../../styles/Clients/MijozlarByid.css";
import { Select } from "antd";
import { Link, useParams } from "react-router-dom";
import { api } from "../../API/api";
import React_Skeleton from "../../components/React_Skeleton/React_Skeleton";

const MijozlarById = () => {
  const onChanges = (value) => {
    console.log(`selected ${value}`);
  };
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const userGetOne = async () => {
    try {
      setLoading(true);
      const { data } = await api.getOneUser(id);
      setUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    userGetOne();
  }, []);

  const title = [
    "ID",
    "SANA",
    "SONI",
    "NARXI",
    "MANZIL",
    "DRIVER",
    "HOLAT",
    "BARAFSIL",
  ];

  const orderfind = async () => {
    try {
      setLoading(true);
      const { data } = await api.getOrder_user(id);
      setData(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    orderfind();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="ummumiy">
        <Header />
        <section className="section py-4">
          <div className="container px-4">
            <div className="d-flex justify-content-between align-items-center gap-4">
              <div className="mijoz d-flex align-items-center gap-3">
                <Link
                  to="/mijozlar"
                  className="text-dark text-decoration-none "
                >
                  <div className="bor">
                    <i className="fa-solid fa-angle-left"></i>
                  </div>
                </Link>
                {loading ? (
                  <h3>Loading...</h3>
                ) : (
                  <h3>{user?.data?.username}</h3>
                )}
              </div>
              <Select
                className="my_select"
                showSearch
                defaultValue="Barchasi"
                placeholder="Select a status"
                optionFilterProp="children"
                onChange={onChanges}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "barchasi",
                    label: "Barchasi",
                  },
                  {
                    value: "bekor",
                    label: "Bekor",
                  },
                  {
                    value: "yakun",
                    label: "Yakun",
                  },
                  {
                    value: "yetkazish",
                    label: "Yetkazish",
                  },
                  {
                    value: "tayyorlanmoqda",
                    label: "Tayyorlanmoqda",
                  },
                ]}
              />
              <div>
                <p>Jami:</p>
                <h4 className="buyutrma">{data?.data?.length}</h4>
              </div>
              <button className="phone-btn d-flex align-items-center justify-content-center gap-2">
                <i className="fa-solid fa-phone text-white"></i>
                <a className="text-decoration-none link" href="tel:">
                  {user?.data?.phone}
                </a>
              </button>
            </div>
            <div className="orab">
              <table className="mytable">
                <thead className="thread">
                  <tr>
                    {title?.map((item, index) => (
                      <th key={index} className="jg text-center" scope="col">
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.length ? (
                    data?.data?.map((item, index) => (
                      <tr key={item._id} className="tr">
                        <th className="jg text-center" cope="row">
                          {index + 1}
                        </th>
                        <td className="jg text-center">
                          {item.createdAt.slice(0, 10)}
                        </td>
                        <td className="jg text-center">
                          {item?.items?.reduce(
                            (sum, item) => (sum += item?.count),
                            0
                          )}
                        </td>
                        <td className="jg text-center">{item.total_price}</td>
                        <td className="jg text-center">
                          <i className="fa-solid fa-location-dot text-danger fs-5"></i>
                        </td>
                        <td className="jg">
                          {item.driver == null ? (
                            <div className="d-flex align-items-center justify-content-center ">
                              <div className="auto_number">no connected</div>
                            </div>
                          ) : (
                            <div className="d-flex align-items-center justify-content-center ">
                              <div className="auto_number">01 | S 777 AA</div>
                            </div>
                          )}
                        </td>
                        <td className={`jg text-center ${item.status}`}>
                          {item.status}
                        </td>
                        <td className="jg m-auto text-center fs-4">
                          <Link
                            to={`/mijozlar/info/${item._id}`}
                            className="text-decoration-none text-dark"
                          >
                            ...
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      {title?.map((item, index) => (
                        <th key={index} className="jg text-center" scope="col">
                          <React_Skeleton />
                        </th>
                      ))}
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MijozlarById;
