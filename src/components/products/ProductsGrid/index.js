import ProductCard from "@/components/products/ProductCard";

<<<<<<< HEAD
const Index = ({ products }) => {
    return (
        <div className="grid grid-cols-4 gap-8 my-12">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
=======
const Index = () => {
    return (
        <div className="grid grid-cols-4 gap-8 my-12">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
>>>>>>> c1aac64 (save wishlist)
        </div>
    );
};

export default Index;
