export default function ProductTabs({ product }: any) {
  return (
    <div className="mt-10">
      <h3 className="font-semibold mb-4">Description</h3>

      <p className="text-gray-600 leading-7">{product.description}</p>
    </div>
  );
}
