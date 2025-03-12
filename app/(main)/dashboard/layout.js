import React, { Suspense } from "react";
import { FadeLoader } from "react-spinners"; // Corrected import

const Layout = ({ children }) => {
  return (
    <div className="px-15">
      <div className="flex items-center justify-between  ">
        <h1 className="sm:text-6xl text-4xl font-bold gradient-title mt-30 mb-10">
          Industry Insights
        </h1>
        <hr />
      </div>
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
