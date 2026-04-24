import { Header } from "../sections/header/Header";
import { CartSummary } from "./CartSummary";
import { CustomerInfo } from "./CustomerInfo";

export const Checkout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col-reverse sm:flex-row gap-10 -mt-25 pt-30 mx-4 lg:mx-40">
        <CustomerInfo />
        <CartSummary />
      </div>
    </>
  );
};
