"use client";

import { useState } from "react";
import { StudyPreviewCard } from "@/components/tools/StudyPreviewCard";
import { workflowStages } from "@/content/tools/workflow";
import { cn } from "@/lib/cn";

type StageId = (typeof workflowStages)[number]["id"];

export function WorkflowExplorer() {
  const [activeId, setActiveId] = useState<StageId>(workflowStages[0].id);
  const active =
    workflowStages.find((stage) => stage.id === activeId) ?? workflowStages[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <ol className="grid gap-3 sm:grid-cols-2">
          {workflowStages.map((stage, index) => {
            const selected = stage.id === activeId;
            return (
              <li key={stage.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(stage.id)}
                  className={cn(
                    "h-full w-full rounded-[13px] border p-4 text-left transition",
                    selected
                      ? "border-ink bg-ink text-white"
                      : "border-line bg-paper hover:bg-soft",
                  )}
                  aria-pressed={selected}
                >
                  <span
                    className={cn(
                      "text-[11px] font-extrabold uppercase tracking-[0.12em]",
                      selected ? "text-lime" : "text-muted",
                    )}
                  >
                    Stage {index + 1}
                  </span>
                  <p className="mt-2 text-sm font-bold">{stage.title}</p>
                  <p
                    className={cn(
                      "mt-2 text-xs",
                      selected ? "text-hero-muted" : "text-muted",
                    )}
                  >
                    {stage.summary}
                  </p>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="mt-6 rounded-[13px] border border-line bg-soft p-5">
          <h2 className="text-lg font-bold text-ink">{active.title}</h2>
          <p className="mt-2 text-sm text-muted">{active.summary}</p>

          <h3 className="mt-5 text-sm font-bold text-ink">Agents in this stage</h3>
          <ul className="mt-3 space-y-3">
            {active.agents.map((agent) => (
              <li key={agent.name} className="rounded-[10px] border border-line bg-paper p-4">
                <p className="font-semibold text-ink">{agent.name}</p>
                <p className="mt-1 text-sm text-muted">{agent.detail}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-5 text-sm font-bold text-ink">Example outputs</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            {active.outputs.map((output) => (
              <li key={output}>{output}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <div className="overflow-hidden rounded-[13px] bg-ink p-1">
          <StudyPreviewCard />
        </div>
        <p className="text-xs text-muted">
          This explorer explains the proposed Super Intelligence pipeline. It is
          not a live agent console and does not run tax calculations.
        </p>
      </div>
    </div>
  );
}
