import SellersTable from "@/components/displaySellers/SellersTable";
import Header from "@/components/Header"
import { useState } from "react";


const sellers = [
  {
    name: "John Doe",
    mobile: "+92-301-123-4567",
    plotNumber: "A-101",
    societyName: "Pak View City"
  },
  {
    name: "Jane Smith",
    mobile: "+92-302-234-5678",
    plotNumber: "B-202",
    societyName: "Pak View City"
  },
  {
    name: "Michael Johnson",
    mobile: "+92-303-345-6789",
    plotNumber: "C-303",
    societyName: "Pak View City"
  },
  {
    name: "Emily Davis",
    mobile: "+92-304-456-7890",
    plotNumber: "D-404",
    societyName: "Pak View City"
  },
  {
    name: "Chris Lee",
    mobile: "+92-305-567-8901",
    plotNumber: "E-505",
    societyName: "Pak View City"
  },
  {
    name: "Sophia Brown",
    mobile: "+92-306-678-9012",
    plotNumber: "F-606",
    societyName: "Pak View City"
  },
  {
    name: "Liam Wilson",
    mobile: "+92-307-789-0123",
    plotNumber: "G-707",
    societyName: "Pak View City"
  },
  {
    name: "Olivia Martinez",
    mobile: "+92-308-890-1234",
    plotNumber: "H-808",
    societyName: "Pak View City"
  },
  {
    name: "Ava Taylor",
    mobile: "+92-309-901-2345",
    plotNumber: "I-909",
    societyName: "Pak View City"
  },
  {
    name: "Noah Anderson",
    mobile: "+92-310-012-3456",
    plotNumber: "J-1010",
    societyName: "Pak View City"
  }
];

const DisplaySellers = () => {
    const [search, setSearch] = useState("");
  return (
    <div className="p-5 bg-slate-100 min-h-screen">
         {/* <!-- Header --> */}
      <Header search={search} setSearch={setSearch} heading="Sellers Listing"/>


      {/* {Display seller's table} */}
      <SellersTable sellers={sellers}/>

    </div>
  )
}

export default DisplaySellers