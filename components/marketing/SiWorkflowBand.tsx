import {
  ArrowRight,
  FileText,
  GitBranch,
  Search,
  SquareAsterisk,
} from "lucide-react";
import { ProcessSteps } from "@/components/marketing/ProcessSteps";
import { SiMeshBackdrop } from "@/components/marketing/SiMeshBackdrop";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { homeCopy } from "@/content/marketing/home";
import { cn } from "@/lib/cn";

type Step = { title: string; body: string };

/** Board order: document · branch nodes · framed asterisk · magnifier */
const flowIcons = [FileText, GitBranch, SquareAsterisk, Search];

function TechCopy({
  eyebrow,
  titleLead,
  titleRest,
  support,
  ctaHref,
  ctaLabel,
  compact = false,
}: {
  eyebrow: string;
  titleLead: string;
  titleRest: string;
  support: string;
  ctaHref: string;
  ctaLabel: string;
  compact?: boolean;
}) {
  return (
    <div className={cn("cs-reveal", compact ? "max-w-xl" : "max-w-[24rem] xl:max-w-[26rem]")}>
      <p
        className={cn(
          "font-extrabold uppercase tracking-[0.18em] text-white/90",
          compact ? "text-[10px]" : "text-[11px]",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-extrabold leading-[1.02] tracking-[-0.04em]",
          compact
            ? "mt-1.5 text-[clamp(1.85rem,7vw,2.5rem)]"
            : "mt-2 text-[clamp(2rem,4vw,3rem)]",
        )}
      >
        <span className="block text-lime">{titleLead}</span>
        <span className="block text-white">{titleRest}</span>
      </h2>
      <p
        className={cn(
          "text-white/80",
          compact
            ? "mt-2 text-[13.5px] leading-[1.45] sm:text-[14px]"
            : "mt-3 text-[15px] leading-[1.55]",
        )}
      >
        {support}
      </p>
      <div className={compact ? "mt-3.5" : "mt-5"}>
        <LinkButton
          href={ctaHref}
          variant="secondary"
          size={compact ? "sm" : "md"}
          pill
        >
          {ctaLabel}
          <ArrowRight
            className={cn(
              "shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5",
              compact ? "size-3.5" : "size-4",
            )}
            aria-hidden
          />
        </LinkButton>
      </div>
    </div>
  );
}

function FlowIconCard({ label, index }: { label: string; index: number }) {
  const Icon = flowIcons[index % flowIcons.length];
  return (
    <div className="flex flex-col items-center text-center">
      <div className="grid size-[3.5rem] place-items-center rounded-[12px] border border-white/[0.08] bg-[#121416] text-lime shadow-[0_6px_18px_rgba(0,0,0,0.5)] xl:size-16">
        <Icon className="size-6 xl:size-7" aria-hidden strokeWidth={1.35} />
      </div>
      <p className="mt-2 min-h-[2.6em] w-[6.75rem] text-[11px] font-semibold leading-snug text-white xl:text-[12px]">
        {label}
      </p>
    </div>
  );
}

/** Desktop only — board horizontal tray */
function DesktopFlowTray({ labels }: { labels: readonly string[] }) {
  return (
    <div className="relative min-w-0">
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] h-[140%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(214,255,67,0.16)_0%,rgba(214,255,67,0.04)_45%,transparent_68%)] blur-2xl"
        aria-hidden
      />
      <div
        className={cn(
          "relative rounded-[1.25rem] border border-lime/35 bg-[#0b0c0d]/88",
          "px-5 py-6 xl:px-6 xl:py-7",
          "shadow-[inset_0_1px_0_rgba(214,255,67,0.08),0_0_28px_rgba(214,255,67,0.05)]",
        )}
      >
        <ol className="flex items-start justify-center">
          {labels.map((label, index) => {
            const last = index === labels.length - 1;
            return (
              <li key={label} className="flex items-start">
                <FlowIconCard label={label} index={index} />
                {!last ? (
                  <div
                    className="flex h-[3.5rem] items-center px-1.5 text-lime xl:h-16 xl:px-2"
                    aria-hidden
                  >
                    <ArrowRight className="size-3.5 xl:size-4" strokeWidth={2.75} />
                  </div>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

/**
 * Mobile/tablet — same Our Technology / Super Intelligence section as desktop,
 * with the four flow steps as cards (not How it works / 4-Stage SI Process).
 */
function MobileTabletTechnology({ labels }: { labels: readonly string[] }) {
  const tech = homeCopy.technology;

  return (
    <section className="relative isolate overflow-hidden border-y border-white/10 bg-[#0a0a0a] text-white lg:hidden">
      <SiMeshBackdrop />
      <div className="relative z-10 py-7 sm:py-8">
        <Container>
          <TechCopy
            eyebrow={tech.eyebrow}
            titleLead={tech.titleLead}
            titleRest={tech.titleRest}
            support={tech.support}
            ctaHref={tech.ctaHref}
            ctaLabel={tech.ctaLabel}
            compact
          />

          <ol className="cs-reveal mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3">
            {labels.map((label, index) => {
              const Icon = flowIcons[index % flowIcons.length];
              return (
                <li
                  key={label}
                  className="flex flex-col items-center rounded-[12px] border border-white/12 bg-[#121416] px-3 py-4 text-center"
                >
                  <div className="grid size-11 place-items-center rounded-[10px] border border-white/[0.08] bg-[#0b0c0d] text-lime">
                    <Icon className="size-5" aria-hidden strokeWidth={1.35} />
                  </div>
                  <p className="mt-2.5 min-h-[2.5em] text-[12px] font-semibold leading-snug text-white sm:text-[13px]">
                    {label}
                  </p>
                </li>
              );
            })}
          </ol>
        </Container>
      </div>
    </section>
  );
}

export function SiWorkflowBand({ steps }: { steps: readonly Step[] }) {
  const tech = homeCopy.technology;

  return (
    <>
      {/* Mobile / tablet: Our Technology + flow cards */}
      <MobileTabletTechnology labels={tech.flow} />

      {/* Desktop: Our Technology + horizontal tray */}
      <section className="relative isolate hidden overflow-hidden border-y border-white/10 bg-[#0a0a0a] text-white lg:block">
        <SiMeshBackdrop />
        <div className="relative z-10 py-14">
          <Container>
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)] xl:gap-10">
              <TechCopy
                eyebrow={tech.eyebrow}
                titleLead={tech.titleLead}
                titleRest={tech.titleRest}
                support={tech.support}
                ctaHref={tech.ctaHref}
                ctaLabel={tech.ctaLabel}
              />
              <DesktopFlowTray labels={tech.flow} />
            </div>
          </Container>
        </div>
      </section>

      {/* Separate from Technology — shown on all breakpoints */}
      <ProcessSteps
        eyebrow="How it works"
        title="The 4-Stage SI Process"
        lead="Document ingestion, classification, estimation, and human-in-the-loop review — proposed workflow stages for explanation."
        steps={steps}
        surface="soft"
        numbered={false}
        connect={false}
        align="center"
      />
    </>
  );
}
