import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Search from "../components/Modals/Search/Search";
import Dialog from "../components/Modals/Dialog/Dialog";

const MainLayout = (props) => {
  const [searchModal, setSearchModal] = useState(false);
  const [dialog, setDialog] = useState(false);

  useEffect(() => {
    const dialogStatus = localStorage.getItem("dialog")
      ? JSON.parse(localStorage.getItem("dialog"))
      : localStorage.setItem("dialog", JSON.stringify(true));
    setDialog(dialogStatus);
  }, []);

  return (
    <>
      <Dialog dialog={dialog} setDialog={setDialog} />
      <Search searchModal={searchModal} setSearchModal={setSearchModal} />
      <Header setSearchModal={setSearchModal} />

      {props.children}

      <Footer />
    </>
  );
};

export default MainLayout;
