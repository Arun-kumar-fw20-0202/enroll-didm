import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import api from "../api/api";
import DataTable from "react-data-table-component";
import { useGetFormData } from "@/libs/Query/useGetFormData";
import useDeleteExpHead from "@/libs/Murations/useDeleteFormData";
import { Button } from "@nextui-org/react";

import { MdOutlinePhone, MdOutlineMailOutline } from "react-icons/md";
import useLogout from "@/libs/Murations/admin/useLogout";

const Index = () => {
  const [filData, setFilData] = useState(null);

  const { data: data, isLoading: loading } = useGetFormData();
  const { mutate: deleteData } = useDeleteExpHead();
  const { mutate: handleLogout } = useLogout();

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
    {
      name: "Company",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "Discount",
      selector: (row) => row.discount + "%",
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

  let navLink1 = [
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "News & Events",
      link: "/news_events",
    },
    {
      name: "Franchise",
      link: "/franchise",
    },
    {
      name: "Careers",
      link: "/careers",
    },
  ];

  let navLink2 = [
    {
      name: "info@didm.in",
      // link: "/blogs",
      icon: MdOutlinePhone,
    },
    {
      name: "+91 8800505151",
      // link: "/news_events",
      icon: MdOutlineMailOutline,
    },
  ];
  // 48490
  return (
    <>
      <div>
        <div className="h-10 flex justify-between px-28 w-full bg-[#B52828]">
          {/* one  */}
          <div className="flex gap-8 items-center h-full">
            {navLink1.map((el, i) => (
              <div key={i}>
                <p className="text-white text-[15px]">{el.name}</p>
              </div>
            ))}
          </div>
          {/* two  */}
          <div className="flex gap-8 items-center h-full">
            {navLink2.map((el, i) => (
              <div key={i} className="flex gap-2 items-center">
                {<el.icon className="text-white" />}
                <p className="text-white text-[15px]">{el.name}</p>
              </div>
            ))}
            <Button size="sm" className="bg-transparent text-white border" onClick={() => handleLogout()}>
              Logout
            </Button>
          </div>
        </div>
      </div>

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
    </>
  );
};

//private route func
export const getServerSideProps = async ({ req, res }) => {
  let cookieStore = req?.cookies?.auth_token;
  if (!cookieStore) {
    return {
      redirect: {
        destination: "/login",
        parmanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default Index;
