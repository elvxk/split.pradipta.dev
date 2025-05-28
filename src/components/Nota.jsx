import formatCurrency from "@/utils/formatCurrency";

const Nota = ({ grand, total }) => {
  return (
    <div className="sm:w-1/2 lg:w-1/3 mx-auto text-center p-2 border-black/50 border-2 text-sm bg-bw">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>{formatCurrency(grand)}</span>
      </div>
      <div className="flex justify-between">
        <span>Diskon</span>
        <span>-{formatCurrency(total.discount)}</span>
      </div>
      <div className="flex justify-between">
        <span>Biaya Pengiriman</span>
        <span>{formatCurrency(total.deliveryFee)}</span>
      </div>
      <div className="flex justify-between">
        <span>Biaya Layanan</span>
        <span>{formatCurrency(total.serviceFee)}</span>
      </div>
      <div className="flex justify-between font-bold border-t-black border-t-2 text-lg">
        <h1>Grand Total</h1>
        <h1>
          {formatCurrency(
            grand - total.discount + total.deliveryFee + total.serviceFee,
          )}
        </h1>
      </div>
    </div>
  );
};
export default Nota;
