import formatCurrency from "@/utils/formatCurrency";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Detailed = ({ result }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
      {result.map((res, index) => (
        <Card key={index}>
          <CardHeader className="flex justify-center items-center -m-4">
            <CardTitle className="font-bold text-xl">
              <h1>{res.name}</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="border-t-2 pt-2 border-t-black text-xs flex flex-col">
            {res.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex justify-between py-1">
                <span>{item.name}</span>
                <span>{formatCurrency(item.price)}</span>
              </div>
            ))}
            <div className="flex flex-col border-y-2 border-y-black gap-1 py-1 my-1">
              <div className="flex justify-between">
                <span>Total</span>
                <span>{formatCurrency(res.totalBeforeDiscount)}</span>
              </div>

              <div className="flex justify-between">
                <span> {res.hemat > 0 ? "Hemat" : "Admin"}</span>
                <span>
                  {res.hemat > 0 ? "-" : ""}
                  {formatCurrency(res.hemat)}
                </span>
              </div>
            </div>

            <div className="flex justify-between font-bold text-lg bg-bw rounded-md -mx-1 px-1">
              <h1>Total Final</h1>
              <h1>{formatCurrency(res.amountToPay)}</h1>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default Detailed;
