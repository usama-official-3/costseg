import { cn } from "@/lib/cn";

export function Label({
  htmlFor,
  children,
  className,
}: {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("mb-1.5 block text-sm font-semibold text-ink", className)}
    >
      {children}
    </label>
  );
}

export function HelperText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-xs text-muted">{children}</p>;
}

export function FieldError({ children }: { children?: React.ReactNode }) {
  if (!children) return null;
  return (
    <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
      {children}
    </p>
  );
}

const controlClass =
  "w-full rounded-[8px] border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted/80 focus:border-ink";

export function TextInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  return <input {...props} className={cn(controlClass, props.className)} />;
}

export function TextArea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>,
) {
  return (
    <textarea {...props} className={cn(controlClass, "min-h-28", props.className)} />
  );
}

export function SelectInput(
  props: React.SelectHTMLAttributes<HTMLSelectElement>,
) {
  return <select {...props} className={cn(controlClass, props.className)} />;
}
