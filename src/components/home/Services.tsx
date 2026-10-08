import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/home/ServiceCard";
import { servicesData } from "@/data/services";

export function Services() {
  // Display top 3 main services as shown in screenshot
  const featuredServices = servicesData.slice(0, 3);

  return (
    <section className="py-20 bg-brand-light relative bg-arch-grid-dark">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
