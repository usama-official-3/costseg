import { Badge } from "@/components/ui/Badge";
import {
  contentKindLabels,
  type ContentKind,
} from "@/lib/schemas/knowledge";

export function ContentKindBadge({ kind }: { kind: ContentKind }) {
  return <Badge variant="muted">{contentKindLabels[kind]}</Badge>;
}
