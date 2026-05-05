import ProductDetailsView from "@/features/product/components/ProductDetailsView";
import { getProductIdFromSlug } from "@/features/product/lib/getProductIdFromSlug";
import { getProduct } from "@/features/product/services/product.api";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const id = getProductIdFromSlug(slug);

  const product = await getProduct(id);

  return <ProductDetailsView product={product.data} />;
}
