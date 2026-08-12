import { Scale, BookOpen, Database, Sparkles, Phone } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTAButton } from '@/components/shared/CTAButton';
import { cn } from '@/lib/utils';

interface Product {
  name: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  description: string;
}

const products: Product[] = [
  {
    name: 'ReconcileAI',
    icon: Scale,
    description:
      'AI-powered reconciliation accelerator. Automates complex financial reconciliation workflows with intelligent exception handling.',
  },
  {
    name: 'KnowledgePulse',
    icon: BookOpen,
    description:
      'AI-driven internal knowledge resource accelerator. Makes institutional knowledge instantly searchable and actionable.',
  },
  {
    name: 'InsightBridge',
    icon: Database,
    description:
      'Legacy system knowledge extraction accelerator. Extracts and modernizes knowledge trapped in aging systems.',
  },
  {
    name: 'SyntheticEdge',
    icon: Sparkles,
    description:
      'Synthetic data generation accelerator. Generate realistic financial data for testing without compliance risk.',
  },
  {
    name: 'PromptLine',
    icon: Phone,
    description:
      'Conversational AI phone/text accelerator. Intelligent voice and text interfaces for financial services.',
  },
];

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const Icon = product.icon;
  return (
    <div
      className={cn(
        'bg-card border border-border rounded-xl p-6',
        'hover:-translate-y-1 transition-transform duration-200',
        'hover:border-primary/30'
      )}
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
    </div>
  );
}

export function ProductsCarousel() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Accelerators"
          title="AI-Powered Products Built for Fintech"
          subtitle="Production-ready accelerators that compress months of development into weeks"
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
          <div className="sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-2/3 lg:mx-auto">
            {products.slice(3).map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton href="/products/accelerators">View All Accelerators</CTAButton>
        </div>
      </div>
    </section>
  );
}
