import StagesTrack from "../dashboard/StagesTrack";
import Icon from "../dashboard/Icon";

function TenderProgressCard({ stages, alertText, showDates = true }) {
  const mappedStages = showDates
    ? stages
    : stages.map((item) => ({ ...item, date: "" }));

  return (
    <article className="rounded-2xl border border-[#d9dde4] bg-[#f6f7f9] p-5 shadow-[0_8px_18px_rgba(10,18,35,0.06)]">
      <h2 className="text-lg font-semibold text-[#08253a]">Progress Tender</h2>

      <div className="mt-4 inline-flex w-full items-center gap-2 rounded-xl bg-[#f8e4e4] px-3 py-2 text-sm text-[#ef4444]">
        <Icon name="alert" className="h-4 w-4" />
        <span className="font-semibold">SLA Terlewat!</span>
        <span>{alertText.replace("SLA Terlewat! ", "")}</span>
      </div>

      <div className="mt-5">
        <StagesTrack stages={mappedStages} showDates={showDates} />
      </div>
    </article>
  );
}

export default TenderProgressCard;
