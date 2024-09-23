"use client";
import { useState } from "react";
import Image from "next/image";

interface Product {
  name: string;
  price: string;
}

interface MenuTab {
  name: string;
  active: boolean;
  products: Product[];
}

export default function Home() {
  const [menuTabs, setMenuTabs] = useState<MenuTab[]>([
    {
      name: "Mayalılar",
      active: false,
      products: [
        { name: "Ekmek", price: "15 TL" },
        { name: "Pide", price: "20 TL" },
        { name: "Simit", price: "5 TL" },
      ],
    },
    {
      name: "Tatlılar",
      active: false,
      products: [
        { name: "Baklava", price: "80 TL" },
        { name: "Künefe", price: "60 TL" },
        { name: "Sütlaç", price: "25 TL" },
      ],
    },
    {
      name: "Kurabiyeler",
      active: false,
      products: [
        { name: "Un Kurabiyesi", price: "30 TL" },
        { name: "Cevizli Kurabiye", price: "40 TL" },
        { name: "Damla Çikolatalı Kurabiye", price: "50 TL" },
      ],
    },
    {
      name: "İçecekler",
      active: false,
      products: [
        { name: "Çay", price: "10 TL" },
        { name: "Kahve", price: "20 TL" },
        { name: "Limonata", price: "15 TL" },
      ],
    },
  ]);

  const handleTabClick = (name: string) => {
    setMenuTabs(
      menuTabs.map((tab) => ({
        ...tab,
        active: tab.name === name ? !tab.active : false,
      }))
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      
      <div className="space-y-4 w-full max-w-md">
      <div className="text-center text-2xl flex items-center justify-center font-bold text-gray-800">
          <Image src="/logo.jpeg" width={500} height={500} alt="logo" className="rounded-full"/>
        </div>

        
        {menuTabs.map((menuTab) => (
          <div key={menuTab.name}>
            <div
              onClick={() => handleTabClick(menuTab.name)}
              className={`block p-4 border rounded-lg shadow-md text-center cursor-pointer ${
                menuTab.active
                  ? "border-primary text-black bg-white"
                  : "border-primary text-gray-600 bg-white"
              }`}
            >
              {menuTab.name}
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                menuTab.active ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="p-4 text-gray-700">
                {menuTab.products.map((product) => (
                  <div key={product.name} className="flex justify-between">
                    <span>{product.name}</span>
                    <span>{product.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
