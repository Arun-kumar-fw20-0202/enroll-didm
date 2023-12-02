import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function NavDrawer({ show = false, closeDrawer, arr = [], arr1 = [] }) {
  //   const [open, setOpen] = React.useState(false);

  //   const openDrawer = () => setOpen(true);
  //   const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Drawer open={show} onClose={closeDrawer} placement="top" className="p-4">
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
        <div className="flex flex-col gap-4 text-[14px] hover:text-red-800 duration-300 transition-all">
          {arr.map((el, i) => (
            <div>{el?.name}</div>
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-4 text-[14px] hover:text-red-800 duration-300 transition-all">
          {arr1.map((el, i) => (
            <div className="text-black">{el.name}</div>
          ))}
        </div>
      </Drawer>
    </React.Fragment>
  );
}
