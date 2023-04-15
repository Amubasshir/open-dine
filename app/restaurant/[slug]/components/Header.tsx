export default function Header({ name }: { name: string }) {
  const renderTitle = () => {
    const nameArray = name.split('-');
    nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`;
    return nameArray.join(' ');
  };

  return (
    <div className="h-96 overflow-hidden">
      <div className="h-full bg-gradient-to-r from-[#0f1f47] to-[#5f6984] bg-center ">
        <h1 className="text-shadow flex min-h-full items-center justify-center  text-center text-6xl capitalize text-white ">
          {renderTitle()}
        </h1>
      </div>
    </div>
  );
}
