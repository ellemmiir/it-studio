import { Service } from "../../model/types";
interface Props {
  service: Service;
}

export const ServiceDetailed = ({ service }: Props) => {
  return (
    <article className="service-detailed">
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <div className="service-duration">
        Длительность: {service.priceDump.activeUntil}
      </div>
      {/* Детальный контент услуги */}
    </article>
  );
};
