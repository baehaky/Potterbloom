import { Card, Typography, Input, Button } from "@material-tailwind/react";

export default function LandingPage() {
  return (
    <main className="py-36">
      <div className=" w-full ">
        <div className="container mx-auto px-4 text-center">
          <Typography className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
            We Sell Trust!
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mx-auto my-6 w-full leading-snug !text-2xl lg:max-w-3xl lg:!text-5xl"
          >
            Potterbloom: <span className="text-green-400"> Fresh,</span> <span className="text-green-400">Fragrant,</span> and  <span className="leading-snug text-green-400">Delivered for Your Love!</span>
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
          >
            It's time to send your lover to make the relationship more romantic and memorable.
          </Typography>
        </div>
      </div>
    </main>
  );
}
