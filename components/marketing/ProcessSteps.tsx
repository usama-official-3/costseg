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
  eyebrow = "How it works",
  align = "start",
}: {
  title: string;
  lead?: string;
  steps: readonly Step[];
  surface?: "paper" | "soft" | "ink";
  numbered?: boolean;
  /** Draw subtle connectors between steps on large screens */
  connect?: boolean;
  /** Section label — matches Services / Who we help style */
  eyebrow?: string;
  /** Board-style centered process cards */
  align?: "start" | "center";
}) {
  const dark = surface === "ink";
  const centered = align === "center";

  return (
    <Section
      surface={surface}
      className={cn(dark ? "pb-14 pt-4 sm:pb-16" : "py-14 sm:py-16 lg:py-[4.5rem]")}
    >
      <Container>
        <p
          className={cn(
            "text-[11px] font-extrabold uppercase tracking-[0.12em]",
            dark ? "text-lime" : "text-muted",
          )}
        >
          {eyebrow}
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
          <p
            className={cn(
              "mt-3 max-w-2xl",
              dark ? "text-hero-muted" : "text-muted",
            )}
          >
            {lead}
          </p>
        ) : null}

        <ol
          className={cn(
            "mt-10 grid gap-4",
            // Mobile: 1 col · Tablet: 2 · Desktop: 4
            "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4",
            connect && "xl:gap-3",
          )}
        >
          {steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <li
                key={step.title}
                className={cn(
                  "cs-reveal relative flex h-full flex-col rounded-[14px] p-5 sm:p-6",
                  dark
                    ? "border border-white/10 bg-white/[0.04]"
                    : "border border-line/80 bg-paper shadow-[0_8px_24px_rgba(23,25,27,0.06)]",
                  centered && "items-center text-center",
                )}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {connect && index < steps.length - 1 ? (
                  <span
                    className="pointer-events-none absolute right-[-10px] top-10 z-10 hidden h-px w-3 bg-lime/50 xl:block"
                    aria-hidden
                  />
                ) : null}

                <div
                  className={cn(
                    "grid size-11 shrink-0 place-items-center rounded-[9px]",
                    centered ? "mx-auto" : "",
                    dark ? "bg-[#f0f4df] text-ink" : "bg-[#eef6c8] text-ink",
                  )}
                >
                  <Icon className="size-5" aria-hidden strokeWidth={1.75} />
                </div>

                {numbered ? (
                  <span
                    className={cn(
                      "mt-3 text-xs font-extrabold tabular-nums",
                      dark ? "text-lime" : "text-muted",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                ) : null}

                <h3
                  className={cn(
                    "mt-4 text-[15px] font-bold leading-snug tracking-tight sm:text-base",
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
