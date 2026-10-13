import {
  ClipboardCheck,
  FileInput,
  Calculator,
  Tags,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/cn";

const stepIcons = [FileInput, Tags, Calculator, ClipboardCheck];

type Step = { title: string; body: string };

export function ProcessSteps({
  title,
  lead,
  steps,
  surface = "soft",
  numbered = true,
  connect = false,
}: {
  title: string;
  lead?: string;
  steps: readonly Step[];
  surface?: "paper" | "soft" | "ink";
  numbered?: boolean;
  /** Draw subtle connectors between steps on large screens */
  connect?: boolean;
}) {
  const dark = surface === "ink";

  return (
    <Section surface={surface} className={cn(dark ? "pb-14 pt-4 sm:pb-16" : "py-14 sm:py-16")}>
      <Container>
        <p
          className={cn(
            "text-[11px] font-extrabold uppercase tracking-[0.12em]",
            dark ? "text-lime" : "text-muted",
          )}
        >
          How it works
        </p>
        <h2
          className={cn(
            "mt-2 max-w-3xl text-2xl font-bold tracking-tight sm:text-3xl",
            dark && "text-white",
          )}
        >
          {title}
        </h2>
        {lead ? (
          <p className={cn("mt-3 max-w-2xl", dark ? "text-hero-muted" : "text-muted")}>
            {lead}
          </p>
        ) : null}

        <ol
          className={cn(
            "mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4",
            connect && "xl:gap-3",
          )}
        >
          {steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <li
                key={step.title}
                className={cn(
                  "cs-reveal relative rounded-[13px] p-5",
                  dark
                    ? "border border-white/10 bg-white/[0.04]"
                    : "border border-line bg-paper",
                )}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {connect && index < steps.length - 1 ? (
                  <span
                    className="pointer-events-none absolute right-[-10px] top-10 z-10 hidden h-px w-3 bg-lime/50 xl:block"
                    aria-hidden
                  />
                ) : null}
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "grid size-11 shrink-0 place-items-center rounded-[9px]",
                      dark ? "bg-[#f0f4df] text-ink" : "bg-[#f0f4df] text-ink",
                    )}
                  >
                    <Icon className="size-5" aria-hidden />
                  </div>
                  {numbered ? (
                    <span
                      className={cn(
                        "pt-1 text-xs font-extrabold tabular-nums",
                        dark ? "text-lime" : "text-muted",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  ) : null}
                </div>
                <h3
                  className={cn(
                    "mt-4 font-bold tracking-tight",
                    dark ? "text-white" : "text-ink",
                  )}
                >
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    dark ? "text-hero-muted" : "text-muted",
                  )}
                >
                  {step.body}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
