import Icon from "../dashboard/IconInternal";

const statusClassMap = {
  approved: "border-[#97dbc8] bg-[#dcf7ef] text-[#0ea57a]",
  pending: "border-[#f4cf7a] bg-[#fff3da] text-[#de9c05]",
  rejected: "border-[#f4b4b4] bg-[#fee9e9] text-[#e14545]",
};

const statusLabelMap = {
  approved: "Approved",
  pending: "Pending",
  rejected: "Rejected",
};

function RegisteredVendorsCardInternal({ vendors }) {
  return (
    <article className="rounded-2xl border border-[#d9dde4] bg-[#f6f7f9] p-5 shadow-[0_8px_18px_rgba(10,18,35,0.06)]">
      <h3 className="inline-flex items-center gap-2 text-xl font-semibold text-[#08253a]">
        <Icon name="users" className="h-5 w-5" />
        Vendor Terdaftar ({vendors.length})
      </h3>

      <div className="mt-4 space-y-3">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className="flex items-center justify-between gap-3 rounded-xl border border-[#d9dde4] bg-[#f6f7f9] p-4"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[#e0e5ee] text-[#153c7a]">
                <Icon name="office" className="h-7 w-7" />
              </span>
              <div>
                <p className="text-2xl font-semibold leading-tight text-[#0f2431]">{vendor.companyName}</p>
                <p className="mt-1 text-sm text-[#60717e]">
                  {vendor.email}
                  <span className="mx-2">•</span>
                  {vendor.documentCount} dokumen
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`rounded-full border px-3 py-1 text-sm font-medium ${
                  statusClassMap[vendor.status] ?? statusClassMap.pending
                }`}
              >
                {statusLabelMap[vendor.status] ?? "Pending"}
              </span>

              {vendor.status === "pending" ? (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="grid h-7 w-7 place-items-center rounded-full border border-[#16b983] text-[#16b983]"
                  >
                    <Icon name="check" className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    className="grid h-7 w-7 place-items-center rounded-full border border-[#ef4444] text-[#ef4444]"
                  >
                    <Icon name="close" className="h-4 w-4" />
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default RegisteredVendorsCardInternal;
