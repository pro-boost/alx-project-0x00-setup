import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex flex-col justify-center gap-4">
        <Button
          title="button 1 "
          styles="text-red-500 bg-white w-fit rounded-sm px-4"
        />
        <Button
          title="button 2"
          styles="text-blue-500 bg-white w-fit rounded-md px-4"
        />
        <Button
          title="button 2"
          styles="text-green-500 bg-white w-fit rounded-full px-4"
        />
        <Button
          title="button 2"
          styles="text-green-500 bg-white w-fit rounded-lg px-4"
        />
      </div>
    </div>
  );
};
export default Landing;
