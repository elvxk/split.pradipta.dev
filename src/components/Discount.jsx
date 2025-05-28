import handleKeyDown from "@/utils/handleKey";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const Discount = ({ total, setTotal }) => {
  const handleTotalChange = (e) => {
    const { name, value } = e.target;
    setTotal({ ...total, [name]: value === "" ? 0 : parseFloat(value) });
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex gap-2 flex-col w-full">
            <Label className="whitespace-nowrap">Diskon</Label>
            <Input
              type="number"
              name="discount"
              value={total.discount === 0 ? "" : total.discount}
              onChange={handleTotalChange}
              placeholder="Total diskon"
              onKeyDown={handleKeyDown}
              min="0"
              className="no-arrows"
            />
          </div>
          <div className="flex gap-2 flex-col w-full">
            <Label className="whitespace-nowrap">Biaya Pengiriman</Label>
            <Input
              type="number"
              name="deliveryFee"
              value={total.deliveryFee === 0 ? "" : total.deliveryFee}
              placeholder="Biaya pengiriman"
              onChange={handleTotalChange}
              onKeyDown={handleKeyDown}
              min="0"
              className="no-arrows"
            />
          </div>
          <div className="flex gap-2 flex-col w-full">
            <Label className="whitespace-nowrap">Biaya Layanan</Label>
            <Input
              type="number"
              name="serviceFee"
              value={total.serviceFee === 0 ? "" : total.serviceFee}
              placeholder="Biaya layanan"
              onChange={handleTotalChange}
              onKeyDown={handleKeyDown}
              min="0"
              className="no-arrows"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default Discount;
