import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Regis @hello" },
    { name: "Software dev & Designer", content: "Welcome to Regis' little corner on the internet" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="flex  items-center justify-center  h-screen">
        <div className="w-fit h-fit bg-neutral-100 p-2">
          <h1 className="text-xl font-bold">✌️Hey</h1>
          <h1>This is work in progress</h1>
          <p>But you can check my <a href="https://github.com/regisrex" className="underline text-blue-400">github</a></p>
        </div>

      </div>
    </div>
  );
}
