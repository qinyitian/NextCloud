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
            脚本的功能
          </AccordionTrigger>
          <AccordionContent>
            {/* {t("a1")}  */}
            在浏览器进行的需要重复的业务操作，都可以写成脚本，自动执行。例如：自动从本地读取数据上货这类需要多次进行的业务。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            {/* {t("q1")} */}
            工具批量的自动操作是否会影响平台对店铺的审核
          </AccordionTrigger>
          <AccordionContent>
            {/* {t("a1")}  */}
            不会，和人工上传完全一样的点击过程，模拟过程可以直观看见，在平台看来，就是人类在不断的点击提交。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            {/* {t("q2")} */}
            如何收费
          </AccordionTrigger>
          <AccordionContent>
            {/* {t("a2")}  */}
            一次购买，永久使用，不会限制只能一个机器或者一个ip使用。一个操作不复杂的上货脚本定价在￥500左右，其他则根据定制的复杂度适当加价，可商议。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            {/* {t("q3")} */}
            其他问题
          </AccordionTrigger>
          <AccordionContent>
            {/* {t("a3")}  */}
            请联系客服咨询，微信号：Yangerstar1
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
