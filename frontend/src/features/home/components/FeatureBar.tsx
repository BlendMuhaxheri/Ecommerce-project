import { Truck, ShieldCheck, RefreshCcw, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "On all orders over $50",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    desc: "30-day return policy",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    desc: "100% protected checkout",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "We’re here to help anytime",
  },
];

export default function FeatureBar() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="flex items-center gap-3">
            <f.icon className="w-5 h-5 text-black" />
            <div>
              <p className="text-sm font-medium text-gray-900">{f.title}</p>
              <p className="text-xs text-gray-500">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
