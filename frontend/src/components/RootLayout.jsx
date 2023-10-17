import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const RootLayout = () => {
  // Let us know about a page navigation -> status (idle/ submitting/ loading  )
  const navigation = useNavigation();

  // The loader indicator must be in a component/page already visible on the screen
  return (
    <>
      <MainNavigation />
      {navigation.state === "loading" ? 
        <p>Loading...</p> : 
       ( <main>
          <Outlet />
        </main>)
      }
    </>
  );
};

export default RootLayout;
