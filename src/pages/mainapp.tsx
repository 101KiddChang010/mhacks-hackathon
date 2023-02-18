import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import HtmlHead from "./component/htmlhead";
import Navbar from "./component/navbar";

import { api } from "../utils/api";

const MainApp: NextPage = () => {
  return (
    <>
      <HtmlHead />
      <Navbar />
    </>
  );
};
