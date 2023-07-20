import Footer from "./footer";
import Wallet_modal from "./modal/wallet_modal";
import BidsModal from "./modal/bidsModal";
import BuyModal from "./modal/buyModal";
import { useRouter } from "next/router";
import Header01 from "./header/Header01";
import Header02 from "./header/Header02";
import Header03 from "./header/Header03";
import Header04 from "./header/Header04";

export default function Layout({ children }) {
  const route = useRouter();
  // header start
  let header = <Header01 />;
 
  return (
    <>
      {header}
      <Wallet_modal />
      <BidsModal />
      <BuyModal />
      <main>{children}</main>
      <Footer />
    </>
  );
}
