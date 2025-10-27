"use client";

import Image from "next/image";

interface MenuItem {
	id: number;
	name: string;
	price: number;
	desc: string;
	image: string;
}

const menu: MenuItem[] = [
	{
		id: 1,
		name: "ຜັດໄທກຸ້ງ (Pad Thai Shrimp)",
		price: 35000,
		desc: "ຜັດໄທ້ກຸ້ງສົດ ສູດໂບຮານອົບກັບໄຂ່ແລະຖົ່ວງອກ",
		image: "/images/padthai.jpg",
	},
	{
		id: 2,
		name: "ຕ້ມຢຳກຸ້ງ (Tom Yum Kung)",
		price: 45000,
		desc: "ຕ້ມຢຳລົດເຜັດໆ ປຸງສົ້ມກຳລັງດີ ກັບກຸ້ງສົດໆ",
		image: "/images/tomyum.jpg",
	},
	{
		id: 3,
		name: "ຂ້າວຜັດໄກ່ (Fried Rice with Chicken)",
		price: 30000,
		desc: "ຂ້າວຜັດໄກ່ຫອມເນີຍ ພ້ອມໄຂ່ແລະຜັກສົດ",
		image: "/images/friedrice.jpg",
	},
];

export default function Contain() {
	return (
		<main id="menu" className="max-w-5xl w-full mt-16 mb-20 px-6">
			<h2 className="text-3xl font-bold text-center text-red-600 mb-10">
				ເມນູອາຫານ
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{menu.map((item) => (
					<div
						key={item.id}
						className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
					>
						<Image
							src={item.image}
							alt={item.name}
							width={400}
							height={250}
							className="rounded-xl object-cover w-full h-[200px]"
						/>
						<h3 className="mt-4 text-xl font-semibold text-red-700">
							{item.name}
						</h3>
						<p className="text-gray-600 mt-1 text-sm">{item.desc}</p>
						<div className="mt-3 flex items-center justify-between">
							<span className="text-lg font-bold text-red-600">
								{item.price.toLocaleString()} ກີບ
							</span>
							<button className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
								ເພີ່ມໃສ່ຕະກ້າ
							</button>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
