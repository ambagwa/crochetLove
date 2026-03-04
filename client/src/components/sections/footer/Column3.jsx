import { Button } from "@/components/ui/button";

const Column3 = () => {
  return (
    <div className="text-white py-2">
      <p className="text-2xl font-medium">Get in Touch</p>
      <div className="flex my-3 text-center gap-2">
        <Button size="icon">{/*PPhone icon*/}</Button>
        <p className="text-xl">0713518279</p>
      </div>
      <div className="flex my-3 text-center gap-2">
        <Button size="icon">{/*Email icon*/}</Button>
        <p className="text-xl">hello@crochetlove.com</p>
      </div>
      <div className="flex my-3 text-center gap-2">
        <Button size="icon">{/*Location icon*/}</Button>
        <p className="text-xl">Nairobi, Kenya</p>
      </div>
    </div>
  );
};

export default Column3;
