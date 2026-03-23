import type { Metadata } from "next";
import AgeGate from "@/components/AgeGate";
import RetailersContent from "./RetailersContent";

export const metadata: Metadata = {
  title: "Retailers",
  description:
    "Retailer information for Open Fields Distribution. Saskatchewan portal access and Manitoba MBLL ordering information.",
};

export default function RetailersPage() {
  return (
    <AgeGate>
      <RetailersContent />
    </AgeGate>
  );
}
