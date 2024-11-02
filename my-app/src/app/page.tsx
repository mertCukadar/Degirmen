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
            { name: "Simit", price: "10 TL" },
            { name: "Poğaça", price: "20 TL" },
            { name: "Dere Otlu Poğaça", price: "25 TL" },
            { name: "İçli Açma", price: "30 TL" },
            { name: "İçli Simit", price: "35 TL" },
            { name: "Sütlü Simit", price: "15 TL" },
            { name: "Boyoz", price: "25 TL" },
            { name: "Dilim Pizza", price: "45 TL" },
            { name: "Yuvarlak Pizza", price: "45 TL" },
            { name: "Kapalı Pizza (special)", price: "45 TL" },
            { name: "Sarıyer Böreği", price: "- TL" },
            { name: "Anne Yapımı El Böreği", price: "50 TL" },
            { name: "Sigara Böreği", price: "- TL" },
            { name: "Tahinli Çörek", price: "45 TL" },
            { name: "Bursa Tahinlisi", price: "45 TL" },
            { name: "Haşhaşlı Çörek", price: "- TL" },
            { name: "Ay Çöreği", price: "45 TL" },
          ],
        },
      ],
    },

    {
      name: "Tatlılar",
      active: false,
      subcategories: [
       
        {
          name: "Sütlü Tatlılar",
          products: [
            { name: "Profiterol", price: "110 TL" },
            { name: "Supangle", price: "110 TL" },
            { name: "Sütlaç", price: "110 TL" },
            { name: "Trileçe", price: "110 TL" },
            { name: "Islak Kek", price: "90 TL" },
            { name: "San Sebastian", price: "130 TL" },
            { name: "Cheesecake", price: "130 TL" },
            { name: "Magnolia", price: "115 TL" },
            { name: "Ekler (Tane)", price: "30 TL" },
            { name: "Bardak Tiramisu", price: "115 TL" },

          ],
        },
        {
          name: "Şerbetli Tatlılar",
          products: [
            { name: "Fıstıklı Baklava (kg)", price: "- TL" },
            { name: "Cevizli Baklava", price: "- TL" },
            { name: "İstanbul Tatlısı(kg)", price: "350 TL" },
            { name: "Kalburabastı (kg)", price: "350 TL" },
            { name: "Şekerpare (kg)", price: "350 TL" },
            { name: "Halka Tatlısı", price: "45 TL" },
            { name: "Tulumba (kg)", price: "300 TL" },
          ],
        },
        {
          name: "Pastalar",
          products: [
            { name: "Çikolatalı Kare Pasta", price: "130 TL" },
            { name: "Meyveli Kare Pasta", price: "130 TL" },
            { name: "Uğur Böcekli Pasta", price: "135 TL" },
            { name: "Babaroski", price: "135 TL" },
            { name: "Polka", price: "135 TL" },
            { name: "Kare Polka", price: "135 TL" },
            { name: "Malaga", price: "130 TL" },
            { name: "Çilekli Transparan Pasta", price: "135 TL" },
            { name: "Çikolatalı Transparan Pasta", price: "135 TL" },
            { name: "Frambuazlı Transparan Pasta", price: "135 TL" },
            { name: "Orman Meyveli Transparan Pasta", price: "135 TL" },
            { name: "Dubai Çikolatalı Transparan Pasta", price: "150 TL" },
            { name: "Lotus Transparan Pasta", price: "135 TL" },
            { name: "Snickers Pasta", price: "135 TL" },
            { name: "Ibiza Pasta", price: "135 TL" },
            { name: "Mozerella Pasta", price: "130 TL" },
            { name: "Kirpi Pasta", price: "135 TL" },
          ],
        },
        {
          name: "Kurabiyeler",
          products: [
            { name: "Tuzlu Kurabiye (kg)", price: "330 TL" },
            { name: "Tatlı Kurabiye (kg)", price: "330 TL" },
            { name: "Elmalı Kurabiye", price: "15 TL" },
            { name: "Anne Poğaçası Kurabiye", price: "15 TL" },
            { name: "Şam Kurabiyesi", price: "45 TL" },
            { name: "Muğla Halkası", price: "45 TL" },
            { name: "İzmir Bomba", price: "40 TL" },
            { name: "Cookie", price: "40 TL" },
            { name: "Muffin", price: "40 TL" },            
           
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
            { name: "Çay", price: "15 TL" },
            { name: "Kupa Çay", price: "30 TL" },
            { name: "Filtre Kahve", price: "50 TL" },
            { name: "Nescafe", price: "35 TL" },
            { name: "Türk Kahvesi", price: "50 TL" },
            { name: "Menengiç", price: "50 TL" },
            { name: "Dibek", price: "50 TL" },
            { name: "Damla Sakızlı Türk Kahvesi", price: "50 TL" },
            { name: "Ihlamur", price: "50 TL" },
            { name: "Kış Çayı", price: "50 TL" },
            { name: "Ada Çayı", price: "50 TL" },
            { name: "Nane Limon", price: "50 TL" },
            { name: "Yeşil Çay", price: "50 TL" },
            { name: "Ihlamur", price: "50 TL" },
            { name: "Sahlep", price: "35 TL" },
            { name: "Ihlamur", price: "50 TL" },
            { name: "Sıcak Çikolata", price: "50 TL" },
            { name: "Oralet", price: "15 TL" },
          ],
        },
        {
          name: "Soğuk İçecekler",
          products: [
            { name: "Su", price: "10 TL" },
            { name: "Kola", price: "45 TL" },
            { name: "Fanta", price: "45 TL" },
            { name: "Sprite", price: "45 TL" },
            { name: "Soğuk Çay", price: "40 TL" },
            { name: "Soda", price: "15 TL" },
            { name: "Meyveli Soda", price: "25 TL" },
            { name: "Meyve Suyu Teneke", price: "45 TL" },
            { name: "Meyve Suyu 200ml", price: "15 TL" },
            { name: "Limonata", price: "45 TL" },
            { name: "Sıkma Portakal", price: "35 TL" },
            { name: "Soğuk Kahve Kutu", price: "45 TL" },
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
