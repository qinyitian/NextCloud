"use client";
import React from "react";
import FadeIn from "./fade-in";
import {
  BarChart,
  BarChartIcon,
  Boxes,
  PlugIcon,
  RocketIcon,
  Smartphone,
  UserPlusIcon,
  UserRoundPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useColorStore } from "@/store/color-store";
import { useTranslations } from "next-intl";

interface FeatureProps extends React.HTMLProps<HTMLDivElement> {
  // 你的自定义属性
}
type Props = {
  params: { locale: string };
};
export default function Features({ className }: FeatureProps) {
  const themeColor = useColorStore((state) => state.themeColor);

  // const t = useTranslations("Features");

  const features = [
    {
      title: "自动模拟上架插件",
      desc: "本地整理商品素材后，通过本插件自动打开新页面，按次序点击上架商品，完美模拟手动上货步骤，不怕审计",
      icon: <UserRoundPlus className="text-slate-50" />,
    },
    {
      title: "批量点赞评论工具",
      desc: "自媒体平台的自动点赞，评论功能",
      icon: <BarChartIcon className="text-slate-50" />,
    },
    {
      title: "B站自动下载任务",
      desc: "比如指定b站收藏夹链接，将自动下载所有视频，且配置本地文件名和视频标题一致",
      icon: <Smartphone className="text-slate-50" />, // Replace with appropriate icon from Lucide
    },
    {
      title: "其他定制化功能插件",
      desc: "如有此定制要求，请联系我们",
      icon: <PlugIcon className="text-slate-50" />,
    },

    // {
    //   title: "Production",
    //   desc: "Ready for your production",
    //   icon: <RocketIcon className="text-slate-50" />, // Replace with actual Accessibility icon from Lucide
    // },
    // {
    //   title: "Multiple Components",
    //   desc: "ready-to-use components",
    //   icon: <Boxes className="text-slate-50" />, // Replace with actual Accessibility icon from Lucide
    // },
  ];

  return (
    <div className={cn("w-full space-y-3", themeColor, className)}>
      <FadeIn>
        <h2 className="animate-fade-up text-center text-3xl font-bold tracking-tight lg:text-5xl">
          {/* {t("h1")} */}
          功能
        </h2>
      </FadeIn>
      <p className="text-center text-[16px] leading-7 text-muted-foreground">
        {/* {t("p1")} */}
        插件能力
      </p>
      <div className="grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-3">
        {features.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-2 rounded-lg border p-5 shadow"
          >
            <div className="self-start rounded-full bg-primary p-3">
              {item.icon}
            </div>
            <h3 className="text-2xl font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="text-muted-foreground"> {item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
