import React from "react";
import { MacroProgress } from "@/components/macro-progress";
import { macroTargets } from "@/data/fitness";

interface MacroProgressSectionProps {
  entry: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  className?: string;
}

export function MacroProgressSection({ entry, className }: MacroProgressSectionProps) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ''}`}>
      <MacroProgress label="Calories" value={entry.calories} target={macroTargets.calories} color="#f59e42" />
      <MacroProgress label="Protein" value={entry.protein} target={macroTargets.protein} color="#60a5fa" />
      <MacroProgress label="Carbs" value={entry.carbs} target={macroTargets.carbs} color="#34d399" />
      <MacroProgress label="Fat" value={entry.fat} target={macroTargets.fat} color="#f472b6" />
    </div>
  );
}
