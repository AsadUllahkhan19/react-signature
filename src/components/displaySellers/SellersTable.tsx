import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import ConfirmationDialog from "../ConfirmationDialog";

type SellersTableProps = {
  sellers: {
    name: string;
    mobile: string;
    plotNumber: string;
    societyName: string;
  }[];
};

const SellersTable = ({ sellers }: SellersTableProps) => {
  console.log(sellers);
  return (
    <Card className="mt-10">
      <CardContent className="pt-5">
        <Table>
          <TableHeader className="bg-black text-white">
            <TableRow>
              <TableHead className="rounded-l-md font-bold">Name</TableHead>
              <TableHead className="font-bold">Plot Number</TableHead>
              <TableHead className="font-bold">Mobile</TableHead>
              <TableHead className="font-bold">Society</TableHead>
              <TableHead className="rounded-r-md font-bold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sellers.map((item, index) => (
              <TableRow key={index} className="border-b-2">
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.plotNumber}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.societyName}</TableCell>
                <TableCell className="text-center flex items-center gap-5">
                  <FaRegEdit
                    className="text-green-600 cursor-pointer"
                    size={20}
                  />
                  <ConfirmationDialog
                    descriptionText="Are you sure you want to delete this entry? This action cannot be undone."
                    triggerText={
                      <AiOutlineDelete
                        className="text-red-600 cursor-pointer"
                        size={20}
                      />
                    }
                    onConfirm={() => console.log("Deleted")}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SellersTable;
