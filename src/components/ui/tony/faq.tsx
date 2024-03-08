import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export function AccordionFAQ() {
  const t = useTranslations("AccordionFAQ");

  return (
    <div className="w-full">
      <h2 className="mt-[10rem] text-center text-3xl font-bold tracking-tight duration-1000 animate-in slide-in-from-bottom-6 lg:text-5xl">
        {t("h1")}
      </h2>
      <p className="text-center text-[16px] leading-7 text-muted-foreground">
        {t("p1")}
      </p>

      <Accordion type="single" collapsible className="mx-auto mt-10 w-3/4">
        <AccordionItem value="item-1">
          <AccordionTrigger>{t("q1")}</AccordionTrigger>
          <AccordionContent>
            {t("a1")} 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{t("q2")}</AccordionTrigger>
          <AccordionContent>
            {t("a2")} 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>{t("q3")}</AccordionTrigger>
          <AccordionContent>
            {t("a3")} 
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
