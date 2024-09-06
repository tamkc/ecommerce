import Wrapper from "@/components/Wrapper";
import Phone from "@/components/Phone";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <div className="bg-slate-50 grainy-light">
      <section>
        <Wrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
                <img
                  src="/tiger-phone.png"
                  className="w-full -rotate-6"
                  alt="Tiger with phone"
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Design on a{" "}
                <span className="bg-orange-600 px-2 text-white">
                  Personalized
                </span>{" "}
                Phone Cover
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Preserve your cherished moments with your very own,{" "}
                <span className="font-semibold">unique</span> phone cover.
                TigCase enables you to safeguard your memories, not just your
                phone cover.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-orange-600" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-orange-600" />
                    5-year printing guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-orange-600" />
                    Compatible with the latest iPhone models
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.jpg"
                    alt=""
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.jpg"
                    alt=""
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.jpg"
                    alt=""
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.png"
                    alt=""
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.png"
                    alt=""
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                    <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                    <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                    <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                    <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                  </div>

                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit rotate-3">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                alt=""
              />
              <img
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
                alt="decorative line"
              />
              <Phone className="w-64" imgSrc="/testimonials/demo-1.jpg" />
            </div>
          </div>
        </Wrapper>
        <div></div>
      </section>

      {/* value proposition section */}
      <section className="bg-slate-100 grainy-dark py-24">
        <Wrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 relative">
              <span className="absolute -top-4 -left-4 text-orange-500 opacity-50 transform rotate-12 text-6xl">
                ✨
              </span>
              What our{" "}
              <span className="relative px-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                customers{" "}
              </span>{" "}
              say
              <span className="absolute -bottom-4 -right-4 text-orange-500 opacity-50 transform rotate-12 text-6xl">
                ✨
              </span>
            </h2>
            <img src="/tiger-action.png" className="w-36" alt="moving tiger" />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "This phone case is exactly what I was looking for. It's sleek
                  and lightweight, yet{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    offers great protection
                  </span>
                  . I've dropped my phone a couple of times, and it hasn't even
                  scratched. Plus{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the fit is perfect
                  </span>
                  and the buttons are easy to press. Definitely recommend it!"
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover rotate-2"
                  src="/users/user-1.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-orange-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* second user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "I love the way this case feels in my hand. It’s sturdy
                  without being too bulky and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the texture gives a good grip
                  </span>
                  . The colors on the design are{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    vibrant and haven’t faded{" "}
                  </span>
                  after months of use. I’m impressed with how well it’s held
                  up!"
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12"
                  src="/users/user-3.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Josh</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-orange-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <Wrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Upload your photo and get{" "}
                <span className="relative px-2 bg-orange-600 text-white">
                  your own case
                </span>{" "}
                now
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />

              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img
                  src="/life-pic-with-dog.jpg"
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                />
              </div>

              <Phone className="w-60" imgSrc="/life-pic-with-dog-chop.jpg" />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-orange-600 inline mr-1.5" />
              High-quality silicone material
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-orange-600 inline mr-1.5" />
              Scratch- and fingerprint resistant coating
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-orange-600 inline mr-1.5" />
              Wireless charging compatible
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-orange-600 inline mr-1.5" />5 year
              print warranty
            </li>

            <div className="flex justify-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
                href="/configure/upload"
              >
                Create your case now <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </div>
          </ul>
        </Wrapper>
      </section>
    </div>
  );
}
