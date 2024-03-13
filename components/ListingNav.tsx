"use client";
import React, { useEffect, useRef, useState } from "react";
import Filtersvg2 from "./icons/Filtersvg2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Checkbox } from "./ui/checkbox";
import { useSearchParams } from "next/navigation";

const generateRandomAddresses = () => {
  const streets = [
    "1A Allen Avenue",
    "23 Broad Street",
    "5 Balogun Street",
    "10 Adeniran Ogunsanya Street",
    "15 Adeola Hopewell Street",
  ];
  const states = ["Lagos"];
  const countries = ["Nigeria"];

  const addresses = [];
  for (let i = 0; i < 5; i++) {
    // Generate 5 random addresses
    const streetIndex = Math.floor(Math.random() * streets.length);
    const stateIndex = Math.floor(Math.random() * states.length);
    const countryIndex = Math.floor(Math.random() * countries.length);

    const address = `${streets[streetIndex]}, ${states[stateIndex]}, ${countries[countryIndex]}`;
    addresses.push(address);
  }
  return addresses;
};

const suggestions = generateRandomAddresses(); // Generate random addresses

const ListingNav = () => {
  const searchParams = useSearchParams();
  const address = searchParams.get("address");
  const [searchTerm, setSearchTerm] = useState(address || "");
  const [position, setPosition] = React.useState("For Sale");
  const [open, setOpen] = useState(false);
  const [openHomeTypeDropdown, setOpenHomeTypeDropdown] = useState(false);
  const [openMoneyFilter, setOpenMoneyFilter] = useState(false);
  const [openBedFilter, setOpenBedFilter] = useState(false);
  const [openMinMaxFilter, setOpenMinMaxFilter] = useState(false);
  const [openMinMaxFilter2, setOpenMinMaxFilter2] = useState(false);
  const [selectedBedrooms, setSelectedBedrooms] = useState("");
  const [selectedBathrooms, setselectedBathrooms] = useState("");
  const [minPrice, setMinPrice] = useState("30,000");
  const [maxPrice, setMaxPrice] = useState("300,000");

  const [showSuggestions, setShowSuggestions] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBedroomSelection = (bedrooms: any) => {
    setSelectedBedrooms(bedrooms);
  };
  const handleBathroomSelection = (bathrooms: any) => {
    setselectedBathrooms(bathrooms);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowSuggestions, setSearchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowSuggestions(value.length > 0 && filteredSuggestions.length > 0); // Only show suggestions if input has value and there are filtered suggestions
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };
  const bedroomCounts = ["Any", 1, 2, 3, 4, 5];
  const bathroomCounts = ["Any", 1, 2, 3, 4, 5];
  const bedroomButtonText =
    selectedBedrooms === "Any" ? "Any" : `${selectedBedrooms}+ bd`;
  const bathroomButtonText =
    selectedBathrooms === "Any" ? "Any" : `${selectedBathrooms}+ ba`;

  return (
    <div className=" w-full border-b gap-x-4 bg-white flex items-center border-gray-300 h-[55px] px-[40px]">
      <div id="search-bar" className="relative flex items-center w-[350px]">
        <input
          type="text"
          className="border border-gray-300 w-[350px] placeholder:font-light placeholder:text-primary-blue placeholder:text-opacity-70 placeholder:text-base text-primary-blue rounded px-2 py-[8px] focus:outline-none focus:border-2 focus:border-orange-500"
          placeholder="Enter an address, or city"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Filtersvg2 />
      </div>
      {filteredSuggestions.length > 0 && showSuggestions && (
        <div ref={componentRef}>
          <ul className="absolute left-10  z-[20] bg-white border border-gray-300 rounded mt-[25px] w-full max-w-[350px]">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-4 text-start cursor-pointer text-primary-blue font-light hover:bg-blue-50 hover:bg-opacity-80"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <button className="px-[10px] text-primary-blue font-medium capitalize flex items-center gap-x-3 justify-center border border-gray-300 rounded min-w-[106px] h-[38px]">
              {position}
              <ChevronDown className="w-6 h-6" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-36 rounded shadow border border-gray-300"
          >
            <DropdownMenuGroup>
              <div className="text-base flex items-center p-0">
                <label
                  htmlFor="forSale"
                  className="flex items-center w-full p-1.5 cursor-pointer"
                >
                  <input
                    type="radio"
                    id="forSale"
                    className="w-3 h-3 mr-2 cursor-pointer appearance-none border border-gray-300 rounded-full checked:bg-transparent checked:border-primary-orange checked:ring-2 checked:ring-primary-orange"
                    checked={position === "For Sale"}
                    onChange={() => setPosition("For Sale")}
                  />
                  <span
                    className={
                      position === "For Sale"
                        ? "text-primary-orange"
                        : "text-gray-500"
                    }
                  >
                    For Sale
                  </span>
                </label>
              </div>
              <div className="text-base flex items-center p-0">
                <label
                  htmlFor="forRent"
                  className="flex items-center w-full p-1.5 cursor-pointer"
                >
                  <input
                    type="radio"
                    id="forRent"
                    className="w-3 h-3 mr-2 cursor-pointer appearance-none border border-gray-300 rounded-full checked:bg-transparent checked:border-primary-orange checked:ring-2 checked:ring-primary-orange"
                    checked={position === "For Rent"}
                    onChange={() => setPosition("For Rent")}
                  />
                  <span
                    className={
                      position === "For Rent"
                        ? "text-primary-orange"
                        : "text-gray-500"
                    }
                  >
                    For Rent
                  </span>
                </label>
              </div>
              <div className="text-base flex items-center p-0">
                <label
                  htmlFor="sold"
                  className="flex items-center w-full p-1.5 cursor-pointer"
                >
                  <input
                    type="radio"
                    id="sold"
                    className="w-3 h-3 mr-2 cursor-pointer appearance-none border border-gray-300 rounded-full checked:bg-transparent checked:border-primary-orange checked:ring-2 checked:ring-primary-orange"
                    checked={position === "Sold"}
                    onChange={() => setPosition("Sold")}
                  />
                  <span
                    className={
                      position === "Sold"
                        ? "text-primary-orange"
                        : "text-gray-500"
                    }
                  >
                    Sold
                  </span>
                </label>
              </div>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <DropdownMenu open={openMoneyFilter} onOpenChange={setOpenMoneyFilter}>
          <DropdownMenuTrigger asChild>
            <button className="px-[10px] font-medium capitalize flex text-primary-blue items-center gap-x-3 justify-center border border-gray-300 rounded min-w-[106px] h-[38px]">
              ₦
              {`${(Number(minPrice.replace(/,/g, "")) / 1000).toFixed(0)}k - ${(
                Number(maxPrice.replace(/,/g, "")) / 1000
              ).toFixed(0)}k`}
              <ChevronDown className="w-6 h-6" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-[372px] rounded shadow border border-gray-300 p-0"
          >
            <p className=" w-full bg-gray-100 py-2.5 px-4 text-[15px] font-semibold text-gray-500 mb-2">
              Price Range
            </p>
            <Tabs defaultValue="listprice" className=" w-full py-3 px-4">
              <TabsList className=" border flex flex-row h-[41px] text-sm border-gray-300 rounded">
                <TabsTrigger
                  className=" w-1/2 flex items-center font-semibold text-gray-700 justify-center h-[40px] ml-[-1px] data-[state=active]:bg-orange-50 data-[state=active]:border-2 data-[state=active]:border-primary-orange"
                  value="listprice"
                >
                  List Price
                </TabsTrigger>
                <TabsTrigger
                  disabled
                  className=" w-1/2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center font-semibold text-gray-700 justify-center h-[40px] ml-[-1px] data-[state=active]:bg-orange-50 data-[state=active]:border-2 data-[state=active]:border-primary-orange"
                  value="password"
                >
                  Monthly Payment
                </TabsTrigger>
              </TabsList>
              <TabsContent value="listprice">
                <div className=" flex justify-between items-center mt-4">
                  <div className=" flex flex-col">
                    <label
                      className=" text-[15px] text-primary-blue ml-[2px] mb-1.5 font-semibold"
                      htmlFor="minimum"
                    >
                      Minimum
                    </label>
                    <DropdownMenu
                      open={openMinMaxFilter}
                      onOpenChange={setOpenMinMaxFilter}
                    >
                      <DropdownMenuTrigger className=" flex flex-row text-primary-blue font-light items-center justify-between text-start border border-gray-200 py-2 px-4 rounded w-[146px]">
                        {minPrice}
                        <ChevronDown className=" text-gray-600" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className=" w-[146px] rounded">
                        <DropdownMenuItem
                          onClick={() => setMinPrice("0")}
                          className=" py-2 text-base cursor-pointer text-primary-blue font-light"
                        >
                          ₦0
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setMinPrice("300,000")}
                          className=" py-2 text-base cursor-pointer text-primary-blue font-light"
                        >
                          ₦300,000
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setMinPrice("3,000,000")}
                          className=" py-2 text-base cursor-pointer text-primary-blue font-light"
                        >
                          ₦3,000,000
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div> - </div>
                  <div className=" flex flex-col">
                    <label
                      className=" text-[15px] text-primary-blue ml-[2px] mb-1.5 font-semibold"
                      htmlFor="maximum"
                    >
                      Maximum
                    </label>
                    <DropdownMenu
                      open={openMinMaxFilter2}
                      onOpenChange={setOpenMinMaxFilter2}
                    >
                      <DropdownMenuTrigger className=" flex flex-row text-primary-blue font-light items-center justify-between text-start border border-gray-200 py-2 px-4 rounded w-[146px]">
                        {maxPrice}
                        <ChevronDown className=" text-gray-600" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className=" w-[146px] rounded">
                        <DropdownMenuItem
                          onClick={() => setMaxPrice("300,000")}
                          className=" py-2 text-base cursor-pointer text-primary-blue font-light"
                        >
                          ₦300,000
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setMaxPrice("3,000,000")}
                          className=" py-2 text-base cursor-pointer text-primary-blue font-light"
                        >
                          ₦3,000,000
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setMaxPrice("30,000,000")}
                          className=" py-2 text-base cursor-pointer text-primary-blue font-light"
                        >
                          ₦30,000,000
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>
            <div className=" px-4 py-3">
              <button className=" w-full bg-primary-orange hover:bg-orange-700 text-white font-medium py-2 px-4 rounded">
                Apply
              </button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <DropdownMenu open={openBedFilter} onOpenChange={setOpenBedFilter}>
          <DropdownMenuTrigger asChild>
            <div className="px-[10px] cursor-pointer font-medium capitalize flex text-primary-blue items-center gap-x-3 justify-center border border-gray-300 rounded min-w-[106px] h-[38px]">
              {bedroomButtonText}, {bathroomButtonText}
              <ChevronDown className="w-6 h-6" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-[372px] rounded shadow border border-gray-300 p-0"
          >
            <p className=" w-full bg-gray-100 py-2.5 px-4 text-[15px] font-semibold text-gray-500 mb-4">
              Number of Bedrooms
            </p>
            <div>
              <p className=" text-sm font-semibold text-primary-blue px-4 mb-2">
                Bedrooms
              </p>
              <div className="flex border border-gray-300 rounded mx-4">
                {bedroomCounts.map((num, index) => (
                  <button
                    key={index}
                    className={`flex-1 ${
                      selectedBedrooms === num.toString()
                        ? "border-primary-orange bg-orange-50 border"
                        : "border-gray-300"
                    } text-primary-blue font-medium py-2 px-4 ${
                      index !== bedroomCounts.length - 1 ? "border-r" : ""
                    }`}
                    onClick={() => handleBedroomSelection(num.toString())}
                  >
                    {num === "Any" ? num : num + "+"}
                  </button>
                ))}
              </div>
              <div className="flex items-center px-[18px] mt-4 gap-x-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className=" text-primary-blue leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Use exact match
                </label>
              </div>
            </div>
            <p className=" w-full mt-5 bg-gray-100 py-2.5 px-4 text-[15px] font-semibold text-gray-500 mb-4">
              Number of Bathrooms
            </p>
            <div>
              <p className=" text-sm font-semibold text-primary-blue px-4 mb-2">
                Bathrooms
              </p>
              <div className="flex border border-gray-300 rounded mx-4">
                {bathroomCounts.map((num, index) => (
                  <button
                    key={index}
                    className={`flex-1 ${
                      selectedBathrooms === num.toString()
                        ? "border-primary-orange bg-orange-50 border"
                        : "border-gray-300"
                    } text-primary-blue font-medium py-2 px-4 ${
                      index !== bathroomCounts.length - 1 ? "border-r" : ""
                    }`}
                    onClick={() => handleBathroomSelection(num.toString())}
                  >
                    {num === "Any" ? num : num + "+"}
                  </button>
                ))}
              </div>
            </div>
            <div className=" px-4 py-3 mt-3">
              <button className=" w-full bg-primary-orange hover:bg-orange-700 text-white font-medium py-2 px-4 rounded">
                Apply
              </button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <DropdownMenu
          open={openHomeTypeDropdown}
          onOpenChange={setOpenHomeTypeDropdown}
        >
          <DropdownMenuTrigger>
            <div className="px-[10px] text-primary-blue font-medium capitalize flex items-center gap-x-3 justify-center border border-gray-300 rounded min-w-[106px] h-[38px]">
              Home Type
              <ChevronDown className="w-6 h-6" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className=" min-w-[210px] p-0 rounded"
          >
            <p className=" w-full bg-gray-100 py-2.5 px-4 text-[15px] font-semibold text-gray-500 mb-[10px]">
              Home Type
            </p>
            <div className=" px-4 font-light text-primary-blue">
              <label
                htmlFor="houses"
                className="flex items-center cursor-pointer py-2"
              >
                <input
                  type="checkbox"
                  id="houses"
                  className="mr-[10px] w-[18px] h-[18px] cursor-pointer"
                />
                Houses
              </label>
              <label
                htmlFor="townhomes"
                className="flex items-center cursor-pointer py-2"
              >
                <input
                  type="checkbox"
                  id="townhomes"
                  className="mr-[10px] w-[18px] h-[18px] cursor-pointer"
                />
                Townhomes
              </label>
              <label
                htmlFor="lotsLands"
                className="flex items-center cursor-pointer py-2"
              >
                <input
                  type="checkbox"
                  id="lotsLands"
                  className="mr-[10px] w-[18px] h-[18px] cursor-pointer"
                />
                Lots/Lands
              </label>
            </div>
            <div className=" px-4 py-3">
              <button className=" w-full bg-primary-orange hover:bg-orange-700 text-white font-medium py-2 px-4 rounded">
                Apply
              </button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <button className=" px-4 py-2 bg-primary-orange rounded hover:bg-orange-50 hover:text-primary-orange hover:border-primary-orange hover:border text-white text-[15px] font-medium">
        Save search
      </button>
      <p className=" text-primary-blue ml-auto font-medium">2 Saved Homes</p>
    </div>
  );
};

export default ListingNav;
