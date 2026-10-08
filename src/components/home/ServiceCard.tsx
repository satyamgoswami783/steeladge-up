import Link from "next/link";
import { ArrowRight, Building2, ClipboardCheck, Armchair, HardHat, Utensils, Store, Baby, Stethoscope, Briefcase, Hammer } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = (iconName: Service["iconName"]) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-8 h-8 text-brand-teal" />;
      case "ClipboardCheck":
        return <ClipboardCheck className="w-8 h-8 text-brand-teal" />;
      case "Armchair":
        return <Armchair className="w-8 h-8 text-brand-teal" />;
      case "HardHat":
        return <HardHat className="w-8 h-8 text-brand-teal" />;
      case "Utensils":
        return <Utensils className="w-8 h-8 text-brand-teal" />;
      case "Store":
        return <Store className="w-8 h-8 text-brand-teal" />;
      case "Baby":
        return <Baby className="w-8 h-8 text-brand-teal" />;
      case "Stethoscope":
        return <Stethoscope className="w-8 h-8 text-brand-teal" />;
      case "Briefcase":
        return <Briefcase className="w-8 h-8 text-brand-teal" />;
      case "Hammer":
        return <Hammer className="w-8 h-8 text-brand-teal" />;
      default:
        return <Building2 className="w-8 h-8 text-brand-teal" />;
    }
  };

  return (
    <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between h-full group hover:border-brand-teal hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      {/* Top architectural teal accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div>
        {/* Icon box */}
        <div className="w-14 h-14 bg-brand-light border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-brand-teal/10 group-hover:border-brand-teal/30 transition-colors">
          {getIcon(service.iconName)}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-brand-dark tracking-tight uppercase leading-snug mb-3 group-hover:text-brand-teal transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-brand-muted leading-relaxed mb-6 font-normal">
          {service.description}
        </p>
      </div>

      {/* CTA link */}
      <div className="pt-4 border-t border-slate-100">
        <Link
          href={`/services/${service.slug}/`}
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-teal uppercase group-hover:text-brand-accent transition-colors"
        >
          <span>LEARN MORE</span>
          <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
