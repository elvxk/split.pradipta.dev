import formatCurrency from "@/utils/formatCurrency";
import { Card, CardContent } from "../ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Simpled = ({ result }) => {
  return (
    <Card>
      <CardContent className="pt-4 flex flex-col">
        <Table>
          <TableCaption className="text-text dark:text-darkText">
            *NB : Jika pada kolom "Hemat" ada tanda minus (-), maka tiap orang
            membayar biaya tambahan
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-bw">
              <TableHead>
                <h1>Nama</h1>
              </TableHead>
              <TableHead className="text-right">
                <h1>Total Awal</h1>
              </TableHead>
              <TableHead className="text-right">
                <h1>Hemat</h1>
              </TableHead>
              <TableHead className="text-right">
                <h1>Total Akhir</h1>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {result.map((res, index) => (
              <TableRow key={index} className="-my-2 -py-2">
                <TableCell>
                  <p className="font-bold text-sm">{res.name}</p>
                </TableCell>
                <TableCell className="text-right">
                  <p className="text-sm">
                    {formatCurrency(res.totalBeforeDiscount)}
                  </p>
                </TableCell>
                <TableCell className="text-right">
                  <p className="text-sm">{formatCurrency(res.hemat)}</p>
                </TableCell>
                <TableCell className="text-right">
                  <p className="font-bold text-sm">
                    {formatCurrency(res.amountToPay)}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
export default Simpled;
