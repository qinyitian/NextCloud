import { Button } from "@/components/ui/button";
import ColorPicker from "@/components/ui/tony/color-picker";
import { AccordionFAQ } from "@/components/ui/tony/faq";
import Features from "@/components/ui/tony/features";
import { Icons } from "@/components/ui/tony/icons";
import Mansory from "@/components/ui/tony/mansoryv2";
import MoreFeature from "@/components/ui/tony/pages/more-features";
import TwitterWidget from "@/components/ui/tony/pages/twitter-widget";
// import Mansory from "@/components/ui/tony/mansory";
import Price from "@/components/ui/tony/price";
import RotateCard from "@/components/ui/tony/rotate-card";
import TechStack from "@/components/ui/tony/tech-stack";
import { useTranslations } from "next-intl";
// import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import Link from "next/link";

type Props = {
  params: {locale: string};
};
export default function Home({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Index");
  // const t = getTranslations("Index");

  return (
    <main className="mx-auto flex max-w-[1200px] flex-col items-center gap-3 px-6">
      <div className="absolute -right-20 top-10 z-0 h-60 w-80 bg-blue-600 opacity-30 blur-[80px]"></div>
      <div className="absolute left-40 top-60 z-0 h-60 w-80 bg-blue-400 opacity-30 blur-[80px]"></div>
      <div className="absolute right-40 top-60 z-0 h-60 w-80 bg-purple-400 opacity-30 blur-[80px]"></div>
      <div className="mt-16 max-w-xl space-y-5">
        <h2 className="bg-gradient-to-r from-pink-500  to-violet-500 bg-clip-text text-center text-4xl font-bold text-transparent duration-1000 animate-in fade-in slide-in-from-bottom-5 md:text-7xl md:leading-[5rem]">
          {t("h1")}
        </h2>
        <p className="text-center text-xl text-muted-foreground duration-1000 animate-in fade-in slide-in-from-bottom-5">
          {t("p2")}
        </p>
        <p className="text-center text-muted-foreground duration-1000 animate-in fade-in slide-in-from-bottom-5">
          {t("p1")}
        </p>
        <p className="text-center text-muted-foreground duration-1000 animate-in fade-in slide-in-from-bottom-5">
          {t("connect")}
        </p>


        <div className="flex justify-center gap-3">
          <Link
            target="_blank"
            href=""
            className="flex items-center gap-2 rounded border bg-slate-100 px-4 py-2  transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <Icons.google className="h-4 w-4" />
            <span> {t("link")} </span>
            <span className="">100+</span>
          </Link>

          <Link
            target="_blank"
            href={t("linkTo")}
            className=" flex items-center gap-2 rounded border bg-slate-100 px-4 py-2  transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <Icons.vercel className="h-4 w-4" />
            <span>{t("example")}</span>
          </Link>
        </div>
      </div>

      <ColorPicker />

      <Features className="mt-[3rem]" />

      {/* <TechStack className="mt-[3rem]" /> */}

      {/* <MoreFeature className="mt-[4rem]" /> */}

      <p></p>

      {/* 付款页面 */}
      <Price />
      
      {/* <Mansory className="mt-[10rem]" /> */}

      {/* FAQ */}
      <AccordionFAQ />

      {/* <TwitterWidget className="mt-[3rem] max-w-[60rem]" /> */}
    </main>
  );
}
