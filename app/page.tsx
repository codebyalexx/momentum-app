import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <div className="mb-8 w-[300px] mx-auto">
          <Image
            src="/momentum.png"
            alt="Momentum Logo"
            width={300}
            height={100}
            priority
            className="w-full"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">
          Unlocking the <i>Momentum</i> in you
        </h1>
        <p className="text-xl mb-8 max-w-md mx-auto">
          Track your overall goals, gym progression, cashflow
        </p>
        <div>
          <Link href={"/dashboard"}>
            <Button
              className="w-full bg-[#BEE510] text-[#0D4225] hover:bg-[#a8cd0e] cursor-pointer"
              size={"lg"}
            >
              <LogInIcon /> Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
