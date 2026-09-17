import Image from "next/image";

export type Product = { id: number; name: string; series: string; category: string; sku: string; price: number; stock: number; img: string; desc: string };

export const products: Product[] = [
  { id: 1, name: "Lumière Flora Dress", series: "Premium Edit", category: "Premium", sku: "LS-LUM-001", price: 329000, stock: 8, img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=90", desc: "Dress floral lembut dengan potongan oversized untuk dipakai sepanjang hari." },
  { id: 2, name: "Oneset Bluefall", series: "Blue Fall Series", category: "One Set", sku: "LS-BF-OS-01", price: 90000, stock: 24, img: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&w=900&q=86", desc: "Set atasan dan bawahan santai dengan jatuh kain yang lembut." },
  { id: 3, name: "Dress Jumbo", series: "Blue Fall Series", category: "Dress", sku: "LS-BF-DJ-01", price: 89000, stock: 13, img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=90", desc: "Dress longgar dengan ruang ekstra dan siluet yang tetap rapi." },
  { id: 4, name: "Dress Gandul", series: "Blue Fall Series", category: "Dress", sku: "LS-BF-DG-XL", price: 95000, stock: 2, img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=900&q=86", desc: "Dress harian ringan dengan pilihan ukuran yang mudah disesuaikan." },
  { id: 5, name: "Aleya Home Dress", series: "Home Dress", category: "Dress", sku: "LS-ALE-01", price: 119000, stock: 17, img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=90", desc: "Home dress feminin dengan siluet ringan untuk sehari-hari." },
  { id: 6, name: "Iyla Home Dress", series: "Best Seller", category: "Dress", sku: "LS-IYL-02", price: 129000, stock: 11, img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=86", desc: "Best-selling dress with an easy flowing silhouette and soft finish." },
];
export const rupiah = (value: number) => `Rp ${new Intl.NumberFormat("id-ID").format(value)}`;
export const findProduct = (id: number) => products.find((product) => product.id === id)!;
export function ProductImage({ product, sizes = "(max-width: 640px) 100vw, 25vw", className = "" }: { product: Product; sizes?: string; className?: string }) {
  return <Image src={product.img} alt={product.name} fill sizes={sizes} className={`object-cover ${className}`} />;
}

