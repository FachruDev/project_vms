function InternalStatCard({ title, value, helper }) {
  return (
    <article className="rounded-2xl border border-[#d8e0ef] bg-white p-4 shadow-sm">
      <p className="text-sm font-medium text-[#5f6f86]">{title}</p>
      <p className="mt-2 text-2xl font-bold text-[#153c7a]">{value}</p>
      <p className="mt-1 text-xs text-[#74839a]">{helper}</p>
    </article>
  );
}

export default InternalStatCard;