import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RightSection = () => {
  return (
    <div className="p-4 sm:p-8 flex justify-center items-center">
      <Tabs defaultValue="who-we-are" className="sm:w-full">
        <TabsList className="w-full flex flex-wrap gap-2 mb-4">
          <TabsTrigger value="who-we-are">Who we are</TabsTrigger>
          <TabsTrigger value="what-we-do">What we do</TabsTrigger>
          <TabsTrigger value="unique-offering">Unique offfering</TabsTrigger>
          <TabsTrigger value="craftsmanship">Craftsmanship</TabsTrigger>
        </TabsList>
        <TabsContent value="who-we-are">
          <Card>
            <CardHeader>
              <CardTitle className="sm:text-xl">Who we are</CardTitle>
              <CardDescription className="sm:text-md">
                We are a team of passionate crocheters dedicated to creating
                beautiful, hand-crafted crochet pieces that bring warmth, color,
                and personality to your life. Every stitch we make is crafted
                with care and attention to detail, turning simple yarn into
                unique works of art.
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="what-we-do">
          <Card>
            <CardHeader>
              <CardTitle className="sm:text-xl">What we do</CardTitle>
              <CardDescription className="sm:text-md">
                We design and create high-quality crochet products ranging from
                cozy blankets and stylish apparel to decorative home
                accessories. Each item is handmade with love, ensuring that
                every piece is as unique as the person who owns it.
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="unique-offering">
          <Card>
            <CardHeader>
              <CardTitle className="sm:text-xl">Unique offering</CardTitle>
              <CardDescription className="sm:text-md">
                Our crochet is more than just a craft – it’s a story woven into
                every stitch. We combine traditional techniques with modern
                designs, using premium yarns and sustainable practices to create
                pieces that stand out for their beauty, durability, and
                individuality
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="craftsmanship">
          <Card>
            <CardHeader>
              <CardTitle className="sm:text-xl">Craftsmanship</CardTitle>
              <CardDescription className="sm:text-md">
                Craftsmanship is at the heart of everything we do. From choosing
                the finest materials to perfecting each stitch, we pour skill,
                patience, and creativity into every item. The result is crochet
                art that is not only functional but also a celebration of
                hand-made quality and timeless design.
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RightSection;
