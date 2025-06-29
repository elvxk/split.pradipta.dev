// "use client"
import handleKeyDown from "@/utils/handleKey";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { Button } from "./ui/button";
import { FaRegTrashAlt } from "react-icons/fa";

const Discount = ({ total, setTotal }) => {
  const [showOtherFee, setShowOtherFee] = useState(false);

  const handleTotalChange = (e) => {
    const { name, value } = e.target;
    setTotal({ ...total, [name]: value === "" ? 0 : parseFloat(value) });
  };

  const handleRemoveOtherFee = () => {
    setTotal({ ...total, otherFee: 0 });
    setShowOtherFee(false);
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


        <div className="flex flex-col pt-4 w-full gap-2">
          {!showOtherFee ? (
            <Button
              variant="neutral"
              type="button"
              onClick={() => setShowOtherFee(true)}
            >
              Tambah Biaya Lainnya
            </Button>
          ) : (
            <div className="flex  gap-2 flex-row items-end md:items-center">
              <div className="flex gap-2 flex-col w-full">
                <Label>Biaya Lainnya</Label>
                <Input
                  type="number"
                  name="otherFee"
                  value={total.otherFee === 0 ? "" : total.otherFee}
                  onChange={handleTotalChange}
                  placeholder="Biaya lainnya"
                  onKeyDown={handleKeyDown}
                  min="0"
                  className="no-arrows"
                />
              </div>
              <Button
                className="md:self-end bg-bw"
                onClick={handleRemoveOtherFee}
                variant="reverse"
              >
                <FaRegTrashAlt />
              </Button>

            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
export default Discount;
