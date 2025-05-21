import DataDisplay from "@/components/DataDisplay";
import DataUserDisplay from "@/components/DataUserDisplay";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>  data from from graph ql </h1>
      <main className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-6">All Fetched Data</h1>
        <DataUserDisplay />
      </main>
    </>
  );
}
