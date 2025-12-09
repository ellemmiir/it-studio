import Link from "next/link";
import { getActiveServices } from "../../model/api";
import {
  formatPriceRange,
  isDumpActive,
  formatDate,
} from "@/features/services/model/format";
import { Service } from "@/features/services/model/types";

export default async function ServicesPreview() {
  const activeServices = await getActiveServices();

  if (activeServices.length === 0) {
    return <NoServices />;
  }

  return (
    <section id="services" className="px-4 py-16">
      <div className="mx-auto max-w-380 pr-4">
        <div className="text-left">
          <h2 className="text-title mb-10 pl-4 text-5xl font-bold">Услуги</h2>
        </div>

        {/* Блок услуг */}
        <div>
          {activeServices.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const dumpActive = isDumpActive(service.priceDump.activeUntil);
  const currentPriceRange = dumpActive
    ? service.priceDump
    : service.pricePostDump;

  return (
    <Link href={`/services/${service.slug}`} className="group relative block">
      {/* Лейбл демпинга */}
      {dumpActive && <DumpLabel activeUntil={service.priceDump.activeUntil} />}

      <div className="border-grey-300 group-hover:bg-grey-200 border-b px-4 pt-18 pb-6 transition-colors duration-300">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          {/* Заголовок */}
          <div className="lg:col-span-4">
            <h3 className="text-title max-w-[90%] text-2xl font-bold">
              {service.title}
            </h3>
          </div>

          {/* Описание */}
          <div className="lg:col-span-5">
            <p className="text-grey-800 max-w-[95%]">{service.description}</p>
          </div>

          {/* Цены */}
          <PriceBlock
            dumpActive={dumpActive}
            marketPriceRange={service.marketPriceRange}
            currentPriceRange={currentPriceRange}
          />
        </div>
      </div>
    </Link>
  );
}

function DumpLabel({ activeUntil }: { activeUntil: string }) {
  return (
    <div className="absolute top-6 right-4 z-10">
      <div className="dumping opacity-75">
        <span className="rounded-md px-2 py-1 text-sm font-semibold text-black">
          Демпинг до {formatDate(activeUntil)}
        </span>
      </div>
    </div>
  );
}

interface PriceBlockProps {
  dumpActive: boolean;
  marketPriceRange: {
    min: number;
    max: number;
  };
  currentPriceRange: {
    min: number;
    max: number;
  };
}

function PriceBlock({
  dumpActive,
  marketPriceRange,
  currentPriceRange,
}: PriceBlockProps) {
  return (
    <div className="lg:col-span-3">
      <div className="space-y-4">
        <div className="border-grey-300 flex items-center justify-between border-b">
          <span className="text-grey-700 text-sm font-medium">Рынок:</span>
          <span className="text-grey-700 font-medium line-through">
            {formatPriceRange(marketPriceRange.min, marketPriceRange.max)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <h4 className="text-title text-lg font-semibold">
            {dumpActive ? "Акционная цена:" : "Наша цена:"}
          </h4>
          <span className="text-accent-600 group-hover:text-accent-700 text-xl font-bold transition-colors duration-300">
            {formatPriceRange(currentPriceRange.min, currentPriceRange.max)}
          </span>
        </div>
      </div>
    </div>
  );
}

function NoServices() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-380 px-4 text-left">
        <h2 className="text-title mb-10 text-5xl font-bold">Услуги</h2>
        <p className="text-grey-800 text-xl">Услуги временно недоступны</p>
      </div>
    </section>
  );
}
