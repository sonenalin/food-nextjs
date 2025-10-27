import Header from "@/components/Header"
import Contain from "@/components/contain";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-red-50 dark:bg-black">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[400px] mt-8">
        <Image
          src="/images/hero-food.jpg"
          alt="Delicious food"
          fill
          className="object-cover brightness-90 rounded-xl shadow-lg"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-4xl font-extrabold mb-2">ອາຫານອົບອຸ່ນ ຮົບອຸ່ນໃຈ</h2>
          <p className="text-lg">ລົດຊາດແທ້ໆ ທີ່ທ່ານຄວນລອງ</p>
        </div>
      </section>

      <Contain />
      <Footer />
    </div>
  );
}
