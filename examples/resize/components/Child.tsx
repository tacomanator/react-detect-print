import Width from "./Width";

export default function Child({ printing }: { printing: boolean }) {
  return (
    <div className="flex-auto m-5 h-48 border-4 border-solid border-black text-center bg-gray-300">
      <h2>Printing? {JSON.stringify(printing)}</h2>
      <Width />
    </div>
  );
}
