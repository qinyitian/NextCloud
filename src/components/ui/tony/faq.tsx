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
        {/* 有任何其他问题，请点击这里 */}
      </p>

      <Accordion type="single" collapsible className="mx-auto mt-10 w-3/4">
      <AccordionItem value="item-0">
          <AccordionTrigger>
            {/* {t("q1")} */}
            b站和dy套餐注意
          </AccordionTrigger>
          <AccordionContent>
            {/* {t("a1")}  */}
            脚本插件购买后，每次使用都会消耗次数，注意不要分享到公共平台，被人盗用。<br/>
            单次下载任务重，如果目标视频量每超过200个，则多消耗一次使用量。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            {/* {t("q1")} */}
            定制化服务：可以定制化的场景
          </AccordionTrigger>
          <AccordionContent>
            {/* {t("a1")}  */}
            在浏览器进行的需要重复的业务操作，都可以写成脚本，自动执行。例如：自动从本地读取数据上货、自动刷课等
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            {/* {t("q1")} */}
            工具自动操作是否会影响平台对店铺的审核
          </AccordionTrigger>
          <AccordionContent>
            {/* {t("a1")}  */}
            不会，和人工上传完全一样的点击过程，模拟过程可以直观看见，在平台看来，就是这个用户在正常的点击提交。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            {/* {t("q2")} */}
            定制化脚本如何收费
          </AccordionTrigger>
          <AccordionContent>
            {/* {t("a2")}  */}
            一次购买，永久使用，不会限制只能一个机器或者一个ip使用。一个操作不复杂的上货脚本定价在￥200-500左右，其他则根据定制的复杂度适当加价。
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
