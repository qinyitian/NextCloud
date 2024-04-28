import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Icons } from "./icons";
import Link from "next/link";

interface FeatureProps extends React.HTMLProps<HTMLDivElement> {
  // 你的自定义属性
}

import styles from "./mansoryv2.module.css";
import { cn } from "@/lib/utils";
import FadeIn from "./fade-in";

export default function Mansory({ className }: FeatureProps) {
  const items = [
    {
      imageUrl:
        "https://pbs.twimg.com/profile_images/1587046912490090496/kuBUqNkb_x96.jpg",
      alt: "@mo小童",
      name: "mo小童",
      handle: "@mo小童",
      profileLink: "",
      description:
        "上货很方便，真滴好用",
    },
    {
      imageUrl:
        "https://pbs.twimg.com/profile_images/561086911561736192/6_g58vEs_x96.jpeg",
      alt: "@xx",
      name: "jiangxixi",
      handle: "@jiangxixi",
      profileLink: "",
      description:
        "现在平台铺货管不过来，用起来节省了很多时间",
    },
    {
      imageUrl:
        "https://pbs.twimg.com/profile_images/1585995910521446400/OXrx3eAV_x96.jpg",
      alt: "@dongdongQ",
      name: "dongdongQ",
      handle: "@dongdongQ",
      profileLink: "",
      description:
        "很认真的完成了定制要求，给五星好评",
    },
    {
      imageUrl:
        "https://pbs.twimg.com/profile_images/561086911561736192/6_g58vEs_x96.jpeg",
      alt: "@汉堡后",
      name: "汉堡后",
      handle: "@汉堡后",
      profileLink: "",
      description:
        "666，值得",
    },
    {
      imageUrl:
        "https://pbs.twimg.com/profile_images/1605762947686375425/lsoGWWty_x96.jpg",
      alt: "@zhuhaiWuyanzu",
      name: "zhuhaiWuyanzu",
      handle: "@zhuhaiWuyanzu",
      profileLink: "",
      description:
        "好用，定了就几套",
    },
    {
      imageUrl:
        "https://pbs.twimg.com/profile_images/1541222252640870401/xgXE9XXt_x96.jpg",
      alt: "@HuangZhuang",
      name: "HuangZhuang",
      handle: "@HuangZhuang",
      profileLink: "",
      description:
        "好用，该花的还得花，赚回来就是",
    },
    {
      imageUrl:
        "https://pbs.twimg.com/profile_images/1605762947686375425/lsoGWWty_x96.jpg",
      alt: "@shadcn",
      name: "shadcn",
      handle: "@shadcn",
      profileLink: "",
      description:
        "工具满分，支持！",
    },
    {
      imageUrl:
        "https://pbs.twimg.com/profile_images/1636981205504786434/xDl77JIw_x96.jpg",
      alt: "@归图",
      name: "归图",
      handle: "@归图",
      profileLink: "https://twitter.com/abc30037274",
      description:
        "省了很多时间，舒服",
    },
  ];

  return (
    <div className={cn("space-y-3", className)}>
      <FadeIn>
        <h2 className="animate-fade-up text-center text-3xl font-bold tracking-tight lg:text-5xl">
          Feedbacks
        </h2>
      </FadeIn>
      <p className="text-center text-[16px] leading-7 text-muted-foreground">
        A lot of people post good feedbacks on X
      </p>
      <div className={cn(styles.masonry)}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.item}>
            <div className="flex flex-col gap-6 rounded border p-6">
              <div className="flex items-center gap-3">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={item.imageUrl} alt={item.name} />
                  <AvatarFallback>{item.name}</AvatarFallback>
                </Avatar>
                <div className="flex w-full items-center gap-1">
                  <div className="flex flex-1 flex-col gap-1">
                    <span>{item.name}</span>
                    <span className="align-baseline text-sm text-muted-foreground">
                      {item.handle}
                    </span>
                  </div>
                  <Link
                    href={item.profileLink}
                    target="_blank"
                    className="rounded p-2 transition-all duration-150 hover:-translate-y-1 hover:bg-slate-200"
                  >
                    <Icons.twitter className="" />
                  </Link>
                </div>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
