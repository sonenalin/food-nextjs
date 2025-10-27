"use client";

import Link from "next/link";

export default function Header() {
	return (
		<header className="w-full bg-red-600 py-6 shadow-md">
			<div className="mx-auto max-w-5xl flex items-center justify-between px-6">
				<Link href="/" className="text-2xl font-bold text-white">
					🍜 ຮ້ານອາຫານຕົວຢ່າງ
				</Link>
				<nav className="space-x-6 text-white text-lg">
					<Link href="/" className="hover:text-yellow-300">
						ໜ້າຫຼັກ
					</Link>
					<Link href="#menu" className="hover:text-yellow-300">
						ເມນູ
					</Link>
					<Link href="#contact" className="hover:text-yellow-300">
						ຕິດຕໍ່
					</Link>
				</nav>
			</div>
		</header>
	);
}
