import Layout from '@/components/ui/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Methods from '@/components/sections/Methods';
import ProblemGuide from '@/components/sections/ProblemGuide';
import Services from '@/components/sections/Services';
import PriceCalculator from '@/components/sections/PriceCalculator';
import Certificates from '@/components/sections/Certificates';
import Portfolio from '@/components/sections/Portfolio';
import Blog from '@/components/sections/Blog';
import GiftCertificate from '@/components/sections/GiftCertificate';
import Reviews from '@/components/sections/Reviews';
import FAQ from '@/components/sections/FAQ';
import LostAndFound from '@/components/sections/LostAndFound';
import Partners from '@/components/sections/Partners';
import Contacts from '@/components/sections/Contacts';
import InstagramFeed from '@/components/sections/InstagramFeed';
import JsonLdLocalBusiness from '@/components/ui/JsonLd';

export default function Home() {
  return (
    <Layout>
      <JsonLdLocalBusiness
        name="Кристина Лютик — Кинолог"
        description="Профессиональная дрессировка собак и коррекция поведения в Анапе. Онлайн-консультации." 
        url="https://kristina-dogtrainer.ru"
        telephone="+79001234567"
        email="kristina@dogtrainer.ru"
        address={{
          addressLocality: "Анапа",
          addressRegion: "Краснодарский край",
          addressCountry: "RU"
        }}
        geo={{
          latitude: "44.8935",
          longitude: "37.3174"
        }}
        image="/og-image.jpg"
        priceRange="$$"
        sameAs={[
          "https://t.me/kristina_dogtrainer",
          "https://instagram.com/kristina_dogtrainer",
          "https://vk.com/kristina_dogtrainer"
        ]}
      />
      <Hero />
      <About />
      <Methods />
      <ProblemGuide />
      <Services />
      <PriceCalculator />
      <Certificates />
      <Portfolio />
      <Blog />
      <GiftCertificate />
      <Reviews />
      <FAQ />
      <LostAndFound />
      <Partners />
      <Contacts />
      <InstagramFeed />
    </Layout>
  );
}
