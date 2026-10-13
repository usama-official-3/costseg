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
import { submitLead } from "@/lib/leads/submitLead";
import {
  questionnaireSchema,
  type QuestionnaireValues,
} from "@/lib/schemas/questionnaire";
import { cn } from "@/lib/cn";

const steps = ["Property", "Documents", "Contact"] as const;

export function QuestionnaireForm() {
  const [step, setStep] = useState(0);
  const [successId, setSuccessId] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    trigger,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuestionnaireValues>({
    resolver: zodResolver(questionnaireSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      propertyType: "",
      studyType: undefined,
      placedInServiceYear: "",
      propertyAddress: "",
      hasPlans: undefined,
      notes: "",
      companyWebsite: "",
    },
  });

  const goNext = async () => {
    const fieldsByStep: Array<(keyof QuestionnaireValues)[]> = [
      ["propertyType", "studyType", "propertyAddress", "placedInServiceYear"],
      ["hasPlans", "notes"],
      ["fullName", "email", "phone"],
    ];
    const valid = await trigger(fieldsByStep[step], { shouldFocus: true });
    if (valid) setStep((value) => Math.min(value + 1, steps.length - 1));
  };

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    const result = await submitLead({
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      propertyType: values.propertyType,
      propertyAddress: values.propertyAddress,
      message: [
        `Study context: ${values.studyType}`,
        `Placed-in-service year: ${values.placedInServiceYear || "n/a"}`,
        `Plans available: ${values.hasPlans}`,
        values.notes ? `Notes: ${values.notes}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
      companyWebsite: values.companyWebsite,
    });

    if (!result.ok) {
      setServerError(result.error);
      return;
    }

    setSuccessId(result.id);
    reset();
    setStep(0);
  });

  if (successId) {
    return (
      <div className="rounded-[13px] border border-line bg-soft p-6" role="status">
        <h2 className="text-lg font-bold text-ink">Questionnaire received</h2>
        <p className="mt-2 text-sm text-muted">
          Thanks — your property questionnaire was mock-accepted by the frontend.
          A team member follow-up path will use the approved lead destination later.
        </p>
        <Button
          type="button"
          className="mt-5"
          variant="secondaryLight"
          onClick={() => setSuccessId(null)}
        >
          Start another questionnaire
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
      <ol className="mb-6 grid grid-cols-3 gap-2">
        {steps.map((label, index) => (
          <li
            key={label}
            className={cn(
              "rounded-[8px] border px-2 py-2 text-center text-xs font-bold",
              index === step
                ? "border-ink bg-ink text-white"
                : index < step
                  ? "border-lime bg-[#f0f4df] text-ink"
                  : "border-line text-muted",
            )}
          >
            {index + 1}. {label}
          </li>
        ))}
      </ol>

      {step === 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="propertyType">Property type *</Label>
            <SelectInput id="propertyType" {...register("propertyType")}>
              <option value="">Select one</option>
              <option value="multifamily">Multifamily</option>
              <option value="office">Office</option>
              <option value="retail">Retail / restaurant</option>
              <option value="industrial">Industrial / warehouse</option>
              <option value="hospitality">Hospitality</option>
              <option value="other">Other</option>
            </SelectInput>
            <FieldError>{errors.propertyType?.message}</FieldError>
          </div>
          <div>
            <Label htmlFor="studyType">Study context *</Label>
            <SelectInput id="studyType" {...register("studyType")}>
              <option value="">Select one</option>
              <option value="acquisition">Acquisition</option>
              <option value="new-construction">New construction</option>
              <option value="renovation">Renovation / improvement</option>
              <option value="look-back">Look-back</option>
              <option value="unsure">Not sure yet</option>
            </SelectInput>
            <FieldError>{errors.studyType?.message}</FieldError>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="propertyAddress">Property address *</Label>
            <TextInput id="propertyAddress" {...register("propertyAddress")} />
            <FieldError>{errors.propertyAddress?.message}</FieldError>
          </div>
          <div>
            <Label htmlFor="placedInServiceYear">Placed-in-service year</Label>
            <TextInput
              id="placedInServiceYear"
              inputMode="numeric"
              placeholder="YYYY"
              {...register("placedInServiceYear")}
            />
            <HelperText>Optional if unknown.</HelperText>
            <FieldError>{errors.placedInServiceYear?.message}</FieldError>
          </div>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="grid gap-4">
          <div>
            <Label htmlFor="hasPlans">Plans / drawings available? *</Label>
            <SelectInput id="hasPlans" {...register("hasPlans")}>
              <option value="">Select one</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="unsure">Unsure</option>
            </SelectInput>
            <FieldError>{errors.hasPlans?.message}</FieldError>
          </div>
          <div>
            <Label htmlFor="notes">Anything else we should know?</Label>
            <TextArea id="notes" {...register("notes")} />
            <HelperText>
              Optional notes about invoices, renovations, or CPA involvement.
            </HelperText>
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="fullName">Full name *</Label>
            <TextInput id="fullName" autoComplete="name" {...register("fullName")} />
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
          <div className="sm:col-span-2">
            <Label htmlFor="phone">Phone</Label>
            <TextInput id="phone" type="tel" autoComplete="tel" {...register("phone")} />
          </div>
        </div>
      ) : null}

      <input
        id="companyWebsite"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10000px] top-auto h-px w-px opacity-0"
        {...register("companyWebsite")}
      />

      {serverError ? <FieldError>{serverError}</FieldError> : null}

      <div className="mt-6 flex scroll-mb-[calc(72px+env(safe-area-inset-bottom))] flex-wrap gap-3 lg:scroll-mb-0">
        {step > 0 ? (
          <Button
            type="button"
            variant="secondaryLight"
            onClick={() => setStep((value) => Math.max(0, value - 1))}
          >
            Back
          </Button>
        ) : null}
        {step < steps.length - 1 ? (
          <Button type="button" onClick={goNext}>
            Continue
          </Button>
        ) : (
          <Button type="submit" loading={isSubmitting}>
            Submit questionnaire
          </Button>
        )}
      </div>
    </form>
  );
}
