import ProductCard from "@/components/products/ProductCard";

const Index = () => {
    return (
        <div className="grid grid-cols-4 gap-8 my-12">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
};

export default Index;
