import Confetti from "@/components/ui/tony/confetti";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

export default function AboutPage({}: Props) {
  const t = useTranslations("AboutPage");

  return (
    <div className="mx-auto mt-6 flex h-[80vh] max-w-[800px] flex-col items-center gap-8 px-6 text-center">
      <h2 className="mb-8 text-3xl font-semibold">{t("we")}</h2>
      <p className="text-2xl font-semibold">
        {t("info")}
      </p>
      <p className="text-muted-foreground">{t("c1")}</p>
      <p className="text-muted-foreground">{t("c2")}</p>
      <Confetti />
    </div>
  );
}
