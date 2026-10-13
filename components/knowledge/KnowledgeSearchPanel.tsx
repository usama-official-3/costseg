"use client";

import { useMemo, useState } from "react";
import { ResultList } from "@/components/knowledge/ResultList";
import { Label, SelectInput, TextInput } from "@/components/ui/Field";
import type { KnowledgeArticle, KnowledgeGroup } from "@/lib/schemas/knowledge";
import { filterKnowledgeArticles } from "@/lib/search/knowledgeSearch";

const groups: Array<{ value: KnowledgeGroup | "all"; label: string }> = [
  { value: "all", label: "All groups" },
  { value: "fundamentals", label: "Fundamentals" },
  { value: "tax-law", label: "Tax law & IRS" },
  { value: "cases", label: "Court cases" },
  { value: "properties", label: "Property guides" },
  { value: "assets", label: "Asset library" },
  { value: "studies", label: "Case studies" },
  { value: "resources", label: "Resources" },
];

const kinds: Array<{ value: KnowledgeArticle["kind"] | "all"; label: string }> = [
  { value: "all", label: "All content kinds" },
  { value: "company-education", label: "Company education" },
  { value: "primary-authority", label: "Primary authority" },
  { value: "irs-government", label: "IRS / government" },
  { value: "illustrative-example", label: "Illustrative example" },
  { value: "secondary-commentary", label: "Secondary commentary" },
];

export function KnowledgeSearchPanel({
  articles,
}: {
  articles: KnowledgeArticle[];
}) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<KnowledgeGroup | "all">("all");
  const [kind, setKind] = useState<KnowledgeArticle["kind"] | "all">("all");

  const results = useMemo(
    () => filterKnowledgeArticles(articles, { query, group, kind }),
    [articles, query, group, kind],
  );

  return (
    <div className="space-y-6">
      <div className="grid gap-4 rounded-[13px] border border-line bg-paper p-4 sm:grid-cols-3">
        <div className="sm:col-span-3 lg:col-span-1">
          <Label htmlFor="knowledge-query">Search</Label>
          <TextInput
            id="knowledge-query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search titles, summaries, body…"
          />
        </div>
        <div>
          <Label htmlFor="knowledge-group">Group</Label>
          <SelectInput
            id="knowledge-group"
            value={group}
            onChange={(event) =>
              setGroup(event.target.value as KnowledgeGroup | "all")
            }
          >
            {groups.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </SelectInput>
        </div>
        <div>
          <Label htmlFor="knowledge-kind">Kind</Label>
          <SelectInput
            id="knowledge-kind"
            value={kind}
            onChange={(event) =>
              setKind(event.target.value as KnowledgeArticle["kind"] | "all")
            }
          >
            {kinds.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </SelectInput>
        </div>
      </div>

      <p className="text-sm text-muted">
        Showing {results.length} of {articles.length} sample articles (Phase 6
        seed set — not the full 187-page inventory).
      </p>

      <ResultList articles={results} />
    </div>
  );
}
