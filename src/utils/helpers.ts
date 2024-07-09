import clsx, { ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassArray) {
  return twMerge(clsx(inputs));
}

interface CreateAvatarUrlArgs {
  /** Can be the user's name or the imgSrc. */
  avatarUrl: string;
  /** @see https://ui-avatars.com/ for additional properties. */
  additionalParams?: Record<string, string | number>;
}

export const createAvatarUrl = (args: CreateAvatarUrlArgs) => {
  const { avatarUrl: url, additionalParams } = args;

  if (url.includes("http")) return url;

  const params = new URLSearchParams();
  params.append("name", url);
  params.append("size", "256");

  if (additionalParams) {
    Object.entries(additionalParams).forEach(([key, value]) => {
      params.append(key, String(value));
    });
  }

  return `https://ui-avatars.com/api.jpg?${params.toString()}`;
};

export function statusColorCode(statusText: string): BadgeStatus {
  const positives = [
    "completed",
    "verified",
    "successful",
    "approved",
    "active",
  ];
  const negatives = ["reject", "late", "archieved"];
  const cautions = ["not verified", "not active", "pending"];
  const others = ["permanent"];

  const text = statusText.toLowerCase();
  if (positives.includes(text)) return "positive";
  else if (negatives.includes(text)) return "negative";
  else if (cautions.includes(text)) return "caution";
  else if (others.includes(text)) return "perma";
  else return "neutral";
}
