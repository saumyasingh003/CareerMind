import React, { Suspense } from "react";
import { FadeLoader } from "react-spinners"; // Corrected import

const Layout = ({ children }) => {
  return (
    <div className="px-15">
      <Suspense
        fallback={
          <div className="flex items-center justify-center ">
            <FadeLoader color="gray" />
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;
