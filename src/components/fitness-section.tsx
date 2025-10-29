'use client'

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { ChartContainer } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from "recharts";
import { MacroProgressSection } from "@/components/macro-progress-section";
import { Card } from "@/components/ui/card";
import { recipes } from "@/data/fitness";
import Link from "next/link";

// Types matching the fitlog pattern
interface WeightEntry {
  date: string;
  weight: number;
}

interface FoodEntry {
  date: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  description?: string;
}

export function FitnessSection() {
  const [weightData, setWeightData] = useState<WeightEntry[]>([]);
  const [foodData, setFoodData] = useState<FoodEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [foodLoading, setFoodLoading] = useState(true);

  // Fetch weight data
  useEffect(() => {
    async function fetchWeight() {
      setLoading(true);
      const { data, error } = await supabase
        .from("weight")
        .select("date, weight_value")
        .order("date", { ascending: true });
      if (!error && data) {
        setWeightData(
          data.map((row) => ({
            date: row.date,
            weight: row.weight_value,
          }))
        );
      }
      setLoading(false);
    }
    fetchWeight();
  }, []);

  // Fetch food/macro data
  useEffect(() => {
    async function fetchFood() {
      setFoodLoading(true);
      const { data, error } = await supabase
        .from("food")
        .select("date, calories, protein, carbs, fat, description")
        .order("date", { ascending: true });
      if (!error && data) {
        setFoodData(
          data.map((row) => ({
            date: row.date,
            calories: row.calories ?? 0,
            protein: row.protein ?? 0,
            carbs: row.carbs ?? 0,
            fat: row.fat ?? 0,
            description: row.description,
          }))
        );
      }
      setFoodLoading(false);
    }
    fetchFood();
  }, []);

  // Get the latest food entry
  const sortedFood = [...foodData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const latestEntry = sortedFood.find((f) => f.calories && f.calories !== 0);
  const latestDateStr = latestEntry?.date ?? '';

  return (
    <section id="fitness" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">fitness data</h2>
        <p className="text-sm text-muted-foreground">
          open source fitness tracking. <a href="#" style={{borderBottom: '1px solid'}}>see more here</a>
        </p>
      </div>

      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-6">
        {/* Weight Chart - Full Width Within Card */}
        <Card className="p-6">
          {loading ? (
            <div className="text-center text-muted-foreground">Loading...</div>
          ) : (
            <div className="w-full aspect-[2/1]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weightData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} domain={[190, 270]} />
                  <Tooltip />
                  <Legend />
                  <ReferenceLine y={225} stroke="#22c55e" strokeDasharray="3 3" label={{ value: 'target', position: 'insideBottomLeft', fill: '#22c55e', fontSize: 12, dy: -5 }} />
                  <Line type="monotone" dataKey="weight" stroke="#6366f1" strokeWidth={2} dot={true} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </Card>

        {/* Latest Macro Progress */}
        <Card className="p-6">
          <div className="space-y-4">
            {foodLoading ? (
              <div className="text-center text-muted-foreground">Loading...</div>
            ) : latestEntry ? (
              <>
                <MacroProgressSection entry={latestEntry} />
                <div className="text-center pt-2">
                  <p className="text-sm text-muted-foreground">macros for {latestDateStr}</p>
                </div>
              </>
            ) : (
              <div className="text-center text-muted-foreground">No food entries found</div>
            )}
          </div>
        </Card>
      </div>

      {/* Recipe List - Compact Cards */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">some of my high-protein recipes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {recipes.map((recipe) => (
            <Link
              key={recipe.name}
              href={recipe.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="h-full border border-border shadow-sm">
                <div className="flex flex-col items-center justify-center gap-2 p-4 min-h-[100px]">
                  {recipe.emoji && (
                    <div className="text-3xl">
                      {recipe.emoji}
                    </div>
                  )}
                  <h4 className="font-medium text-sm text-center">
                    {recipe.name}
                  </h4>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
