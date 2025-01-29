import { Media } from "../../components/atom/media/Media";
import { Typography } from "../../components/atom/typography/Typography";
import iphone13 from "../../assets/iphone13.jpg";
import { Button } from "../../components/atom/button/Button";

export const Card: React.FC = () => {
  return (
    <div className="card">
      <Media
        type="image"
        src={iphone13}
        alt="Design System"
        containerClasses="w-[450px]"
        mediaClasses="w-full h-full object-cover rouded mt-10"
      />
      <Typography
        tag="h4"
        text="Apple iPhone 13 (Green, 128 GB)"
        classes="title text-black text-[35px] mt-10"
      />
      <Typography
        tag="h4"
        text="₹44749"
        classes="title text-black text-[35px] mt-10"
      />
      <Typography
        tag="p"
        text="iPhone 13 features a 6.1-inch Super Retina XDR display, A15 Bionic chip, dual 12MP cameras, 5G, and improved battery life."
        classes="title text-black text-[20px]"
      />
      <Button variant="primary" variantType="solid">
        Add to cart
      </Button>
    </div>
  );
};
