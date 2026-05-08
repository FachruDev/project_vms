import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import TopNavbarInternal from "../../components/internal/dashboard/TopNavbarInternal";
import TechnicalEvaluationHeaderInternal from "../../components/internal/evaluation/TechnicalEvaluationHeaderInternal";
import QuantitativeEvaluationFormInternal from "../../components/internal/evaluation/QuantitativeEvaluationFormInternal";
import QualitativeEvaluationFormInternal from "../../components/internal/evaluation/QualitativeEvaluationFormInternal";
import PriceNegotiationFormInternal from "../../components/internal/evaluation/PriceNegotiationFormInternal";
import EvaluationTenderInfoCardInternal from "../../components/internal/evaluation/EvaluationTenderInfoCardInternal";
import {
  selectInternalNotificationCount,
  selectInternalTechnicalEvaluation,
} from "../../features/internal/dashboard/internalDashboardSelectors";

function InternalTechnicalEvaluationPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("quantitative");
  const notificationCount = useSelector(selectInternalNotificationCount);
  const evaluation = useSelector(selectInternalTechnicalEvaluation);

  const renderActiveForm = () => {
    if (activeTab === "qualitative") {
      return (
        <QualitativeEvaluationFormInternal
          tabs={evaluation.tabs}
          activeTab={activeTab}
          onChangeTab={setActiveTab}
          rows={evaluation.qualitativeRows}
          vendorColumns={evaluation.vendorColumns}
        />
      );
    }

    if (activeTab === "price-negotiation") {
      return (
        <PriceNegotiationFormInternal
          tabs={evaluation.tabs}
          activeTab={activeTab}
          onChangeTab={setActiveTab}
          rows={evaluation.priceNegotiationRows}
        />
      );
    }

    return (
      <QuantitativeEvaluationFormInternal
        tabs={evaluation.tabs}
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        rows={evaluation.quantitativeRows}
        vendorColumns={evaluation.vendorColumns}
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#f1f2f5] text-[#172033]">
      <TopNavbarInternal notificationCount={notificationCount} />

      <main className="mx-auto w-full px-2 pb-6 pt-5 md:px-4">
        <TechnicalEvaluationHeaderInternal
          title="Evaluasi Teknis"
          tenderId={evaluation.tenderId}
          subtitle={evaluation.subtitle}
          status={evaluation.status}
          onBack={() => navigate(-1)}
        />

        <section className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.9fr)_minmax(320px,0.9fr)]">
          {renderActiveForm()}
          <EvaluationTenderInfoCardInternal tender={evaluation} />
        </section>
      </main>
    </div>
  );
}

export default InternalTechnicalEvaluationPage;
