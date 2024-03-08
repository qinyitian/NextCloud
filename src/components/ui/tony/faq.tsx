import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export function AccordionFAQ() {
  // const t = useTranslations("AccordionFAQ");

  return (
    <div className="w-full">
      <h2 className="mt-[10rem] text-center text-3xl font-bold tracking-tight duration-1000 animate-in slide-in-from-bottom-6 lg:text-5xl">
        {/* {t("h1")} */}
        一些问题
      </h2>
      <p className="text-center text-[16px] leading-7 text-muted-foreground">
        {/* {t("p1")} */}
        有任何其他问题，请点击这里
      </p>

      <Accordion type="single" collapsible className="mx-auto mt-10 w-3/4">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            {/* {t("q1")} */}
            工具批量上传是否会影响平台对店铺的审核
          </AccordionTrigger>

          <AccordionContent>
            {/* {t("a1")}  */}
            不会，和人工上传完全一样的点击过程，单个店铺产品依次上传，使用过程即可知道
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            {/* {t("q2")} */}
            如何收费
          </AccordionTrigger>
          <AccordionContent>
            {/* {t("a2")}  */}
            目前是分为按月和按年收费两种，不支持永久免费，因为这个平台的风口过去了，工具脚本就不在被需要，短期付费更能保证客户权益
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            {/* {t("q3")} */}
            其他问题
          </AccordionTrigger>
          <AccordionContent>
            {/* {t("a3")}  */}
            请联系客服咨询
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
