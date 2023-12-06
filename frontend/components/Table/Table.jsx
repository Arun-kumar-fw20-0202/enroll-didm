import React, { useEffect, useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner, getKeyValue } from "@nextui-org/react";
import api from "@/pages/api/api";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function FormDataTable() {
  //   const [page, setPage] = React.useState(1);
  const [limit, setLimit] = useState(1);
  const [keyword, setKeyword] = useState("");
  const rowsPerPage = 1;

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await api.get("/enroll/data", {
        params: { page, limit, keyword },
      });

      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, limit, keyword]);

  const pages = useMemo(() => {
    return data.length ? Math.ceil(data.length / rowsPerPage) : 0;
  }, [data?.count, rowsPerPage]);

  return (
    <Table
      aria-label="Example table with client async pagination"
      bottomContent={
        pages > 0 ? (
          <div className="flex w-full justify-center">
            <Pagination isCompact showControls showShadow color="primary" page={page} total={pages} onChange={(page) => setPage(page)} />
          </div>
        ) : null
      }
      //   {...args}
    >
      <TableHeader>
        <TableColumn key="cd_name">Name</TableColumn>
        <TableColumn key="email">Email</TableColumn>
        <TableColumn key="course_type">Course</TableColumn>
        <TableColumn key="discount">Discount</TableColumn>
        <TableColumn key="company">Company</TableColumn>
        <TableColumn key="category">Category</TableColumn>
        <TableColumn key="paymentStatus">Payment</TableColumn>
        <TableColumn key="Action">Action</TableColumn>
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={item?._id}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            {/*  */}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
