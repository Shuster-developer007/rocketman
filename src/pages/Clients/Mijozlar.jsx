/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import "../../styles/Clients/Mijozlar.css";
import { Link } from "react-router-dom";
import { api } from "../../API/api";
import React_Skeleton from "../../components/React_Skeleton/React_Skeleton";
import searchService from "../../API/search-service";

const Mijozlar = () => {
  const [searchClients, setSearchClients] = useState([]);
  const [data, setData] = useState(searchClients.length ? searchClients : []);
  const [loading, setLoading] = useState(false);

  const getClients = async () => {
    try {
      setLoading(true);
      const { data } = await api.getClient();
      setData(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (onSearch) => {
    const response = await searchService.getUsersByInput(onSearch);
    try {
      if (response.status === 200 && response?.data?.data?.length > 0) {
        setSearchClients(response.data.data);
        console.log(response);
      }
    } catch (error) {
      console.log(response);
    }
  };

  const handleSearchChange = (evt) => {
    const currVal = evt.target.value;
    if (currVal === "" || currVal.trim()) {
      setSearchClients([]);
    }
  };

  const thread = ["ID", "ISM", "TELEFON RAQAM", "BUYURTMALAR"];

  const ClientsRender = (props) => {
    return props.data?.length ? (
      props.data?.map((item) => (
        <tr
          key={item._id}
          className="tr"
        >
          <th className="jg text-center">{item.second_id}</th>
          <td className="jg text-center">
            <Link
              to={`/mijozlar/${item._id}`}
              className="text-decoration-none link"
            >
              {item.username}
            </Link>
          </td>
          <td className="jg text-center">
            <Link
              to={`/mijozlar/${item._id}`}
              className="text-decoration-none link"
            >
              {item.phone}
            </Link>
          </td>
          <td className="jg text-center">{item.orders.length}</td>
        </tr>
      ))
    ) : (
      <tr>
        {thread.map((item, i) => (
          <th key={i}>
            <React_Skeleton />
          </th>
        ))}
      </tr>
    );
  };
  useEffect(() => {
    getClients();
  }, []);
  console.log(searchClients);
  console.log(data);
  return (
    <div>
      <Sidebar />
      <div className="ummumiy">
        <Header
          handleSearch={handleSearch}
          handleSearchChange={handleSearchChange}
        />
        <section className="mijozlar">
          <div className="container px-4">
            {loading ? (
              <h3 className="mt-5">Loading...</h3>
            ) : (
              <h3 className="mt-5">Bizning Mijozlar</h3>
            )}
            <div className="orab mt-4">
              <table className="mytable">
                <thead className="thread">
                  <tr>
                    {thread.map((item, index) => (
                      <th
                        key={index}
                        className="jg text-center"
                        scope="col"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {searchClients.length > 0 ? (
                    <ClientsRender data={searchClients} />
                  ) : (
                    <ClientsRender data={data?.data} />
                  )}
                </tbody>
              </table>
              <div className="d-flex next">
                <div className="bor">
                  <i className="fa-solid fa-angle-left"></i>
                </div>
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

export default Mijozlar;
