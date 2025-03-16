import { getIndustryInsights } from "@/actions/dashboard";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import DashboardView from "./_components/DashboardView";
import { useEffect } from "react";

const industryInsightPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();
  const insights = await getIndustryInsights();
useEffect(()=>{

  if (!isOnboarded) {
    redirect("/onboarding");
  }
},[])
  return (
    <div className="container mx-auto">
      <DashboardView insights={insights} />
    </div>
  );
};

export default industryInsightPage;
