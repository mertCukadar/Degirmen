"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  name: string;
  price: string;
}

interface Subcategory {
  name: string;
  products: Product[];
}

interface MenuTab {
  name: string;
  active: boolean;
  subcategories?: Subcategory[];
}

export default function Home() {
  const [menuTabs, setMenuTabs] = useState<MenuTab[]>([
    {
      name: "Mayalılar",
      active: false,
      subcategories: [
        {
          name: "Ürünler",
          products: [
            { name: "Ekmek", price: "15 TL" },
            { name: "Pide", price: "20 TL" },
            { name: "Simit", price: "5 TL" },
          ],
        },
      ],
    },
    {
      name: "Tatlılar",
      active: false,
      subcategories: [
        {
          name: "Ürünler",
          products: [
            { name: "Baklava", price: "80 TL" },
            { name: "Künefe", price: "60 TL" },
            { name: "Sütlaç", price: "25 TL" },
          ],
        },
      ],
    },
    {
      name: "Kurabiyeler",
      active: false,
      subcategories: [
        {
          name: "Ürünler",
          products: [
            { name: "Un Kurabiyesi", price: "30 TL" },
            { name: "Cevizli Kurabiye", price: "40 TL" },
            { name: "Damla Çikolatalı Kurabiye", price: "50 TL" },
          ],
        },
      ],
    },
    {
      name: "İçecekler",
      active: false,
      subcategories: [
        {
          name: "Sıcak İçecekler",
          products: [
            { name: "Çay", price: "10 TL" },
            { name: "Kahve", price: "20 TL" },
          ],
        },
        {
          name: "Soğuk İçecekler",
          products: [
            { name: "Limonata", price: "15 TL" },
          ],
        },
      ],
    },
  ]);

  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const [areTabsVisible, setAreTabsVisible] = useState(false);

  useEffect(() => {
    setIsLogoVisible(true);
    setAreTabsVisible(true);
  }, []);

  const handleTabClick = (name: string) => {
    setMenuTabs(
      menuTabs.map((tab) => ({
        ...tab,
        active: tab.name === name ? !tab.active : false,
      }))
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="space-y-2 w-full max-w-md mb-48">
        <div
          className={`text-center text-2xl flex items-center justify-center font-bold text-gray-800 transition-transform duration-5000 ${
            isLogoVisible ? "translate-y-10 opacity-100" : "translate-y-0 opacity-0"
          }`}
        >
          <div className={`bg-white rounded-full p-6 z-10`}>
            <Image src="/logo.jpeg" width={250} height={250} alt="logo" className="rounded-full ml-2" />
          </div>
        </div>

        {menuTabs.map((menuTab, index) => (
          <div key={menuTab.name} className="px-12">
            <div
              onClick={() => handleTabClick(menuTab.name)}
              className={`block p-4 border-2 shadow-lg text-center cursor-pointer ${
                menuTab.active ? "border-primary text-black bg-white" : "border-primary text-gray-600 bg-white"
              } transition-transform duration-5000 ${
                areTabsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {menuTab.name}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                menuTab.active ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              } bg-yellow-400 shadow-md rounded-b-2xl`}
            >
              {menuTab.subcategories?.map((subcategory) => (
                <div key={subcategory.name} className="p-4 text-gray-700">
                  <h4 className="font-bold">{subcategory.name}</h4>
                  {subcategory.products.map((product) => (
                    <div key={product.name} className="flex justify-between">
                      <span>{product.name}</span>
                      <span>{product.price}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
