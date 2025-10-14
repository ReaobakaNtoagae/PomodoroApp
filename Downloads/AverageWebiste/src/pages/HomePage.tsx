import { Hero } from '../components/Hero';
import { FeaturedCollections } from '../components/FeaturedCollections';
import { NewArrivals } from '../components/NewArrivals';
import { ForYou } from '../components/ForYou';
import { InstagramFeed } from '../components/InstagramFeed';
import { BrandStory } from '../components/BrandStory';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';

interface HomePageProps {
  onProductClick: (productId: number) => void;
  onShopClick: (category?: string) => void;
  onAboutClick: () => void;
}

export function HomePage({ onProductClick, onShopClick, onAboutClick }: HomePageProps) {
  return (
    <main>
      <Hero />
      <FeaturedCollections />
      <NewArrivals onProductClick={onProductClick} />
      <ForYou onProductClick={onProductClick} />
      <InstagramFeed />
      <BrandStory onLearnMore={onAboutClick} />
      <Newsletter />
      <Footer onAboutClick={onAboutClick} onShopClick={onShopClick} />
    </main>
  );
}
