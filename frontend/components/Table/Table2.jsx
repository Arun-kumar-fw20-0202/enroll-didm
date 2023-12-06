import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, Button, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem, Chip, User, Pagination } from "@nextui-org/react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "actions"];

export default function FormDataTable2() {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [statusFilter, setStatusFilter] = React.useState("all");

  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(1);
  const [keyword, setKeyword] = useState("");

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const columns = [
    { name: "NAME", uid: "name" },
    { name: "BRANCH", uid: "branch" },
    { name: "STATE", uid: "state" },
    { name: "COURSE", uid: "course" },
    { name: "PAYMENT", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const statusOptions = [
    { name: "Active", uid: "active" },
    { name: "Paused", uid: "paused" },
    { name: "Vacation", uid: "vacation" },
  ];

  const users = [
    {
      id: 1,
      name: "Tony Reichert",
      role: "CEO",
      team: "Management",
      status: "active",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "tony.reichert@example.com",
    },
    {
      id: 2,
      name: "Zoey Lang",
      role: "Tech Lead",
      team: "Development",
      status: "paused",
      age: "25",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      email: "zoey.lang@example.com",
    },
    {
      id: 3,
      name: "Jane Fisher",
      role: "Sr. Dev",
      team: "Development",
      status: "active",
      age: "22",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      email: "jane.fisher@example.com",
    },
    {
      id: 4,
      name: "William Howard",
      role: "C.M.",
      team: "Marketing",
      status: "vacation",
      age: "28",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      email: "william.howard@example.com",
    },
    {
      id: 5,
      name: "Kristen Copper",
      role: "S. Manager",
      team: "Sales",
      status: "active",
      age: "24",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      email: "kristen.cooper@example.com",
    },
    {
      id: 6,
      name: "Brian Kim",
      role: "P. Manager",
      team: "Management",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "brian.kim@example.com",
      status: "Active",
    },
    {
      id: 7,
      name: "Michael Hunt",
      role: "Designer",
      team: "Design",
      status: "paused",
      age: "27",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
      email: "michael.hunt@example.com",
    },
    {
      id: 8,
      name: "Samantha Brooks",
      role: "HR Manager",
      team: "HR",
      status: "active",
      age: "31",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
      email: "samantha.brooks@example.com",
    },
    {
      id: 9,
      name: "Frank Harrison",
      role: "F. Manager",
      team: "Finance",
      status: "vacation",
      age: "33",
      avatar: "https://i.pravatar.cc/150?img=4",
      email: "frank.harrison@example.com",
    },
    {
      id: 10,
      name: "Emma Adams",
      role: "Ops Manager",
      team: "Operations",
      status: "active",
      age: "35",
      avatar: "https://i.pravatar.cc/150?img=5",
      email: "emma.adams@example.com",
    },
    {
      id: 11,
      name: "Brandon Stevens",
      role: "Jr. Dev",
      team: "Development",
      status: "active",
      age: "22",
      avatar: "https://i.pravatar.cc/150?img=8",
      email: "brandon.stevens@example.com",
    },
    {
      id: 12,
      name: "Megan Richards",
      role: "P. Manager",
      team: "Product",
      status: "paused",
      age: "28",
      avatar: "https://i.pravatar.cc/150?img=10",
      email: "megan.richards@example.com",
    },
    {
      id: 13,
      name: "Oliver Scott",
      role: "S. Manager",
      team: "Security",
      status: "active",
      age: "37",
      avatar: "https://i.pravatar.cc/150?img=12",
      email: "oliver.scott@example.com",
    },
    {
      id: 14,
      name: "Grace Allen",
      role: "M. Specialist",
      team: "Marketing",
      status: "active",
      age: "30",
      avatar: "https://i.pravatar.cc/150?img=16",
      email: "grace.allen@example.com",
    },
    {
      id: 15,
      name: "Noah Carter",
      role: "IT Specialist",
      team: "I. Technology",
      status: "paused",
      age: "31",
      avatar: "https://i.pravatar.cc/150?img=15",
      email: "noah.carter@example.com",
    },
    {
      id: 16,
      name: "Ava Perez",
      role: "Manager",
      team: "Sales",
      status: "active",
      age: "29",
      avatar: "https://i.pravatar.cc/150?img=20",
      email: "ava.perez@example.com",
    },
    {
      id: 17,
      name: "Liam Johnson",
      role: "Data Analyst",
      team: "Analysis",
      status: "active",
      age: "28",
      avatar: "https://i.pravatar.cc/150?img=33",
      email: "liam.johnson@example.com",
    },
    {
      id: 18,
      name: "Sophia Taylor",
      role: "QA Analyst",
      team: "Testing",
      status: "active",
      age: "27",
      avatar: "https://i.pravatar.cc/150?img=29",
      email: "sophia.taylor@example.com",
    },
    {
      id: 19,
      name: "Lucas Harris",
      role: "Administrator",
      team: "Information Technology",
      status: "paused",
      age: "32",
      avatar: "https://i.pravatar.cc/150?img=50",
      email: "lucas.harris@example.com",
    },
    {
      id: 20,
      name: "Mia Robinson",
      role: "Coordinator",
      team: "Operations",
      status: "active",
      age: "26",
      avatar: "https://i.pravatar.cc/150?img=45",
      email: "mia.robinson@example.com",
    },
  ];

  const pages = Math.ceil(data.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data.slice(start, end);
  }, [page, data, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user?.[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User avatarProps={{ radius: "lg", src: user?.avatar }} description={user?.email} name={"cellValue"}>
            {user?.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">{user?.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user?.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <BsThreeDotsVertical />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>View</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  //   const rowsPerPage = 1;

  const fetchData = async () => {
    try {
      const response = await api.get("/enroll/data", {
        params: { page, limit, keyword },
      });

      setData(response.data.data);
      console.log(response?.data?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, limit, keyword]);
  console.log(data);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input isClearable className="w-full sm:max-w-[44%]" placeholder="Search by name..." startContent={<CiSearch />} value={filterValue} onClear={() => onClear()} onValueChange={onSearchChange} />
          <div className="flex gap-3">
            <Button color="primary" endContent={<FaPlus />}>
              Add New
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {data.length} users</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select className="bg-transparent outline-none text-default-400 text-small" onChange={onRowsPerPageChange}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [filterValue, statusFilter, onRowsPerPageChange, data.length, onSearchChange, hasSearchFilter]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">{selectedKeys === "all" ? "All items selected" : `${selectedKeys.size} of ${data.length} selected`}</span>
        <Pagination isCompact showControls showShadow color="primary" page={page} total={pages} onChange={setPage} />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px]",
      }}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column?.uid} align={column?.uid === "actions" ? "center" : "start"} allowsSorting={column?.sortable}>
            {column?.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={sortedItems}>
        {(item) => <TableRow key={item._id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}
      </TableBody>
    </Table>
  );
}
