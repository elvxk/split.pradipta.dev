import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { IoIosClose } from "react-icons/io";
import handleKeyDown from "@/utils/handleKey";

const PersonInput = ({ person, setPeople, people, index }) => {
  const handlePersonChange = (e) => {
    const { name, value } = e.target;
    const newPeople = [...people];
    newPeople[index][name] = value;
    setPeople(newPeople);
  };

  const addItem = () => {
    const newPeople = [...people];
    newPeople[index].items.push({ name: "", price: 0 });
    setPeople(newPeople);
  };

  const removeItem = (itemIndex) => {
    const newPeople = [...people];
    newPeople[index].items.splice(itemIndex, 1);
    setPeople(newPeople);
  };

  const removePerson = () => {
    const newPeople = [...people];
    newPeople.splice(index, 1);
    setPeople(newPeople);
  };

  const handleItemChange = (e, itemIndex) => {
    const { name, value } = e.target;
    const newPeople = [...people];
    newPeople[index].items[itemIndex][name] = value;
    setPeople(newPeople);
  };

  return (
    <Card className="relative">
      <div
        onClick={removePerson}
        variant="reverse"
        className="absolute rounded-full border-black border-2 p-1 hover:cursor-pointer hover:scale-[90%] bg-bw top-0 right-0 translate-x-1/2 -translate-y-1/2 transition-all"
        size="icon"
      >
        <IoIosClose className="scale-150" />
      </div>

      <CardContent className="p-4">
        <div className="grid w-full items-center gap-2">
          <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-2">
            <Label>Nama</Label>
            <Input
              type="text"
              name="name"
              value={person.name}
              onChange={handlePersonChange}
              placeholder={`Nama pembeli ${index + 1}`}
            />
          </div>
          <div className="border-y-2 border-y-black my-2">
            {person.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex flex-col md:flex-row  md:items-center gap-2 my-2"
              >
                <Label className="me-2">Item</Label>
                <Input
                  type="text"
                  name="name"
                  value={item.name}
                  onChange={(e) => handleItemChange(e, itemIndex)}
                  placeholder={`Nama barang ${itemIndex + 1}`}
                />
                <Label>Harga</Label>
                <Input
                  type="number"
                  name="price"
                  value={item.price === 0 ? "" : item.price}
                  onChange={(e) => handleItemChange(e, itemIndex)}
                  placeholder={`Harga barang ${itemIndex + 1}`}
                  onKeyDown={handleKeyDown}
                  min="0"
                  className="no-arrows"
                />
                <Button
                  className="md:self-end bg-bw"
                  onClick={() => removeItem(itemIndex)}
                  variant="reverse"
                >
                  <FaRegTrashAlt />
                </Button>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 w-full md:flex-row">
            <Button onClick={addItem} variant="neutral" className="w-full">
              Tambah Item
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonInput;
