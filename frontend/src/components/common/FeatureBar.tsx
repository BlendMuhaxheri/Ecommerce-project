import {
  Truck,
  ShieldCheck,
  RefreshCcw,
  Headphones,
  type LucideIcon,
} from "lucide-react";

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

type Props = {
  items: FeatureItem[];
};

export default function FeatureBar({ items }: Props) {
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-6 md:grid-cols-4">
        {items.map((feature) => {
          const Icon = feature.icon;

          return (
            <div key={feature.title} className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-black" />

              <div>
                <p className="text-sm font-medium text-gray-900">
                  {feature.title}
                </p>

                <p className="text-xs text-gray-500">{feature.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
