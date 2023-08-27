import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import "../../styles/Home/Home.css";
import { Select } from "antd";
import { api } from "../../API/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Radio } from "antd";
import React_Skeleton from "../../components/React_Skeleton/React_Skeleton";

const Home = () => {
  const [data, setData] = useState([]);
  const [order_id, setId] = useState("");
  const [select, setSelect] = useState("barchasi");
  const [statusId, setStatus] = useState("");
  const [data_driver, setData_Driver] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onChanges = (value) => {
    console.log(value);
    setSelect(value);
    findOrders();
  };

  const handleEditStatusOrder = async () => {
    try {
      const { data } = await api.updateStatusOrder(statusId, { status: value });
      if (data.status == 202) {
        findOrders();
        getAllDriver();
        toast("Success updated status", { type: "success" });
      }
    } catch (error) {
      toast(error?.response?.data?.message, { type: "error" });
    }
  };

  const findOrders = async () => {
    try {
      setLoading(true);
      const { data } = await api.getOrders(select);
      setData(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    findOrders();
  }, []);

  const getAllDriver = async () => {
    try {
      setLoading(true);
      const { data } = await api.getOrderDriver();
      setData_Driver(data.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const thread = [
    "ID",
    "SANA",
    "ISM",
    "TELEFON RAQAM",
    "SONI",
    "NARXI",
    "MANZIL",
    "DRIVER",
    "HOLAT",
    "BATAFSIL",
  ];

  const addDriver = async (id) => {
    try {
      const body = {
        driver: id,
      };
      const { data } = await api.addDriverOrder(order_id, body);
      if (data.status == 201) {
        toast("Success added driver", { type: "success" });
      }
      getAllDriver();
      findOrders();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDriver();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="ummumiy">
        <Header />
        <div>
          <div
            className="modal fade"
            id="editstatusmodal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Edit Status Order
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <Radio.Group
                    className="d-flex flex-column gap-3"
                    onChange={onChange}
                    value={value}
                  >
                    <Radio value={"buyurtma"}>buyurtma</Radio>
                    <Radio value={"qabul"}>qabul</Radio>
                    <Radio value={"yetkazish"}>yetkazish</Radio>
                    <Radio value={"yakun"}>yakun</Radio>
                    <Radio value={"bekor"}>bekor</Radio>
                  </Radio.Group>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEditStatusOrder()}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="offcanvas offcanvas-end bg-dark"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            {loading ? (
              <h5
                className="offcanvas-title text-white"
                id="offcanvasRightLabel"
              >
                Loading..
              </h5>
            ) : (
              <h5
                className="offcanvas-title text-white"
                id="offcanvasRightLabel"
              >
                All Drivers
              </h5>
            )}
            <button
              type="button"
              className="btn-close bg-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex flex-column gap-4">
            {data_driver?.map((item) => (
              <div
                key={item?._id}
                className="card_driver px-3 py-2 justify-content-between d-flex"
              >
                <div className="tod_card_driver">
                  <h5 className="driver_name">{item?.driver_full_name}</h5>
                  <p>
                    holat:{" "}
                    {item?.status == true ? (
                      <span className="text-success">enabled</span>
                    ) : (
                      <span className="text-danger">disabled</span>
                    )}
                  </p>
                  <p>
                    turi:{" "}
                    <span className="text-secondary turi_driver">
                      {item?.type}
                    </span>
                  </p>
                </div>

                <div className="bottom_car_driver">
                  <div className="auto_number">{item?.car_number}</div>
                  <p className="mt-3">
                    <a href="">{item?.driver_phone}</a>
                  </p>
                  <button
                    onClick={() => addDriver(item?._id)}
                    className="btn btn-success"
                  >
                    Add driver in order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="py-5">
          <div className="container px-4">
            <Select
              className="my_select"
              showSearch
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

            <div className="orab">
              <table className="mytable">
                <thead className="thread">
                  <tr>
                    {thread?.map((item, index) => (
                      <th key={index} className="jg text-center" scope="col">
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.length ? (
                    data?.data?.map((item, index) => (
                      <tr className="tr" key={item._id}>
                        <th className="jg text-center" cope="row">
                          {index + 1}
                        </th>
                        <td className="jg text-center">
                          {item?.created_at?.slice(4, 11) +
                            item?.created_at?.slice(16, 21)}
                        </td>
                        <td className="jg text-center">
                          {item?.user?.username}
                        </td>
                        <td className="jg text-center">{item?.user?.phone}</td>
                        <td className="jg text-center">
                          {item?.items?.reduce(
                            (sum, item) => (sum += item?.count),
                            0
                          )}
                        </td>
                        <td className="jg text-center">{item?.total_price}</td>
                        <td className="jg text-center">
                          <i className="fa-solid fa-location-dot text-danger fs-5"></i>
                        </td>
                        <td className="jg">
                          {item?.driver == null ? (
                            <div
                              onClick={() => setId(item?._id)}
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasRight"
                              aria-controls="offcanvasRight"
                              className="d-flex align-items-center justify-content-center "
                            >
                              <div className="auto_number">
                                <i className="fa-solid fa-plus "></i>
                              </div>
                            </div>
                          ) : (
                            <div className="d-flex align-items-center justify-content-center ">
                              <div className="auto_number">
                                {item?.driver?.car_number}
                              </div>
                            </div>
                          )}
                        </td>
                        <td
                          data-bs-toggle="modal"
                          onClick={() => setStatus(item?._id)}
                          data-bs-target="#editstatusmodal"
                          className={`jg text-center ${item?.status}`}
                        >
                          {item?.status}
                        </td>
                        <td className="jg m-auto text-center fs-2">
                          <Link
                            className="text-decoration-none text-dark"
                            to={`/mijozlar/info/${item?._id}`}
                          >
                            ...
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      {thread?.map((item, index) => (
                        <th key={index} className="jg text-center" scope="col">
                          <React_Skeleton />
                        </th>
                      ))}
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="d-flex next align-items-center">
                <div className="bor">
                  <i className="fa-solid fa-angle-left"></i>
                </div>
                1
                <div className="bor">
                  <i className="fa-solid fa-angle-right "></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
