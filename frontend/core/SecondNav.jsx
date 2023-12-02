import React from "react";
import {
  Drawer,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { MdOutlinePhone } from "react-icons/md";
import { Button } from "@nextui-org/react";

function SecondNav({ show = false, arr1 = [], closeDrawer }) {
  //   const [open, setOpen] = React.useState(false);

  //   const openDrawer = () => setOpen(true);
  //   const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Drawer open={show} onClose={closeDrawer} className="p-4 ">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Enroll Course
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        {/* body  */}
        <div className="flex flex-col gap-4 ml-2 text-[17px]">
          {arr1.map((el, i) => (
            <div>{el.name}</div>
          ))}
          <div className="h-full flex items-center">
            <Button
              variant="bordered"
              className="text-red-600 focus:outline-none border-red-800 font-semibold"
            >
              <MdOutlinePhone /> Request Callback
            </Button>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}

export default SecondNav;
