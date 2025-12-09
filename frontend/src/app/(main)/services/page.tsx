import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги",
};

export default function ServicesPage() {
  redirect("/");
  return null;
}
