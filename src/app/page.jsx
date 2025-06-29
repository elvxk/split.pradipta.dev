"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import PersonInput from "@/components/PersonInput";
import Discount from "@/components/Discount";
import Result from "@/components/Result";
import Nota from "@/components/Nota";
import Image from "next/image";
import elvxk from "./elvxk";
import Link from "next/link";

const Home = () => {
  useEffect(() => {
    console.info(elvxk);
  }, []);

  const [people, setPeople] = useState([
    { name: "", items: [{ name: "", price: 0 }] },
    { name: "", items: [{ name: "", price: 0 }] },
  ]);
  const [total, setTotal] = useState({
    discount: 0,
    deliveryFee: 0,
    serviceFee: 0,
    otherFee: 0,
  });
  const [result, setResult] = useState([]);
  const [grand, setGrand] = useState(0);

  const addPerson = () => {
    setPeople([...people, { name: "", items: [{ name: "", price: 0 }] }]);
  };

  const calculateTotal = () => {
    const grandTotal = people.reduce((acc, person) => {
      const personTotal = person.items.reduce(
        (itemAcc, item) => itemAcc + parseFloat(item.price),
        0,
      );
      return acc + personTotal;
    }, 0);

    const totalWithFees =
      grandTotal - total.discount + total.deliveryFee + total.serviceFee + total.otherFee;

    const individualTotals = people.map((person) => {
      const personTotal = person.items.reduce(
        (itemAcc, item) => itemAcc + parseFloat(item.price),
        0,
      );
      const percentage = personTotal / grandTotal;
      const amountToPay = percentage * totalWithFees;
      const totalSavings = personTotal * (total.discount / grandTotal);
      const hemat = personTotal - amountToPay;
      const finalAmount =
        personTotal -
        totalSavings +
        percentage * total.deliveryFee +
        percentage * total.serviceFee +
        percentage * total.otherFee;
      return {
        name: person.name,
        items: person.items,
        totalBeforeDiscount: personTotal.toFixed(0),
        discount: totalSavings.toFixed(0),
        amountToPay: finalAmount.toFixed(0),
        hemat: hemat.toFixed(0),
      };
    });

    setGrand(grandTotal);
    setResult(individualTotals);
  };

  return (
    <div className="min-h-screen p-4 pt-6 flex flex-col gap-8 lg:gap-10 relative">
      <Image
        src="/logo.webp"
        alt="Logo SPLITBILL"
        width={168}
        height={168}
        className="hover:scale-110 self-center hover:-rotate-3 transition-all hover:cursor-cell"
        draggable={false}
      />
      {/* Person Map  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {people.map((person, index) => (
          <PersonInput
            key={index}
            person={person}
            setPeople={setPeople}
            people={people}
            index={index}
          />
        ))}
      </div>

      {/* Add Person Button */}
      <Button onClick={addPerson} className="w-full" variant="neutral">
        Tambah Orang
      </Button>

      {/* Discount and Admin Fee */}
      <Discount total={total} setTotal={setTotal} />

      {/* Calculate Button */}
      <Button className="w-full" onClick={calculateTotal} variant="neutral">
        Calculate
      </Button>

      {/* Result Background */}
      {result.length > 0 && (
        <div className="bg-bw p-4 md:p-8 rounded-lg border-2 border-black flex flex-col gap-4">
          <Image
            src="/logo.webp"
            alt="Logo SPLITBILL"
            width={100}
            height={100}
            className="self-center"
            draggable={false}
          />

          {/* Result Title */}
          {/* <h1 className="text-center text-2xl">Result</h1> */}

          {/* Result Data */}
          <Result result={result} />
        </div>
      )}

      {/* Nota */}
      {result.length > 0 && <Nota grand={grand} total={total} />}

      {/* Footer */}
      <div className="h-14"></div>
      <footer className="absolute bottom-0 self-center mb-4">
        <div className="text-center items-center justify-center flex flex-col">
          <Link
            className="flex flex-col justify-between items-center text-sm font-bold"
            href="https://tools.pradipta.dev"
            target="_blank"
          >
            <img
              src="https://tools.pradipta.dev/eltoolnobg.webp"
              alt="elvxk tool"
              width={23}
              height={23}
            />
            ELVXK TOOL
          </Link>
          <p className="text-sm">
            Made with love © {new Date().getFullYear()}{" "}
            <Link href="https://pradipta.dev" target="_blank">
              elvxk
            </Link>
          </p>
        </div>

        {/* <p className="text-black/75 text-sm"> */}
        {/*   Made with love by{" "} */}
        {/*   <label> */}
        {/*     <a href="https://sandri.my.id" alt="sandry.my.id" target="_blank"> */}
        {/*       elvxk */}
        {/*     </a>{" "} */}
        {/*   </label> */}
        {/*   &copy; {new Date().getFullYear()} Split Bill's v.1.0 */}
        {/* </p> */}
      </footer>
    </div>
  );
};

export default Home;
