import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import "../../styles/Clients/MijozInfo.css";
import { Link, useParams } from "react-router-dom";
import { api } from "../../API/api";
import { date } from "yup";
import React_Skeleton from "../../components/React_Skeleton/React_Skeleton";

const MijozInfo = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [order, setOrder] = useState([]);
  const { id } = useParams();
  const orderfindInfo = async () => {
    try {
      setLoading(true);
      const { data } = await api.getOneOrderInfo(id);
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const orderGetSub_producst = async () => {
    try {
      const { data } = await api.getSubProductOrder(id);
      setOrder(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    orderGetSub_producst();
  }, []);

  useEffect(() => {
    orderfindInfo();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="ummumiy">
        <Header />
        <section className="info py-4">
          <div className="container px-4">
            <div className="hammasi">
              <div className="jadval">
                <div className="topdiv  d-flex justify-content-between">
                  <div className="mijoz d-flex align-items-center gap-3">
                    <Link
                      to={`/mijozlar/${data?.data?.user?._id}`}
                      className="text-dark text-decoration-none "
                    >
                      <div className="bor">
                        <i className="fa-solid fa-angle-left"></i>
                      </div>
                    </Link>
                    <h4>{data?.data?.user ? ((data?.data?.user?.username)) : (<React_Skeleton />)}</h4>
                  </div>
                  <div>
                    <p className="text-secondary">Buyurtma vaqti:</p>
                    <h6 className="buyutrma">
                      {data?.data?.created_at?.slice(4, 10) +
                        data?.data?.created_at?.slice(15, 25)}
                    </h6>
                  </div>
                  <button className="phone-btn">
                    {data?.data?.user?.phone}
                  </button>
                </div>
              </div>
              <div className="orta-dev align-items-center mt-3 d-flex justify-content-evenly">
                <div className="bh">
                  <div className="location">
                    <p>Manzil</p>
                    <i className="fa-solid fa-location-dot text-danger fs-5"></i>
                  </div>
                  <p
                    onCopy={data?.data?.location}
                    className="d-flex gap-1 align-items-center mt-2"
                  >
                    <i className="fa-solid fa-paste fs-5"></i> Copy address link
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <h5 className="text-center">Holat</h5>
                  <button className={`holat-btn-${data?.data?.status} `}>
                    {data?.data?.status}
                  </button>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <h5>Driver</h5>
                  <button className="btn-driver">
                    {data?.data?.driver == null
                      ? "no selected"
                      : data?.data?.driver?.car_number}
                  </button>
                </div>
              </div>
              <div className="table-brder mt-4">
                <table className="mytable">
                  <thead className="top-thread">
                    <tr>
                      <th className="hg text-center" scope="col">
                        Mahsulotlar
                      </th>
                      <th className="hg text-center" scope="col">
                        Soni
                      </th>
                      <th className="hg text-center" scope="col">
                        NARXI
                      </th>
                      <th className="jg text-center" scope="col">
                        Jami
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {order?.data?.map((item, index) => (
                      <tr className="tr">
                        <td className="hg text-center">
                          {item?.sub_product_name}
                        </td>
                        <td className="hg text-center">
                          {data?.data?.items[index].count}
                        </td>
                        <td className="hg text-center">{item?.price}</td>
                        <td className="jg text-center">
                          {data?.data?.items?.[index].count * item?.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="py-3 d-flex  align-items-center justify-content-around">
                  <div className="">
                    <p className="text-center text-secondary">Tolov tizimi: </p>
                    <h5 className="text-center tizim "><i className="fa-solid fa-credit-card text-warning fs-5"></i> {data?.data?.payment_type?.payment_type}</h5>
                  </div>
                  <div>
                    <p className="text-center text-secondary">Jami:</p>
                    <h5 className="text-center som">{data?.data?.total_price} so'm</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MijozInfo;
