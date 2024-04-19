import ProductCard from "@/components/products/ProductCard";

const Index = ({ products }) => {
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-cols-3 md:gap-6 sm:grid-cols-2 sm:ap-5 m-0">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Index;