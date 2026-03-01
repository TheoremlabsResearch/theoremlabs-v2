import Image from 'next/image';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTAButton } from '@/components/shared/CTAButton';
import { cn } from '@/lib/utils';

interface Product {
  name: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    name: 'ReconcileAI',
    image: '/images/product-reconcile-ai.gif',
    description:
      'AI-powered reconciliation accelerator. Automates complex financial reconciliation workflows with intelligent exception handling.',
  },
  {
    name: 'KnowledgePulse',
    image: '/images/product-knowledge-pulse.gif',
    description:
      'AI-driven internal knowledge resource accelerator. Makes institutional knowledge instantly searchable and actionable.',
  },
  {
    name: 'InsightBridge',
    image: '/images/product-insight-bridge.gif',
    description:
      'Legacy system knowledge extraction accelerator. Extracts and modernizes knowledge trapped in aging systems.',
  },
  {
    name: 'SyntheticEdge',
    image: '/images/product-synthetic-edge.gif',
    description:
      'Synthetic data generation accelerator. Generate realistic financial data for testing without compliance risk.',
  },
  {
    name: 'PromptLine',
    image: '/images/product-prompt-line.gif',
    description:
      'Conversational AI phone/text accelerator. Intelligent voice and text interfaces for financial services.',
  },
];

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className={cn(
        'bg-[#1A2B45] border border-[#1E3A5F] rounded-xl p-6',
        'hover:-translate-y-1 transition-transform duration-200',
        'hover:border-[#F97316]/30'
      )}
    >
      <Image
        src={product.image}
        width={80}
        height={80}
        alt={product.name}
        className="object-contain mb-4"
        unoptimized
      />
      <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">{product.name}</h3>
      <p className="text-sm text-[#94A3B8] leading-relaxed">{product.description}</p>
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
          <div className="sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:w-2/3 lg:mx-auto">
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
