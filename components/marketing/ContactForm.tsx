"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import {
  FieldError,
  HelperText,
  Label,
  SelectInput,
  TextArea,
  TextInput,
} from "@/components/ui/Field";
import { leadFormSchema, type LeadFormValues } from "@/lib/schemas/lead";
import { submitLead } from "@/lib/leads/submitLead";

type ContactFormProps = {
  title?: string;
  includePropertyFields?: boolean;
};

export function ContactForm({
  title = "Request a conversation",
  includePropertyFields = true,
}: ContactFormProps) {
  const [serverError, setServerError] = useState<string | null>(null);
  const [successId, setSuccessId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      propertyType: "",
      propertyAddress: "",
      message: "",
      companyWebsite: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    const result = await submitLead(values);
    if (!result.ok) {
      setServerError(result.error);
      return;
    }
    setSuccessId(result.id);
    reset();
  });

  if (successId) {
    return (
      <div
        className="rounded-[13px] border border-line bg-soft p-6"
        role="status"
        aria-live="polite"
      >
        <h2 className="text-lg font-bold text-ink">Request received</h2>
        <p className="mt-2 text-sm text-muted">
          Thank you. Your inquiry was accepted by the frontend (mock delivery).
          Live email/CRM routing will be connected after the client approves a
          destination.
        </p>
        <Button
          type="button"
          className="mt-5"
          variant="secondaryLight"
          onClick={() => setSuccessId(null)}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-[13px] border border-line bg-paper p-5 sm:p-6"
      noValidate
    >
      <h2 className="text-lg font-bold text-ink">{title}</h2>
      <p className="mt-1 text-sm text-muted">
        Required fields are marked. Submissions are validated in-browser; spam
        honeypot included.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <Label htmlFor="fullName">Full name *</Label>
          <TextInput
            id="fullName"
            autoComplete="name"
            {...register("fullName")}
          />
          <FieldError>{errors.fullName?.message}</FieldError>
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <TextInput
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
          />
          <FieldError>{errors.email?.message}</FieldError>
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <TextInput
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
          />
          <FieldError>{errors.phone?.message}</FieldError>
        </div>

        {includePropertyFields ? (
          <div>
            <Label htmlFor="propertyType">Property type</Label>
            <SelectInput id="propertyType" {...register("propertyType")}>
              <option value="">Select one</option>
              <option value="multifamily">Multifamily</option>
              <option value="office">Office</option>
              <option value="retail">Retail</option>
              <option value="industrial">Industrial / warehouse</option>
              <option value="hospitality">Hospitality</option>
              <option value="other">Other</option>
            </SelectInput>
          </div>
        ) : null}

        {includePropertyFields ? (
          <div className="sm:col-span-2">
            <Label htmlFor="propertyAddress">Property address</Label>
            <TextInput
              id="propertyAddress"
              autoComplete="street-address"
              {...register("propertyAddress")}
            />
            <HelperText>Optional at first contact.</HelperText>
          </div>
        ) : null}

        <div className="sm:col-span-2">
          <Label htmlFor="message">How can we help? *</Label>
          <TextArea id="message" {...register("message")} />
          <FieldError>{errors.message?.message}</FieldError>
        </div>

        {/* Honeypot — visually hidden; excluded from a11y tree */}
        <input
          id="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="pointer-events-none absolute left-[-10000px] top-auto h-px w-px opacity-0"
          {...register("companyWebsite")}
        />
      </div>

      {serverError ? <FieldError>{serverError}</FieldError> : null}

      <div className="mt-6 flex scroll-mb-[calc(72px+env(safe-area-inset-bottom))] flex-col gap-3 sm:flex-row sm:items-center lg:scroll-mb-0">
        <Button type="submit" loading={isSubmitting}>
          Submit request
        </Button>
        <p className="text-xs text-muted">
          By submitting, you agree we may contact you about this inquiry. See{" "}
          <a href="/legal/privacy" className="font-semibold underline-offset-2 hover:underline">
            Privacy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
