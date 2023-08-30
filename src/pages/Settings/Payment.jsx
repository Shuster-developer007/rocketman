import React, { useEffect, useRef, useState } from "react";
import "../../styles/Settings/Payment.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SettingsLinks from "../../components/SettingsLinks";
import { api } from "../../API/api";
import { toast } from "react-toastify";
import { Radio } from "antd";
import React_Skeleton from "../../components/React_Skeleton/React_Skeleton";

const Payment = () => {
  const [data, setData] = useState([]);
  const [payment, setPayment] = useState({});
  const [error, setError] = useState(false);
  const [id, setId] = useState();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(false);
  const [payment_type, setPayment_type] = useState("");
  const [payment_telg, setPayment_telg] = useState("");
  const [payment_link, setPayment_link] = useState("");

  const editPayment_typeRef = useRef();
  const editpayment_telegramRef = useRef();
  const editlinkRef = useRef();
  const payment_typeRef = useRef();
  const payment_telegramRef = useRef();
  const linkRef = useRef();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const getPayments = async () => {
    try {
      setLoading(true);
      const { data } = await api.getSettingsPayment();
      setData(data);
    } catch (error) {
      setError(true);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPayments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreatePayment = async () => {
    try {
      const create_payment = {
        payment_type: payment_typeRef.current.value,
        telegram_payment: payment_telegramRef.current.value,
        link: linkRef.current.value,
        status: value === "on" ? true : false,
      };
      const { data } = await api.createPayment(create_payment);
      if (data.status == 400 && data.name == "ValidationError") {
        toast("Iltimos malumotlarni to'liq va to'gri kirgizing", {
          type: "error",
        });
      }
      if (data.status == 201) {
        getPayments();
        toast("Success created Payment", { type: "success" });
      }
    } catch (error) {
      console.log(error);
      toast(error.response.data.message, { type: "error" });
    }
  };
  const getOnePaymentOrEdit = async (id) => {
    try {
      const { data } = await api.getOnePayment(id);
      setPayment_type(data?.data?.payment_type);
      setPayment_link(data?.data?.link);
      setPayment_telg(data?.data?.telegram_payment);
      setPayment(data?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleupdatedPayment = async () => {
    try {
      const update_payment = {
        payment_type: payment_type,
        link: payment_link,
        status: value == "on" ? true : false,
        telegram_payment: payment_telg,
      };
      const data = await api.updatedPayment(payment._id, update_payment);
      if (data.status == 202) {
        getPayments();
        toast("Success updated payment", { type: "success" });
      }
    } catch (error) {
      toast("Update qilishda xatolik yuz berdi");
    }
  };

  const handleDeletePayment = async (id) => {
    const sorov = confirm("siz bu paymentni o'chirishga ishonchiz komilmi");
    if (sorov == true) {
      try {
        const { data } = await api.deletePayment(id);
        toast("Success deleted payment", { type: "success" });
        getPayments();
      } catch (error) {
        toast(error.response.data.message, { type: "error" });
      }
    } else if (sorov == false) {
      return;
    }
  };

  const title = [
    "NOMI",
    "TELEGRAM BUTTON NAME",
    "LINK",
    "HOLAT",
    "TAHRIRLASH",
    "O'CHIRISH",
  ];

  return (
    <div>
      <Sidebar />
      <div className="ummumiy">
        <Header />
        <div
          className="modal fade "
          id="editmodal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog d-flex justify-content-center">
            <div className="modal-content ">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Tahrirlash
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form action="">
                  <label htmlFor="name" className="my-3">
                    Nomi
                  </label>
                  <input
                    value={payment_type}
                    onChange={(e) => setPayment_type(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder={payment?.data?.payment_type}
                    id="name"
                    name="name"
                    required
                  />
                  <label htmlFor="telegram_btn_name" className=" my-3">
                    Telegram button name
                  </label>
                  <input
                    value={payment_telg}
                    onChange={(e) => setPayment_telg(e.target.value)}
                    type="text"
                    className="form-control"
                    id="telegram_btn_name"
                    placeholder="masalan : click"
                    required
                  />
                  <label htmlFor="link" className=" my-3">
                    Link
                  </label>
                  <input
                    value={payment_link}
                    onChange={(e) => setPayment_link(e.target.value)}
                    type="text"
                    className="form-control"
                    id="link"
                    placeholder="link"
                    required
                  />
                  <div className="">
                    <label htmlFor="status" className="mt-3">
                      Holat
                    </label>
                    <div required className="d-flex gap-4">
                      <Radio.Group onChange={onChange} value={value}>
                        <Radio value={"on"}>on</Radio>
                        <Radio value={"off"}>off</Radio>
                      </Radio.Group>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer d-flex justify-content-center align-items-center">
                <button
                  type="submit"
                  onClick={() => handleupdatedPayment()}
                  className="btn_modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade "
          id="createmodal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog d-flex justify-content-center">
            <div className="modal-content ">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Qo'shish
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form action="">
                  <label htmlFor="name" className="my-3">
                    Nomi
                  </label>
                  <input
                    ref={payment_typeRef}
                    type="text"
                    className="form-control"
                    placeholder="Payment name"
                    id="name"
                    required
                    name="name"
                  />
                  <label htmlFor="telegram_btn_name" className=" my-3">
                    Telegram button name
                  </label>
                  <input
                    ref={payment_telegramRef}
                    type="text"
                    className="form-control"
                    id="telegram_btn_name"
                    required
                    placeholder="masalan : click"
                  />
                  <label htmlFor="link" className=" my-3">
                    Link
                  </label>
                  <input
                    ref={linkRef}
                    type="text"
                    className="form-control"
                    id="link"
                    required
                    placeholder="link"
                  />
                  <div className="">
                    <label htmlFor="status" className="mt-3">
                      Holat
                    </label>
                    <div required className="d-flex gap-4">
                      <Radio.Group onChange={onChange} value={value}>
                        <Radio value={"on"}>on</Radio>
                        <Radio value={"off"}>off</Radio>
                      </Radio.Group>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer d-flex justify-content-center align-items-center">
                <button
                  type="submit"
                  onClick={() => handleCreatePayment()}
                  className="btn_modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <section className="py-4">
          <div className="container px-5">
            <div className="d-flex justify-content-center">
              <SettingsLinks />
            </div>

            <div className="d-flex mt-5 justify-content-between align-items-center">
              {loading ? (
                <h2 className="title">Loading...</h2>
              ) : (
                <h2 className="title">To'lov turlari</h2>
              )}
              <button
                type="button"
                className="btn-add d-flex gap-2 justify-content-center align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#createmodal"
              >
                Qo'shish
                <div className="added_border">
                  <i className="fa-solid fa-plus plus_icon"></i>
                </div>
              </button>
            </div>
            <div className="orab mt-3">
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
                    data?.data?.map((item) => (
                      <tr className="tr" key={item._id}>
                        <th className="jg text-center" cope="row">
                          {item.payment_type}
                        </th>
                        <td className="jg text-center d-flex align-items-center justify-content-center gap-2 py-4">
                          <i className="fa-solid fa-credit-card text-warning"></i>
                          {item.telegram_payment}
                        </td>
                        <td className="jg text-center">
                          <a href={item.link} target="_blank">
                            <i className="fa-solid fa-link"></i>
                          </a>
                        </td>
                        <td className="jg ">
                          {item.status == true ? (
                            <div className="d-flex justify-content-center align-items-center">
                              <div className="enabled text-success d-flex align-items-center justify-content-center">
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
                        <td className="jg">
                          <div
                            onClick={() => getOnePaymentOrEdit(item._id)}
                            className="d-flex justify-content-center align-items-center"
                          >
                            <div
                              data-bs-toggle="modal"
                              data-bs-target="#editmodal"
                              className="setting_icon_edit"
                            >
                              <i className="fa-solid fa-marker text-white"></i>
                            </div>
                          </div>
                        </td>
                        <td className="jg">
                          <div className="d-flex justify-content-center align-items-center">
                            <div
                              onClick={() => handleDeletePayment(item._id)}
                              className="setting_icon_delete my-3"
                            >
                              <i className="fa-solid fa-trash text-white"></i>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : loading ? (
                    <tr>
                      {title?.map((item, index) => (
                        <th key={index} className="jg text-center" scope="col">
                          <React_Skeleton />
                        </th>
                      ))}
                    </tr>
                  ) : error ? (
                    <p className="py-4 ms-3">Serverdan javob yo'q</p>
                  ) : (
                    <div className="morke py-4  d-flex justify-content-between">
                      <h5 className="py-4 ms-3">Ma'lumotlar yo'q</h5>
                    </div>
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

export default Payment;
