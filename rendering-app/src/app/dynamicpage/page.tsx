import dynamic from "next/dynamic";

const Dynamicomponent = dynamic(() => import("@/components/DynamicComponent").then(mod => mod.default), {
    loading: () => <h1>Loading dynamic component...</h1>,
    //ssr: false,
  });
export default async function dynamicpage() {
    return (
        <div>
            <h1>page content </h1>
            <Dynamicomponent />
        </div>
    );
  }