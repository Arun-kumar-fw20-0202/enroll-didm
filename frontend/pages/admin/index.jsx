import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import api from "../api/api";
import DataTable from "react-data-table-component";
import { useGetFormData } from "@/libs/Query/useGetFormData";
import useDeleteExpHead from "@/libs/Murations/useDeleteFormData";

const Index = () => {
  const [filData, setFilData] = useState(null);
  const [expData, setExpData] = useState("");

  const { data: data, isLoading: loading } = useGetFormData();
  const { mutate: deleteData } = useDeleteExpHead();

  const columns = [
    {
      name: "Name",
      selector: (row) => row.cd_name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    ,
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    ,
    {
      name: "Phone Number",
      selector: (row) => row.phone_number,
      sortable: true,
    },
    ,
    {
      name: "Company",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="flex gap-3">
          <button className="bg-red-500 p-1 text-white" onClick={() => handleDelete(row._id)}>
            <AiOutlineDelete />
          </button>
        </div>
      ),
    },
  ];

  const handleDelete = (id) => {
    deleteData(id);
  };

  const handleSearch = (e) => {
    let val = e.target.value;
    const filteredData = data.filter((item) => {
      const propToSearch = ["cd_name", "email", "category", "phone_number", "company", "branch", "cityname", "state"];

      for (const property of propToSearch) {
        const value = item[property] || "";
        const valueLower = value.toLowerCase();

        if (valueLower.includes(val.toLowerCase())) {
          return true;
        }
      }

      return false;
    });
    setFilData(filteredData);
  };

  useEffect(() => {
    api
      .get("/enroll/data")
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // 48490
  return (
    <div className="flex justify-center p-4">
      <div className="w-[80%] min-h-[50vh] p-5 border">
        <div className=" w-[60%]">
          <input placeholder="Search" onChange={handleSearch} className="border-b border-gray-400 w-[60%] px-3 p-1" type="text" />
        </div>
        <DataTable
          pagination
          highlightOnHover
          persistTableHead //
          fixedHeader
          fixedHeaderScrollHeight="400px"
          p="50px"
          columns={columns}
          data={filData == null ? data : filData}
        />
      </div>
    </div>
  );
};

export default Index;
