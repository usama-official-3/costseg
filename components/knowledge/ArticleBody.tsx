import { EducationalDisclaimer } from "@/components/knowledge/EducationalDisclaimer";
import type { ArticleSection } from "@/lib/schemas/knowledge";

type ArticleBodyProps = {
  paragraphs: string[];
  sections?: ArticleSection[];
};

export function ArticleBody({ paragraphs, sections }: ArticleBodyProps) {
  return (
    <div className="space-y-8 text-base leading-[1.7] text-ink">
      <div className="space-y-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="text-[15px] text-muted sm:text-base">
            <span className="text-ink">{paragraph}</span>
          </p>
        ))}
      </div>
      {sections && sections.length > 0 ? (
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-xl font-bold tracking-tight text-ink">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-[15px] text-muted sm:text-base"
                >
                  <span className="text-ink">{paragraph}</span>
                </p>
              ))}
            </section>
          ))}
        </div>
      ) : null}
      <EducationalDisclaimer />
    </div>
  );
}
