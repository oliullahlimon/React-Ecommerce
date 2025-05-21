import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <div className="main-container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Service 1 */}
        <div className="flex flex-col gap-4 justify-center items-center bg-cyan-100 text-center rounded-3xl shadow-sm p-6">
          <TbTruckDelivery className="w-8 h-8 text-indigo-600" />
          <h3 className="text-xl font-medium">Super Fast and Free Delivery</h3>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center justify-center gap-4 bg-cyan-100 text-center rounded-3xl shadow-sm p-6">
            <MdSecurity className="w-8 h-8 text-indigo-600" />
            <h3 className="text-xl font-medium ">Non-contact Shipping</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 bg-cyan-100 text-center rounded-3xl shadow-sm p-6">
            <GiReceiveMoney className="w-8 h-8 text-indigo-600" />
            <h3 className="text-xl font-medium">Money-back Guaranteed</h3>
          </div>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col gap-4 justify-center items-center bg-cyan-100 text-center rounded-3xl shadow-sm p-6">
          <RiSecurePaymentLine className="w-8 h-8 text-indigo-600" />
          <h3 className="text-xl font-medium">Super Secure Payment System</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
