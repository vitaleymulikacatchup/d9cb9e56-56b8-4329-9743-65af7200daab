use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

const navItems = [
  { name: "Hero", id: "hero" },
  { name: "About", id: "about" },
  { name: "How to Buy", id: "how-to-buy" },
  { name: "Tokenomics", id: "tokenomics" },
  { name: "Footer", id: "footer" },
];

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={40}
          navItems={navItems}
          buttonText="Get started"
          onButtonClick={() => console.log('Get started clicked')}
          className="sticky top-0"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <VoidHero
          title="Welcome to Xeven"
          description="Delivering solutions with a futuristic approach."
          tagLabel="Innovative"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="Xeven Solutions is at the forefront of technology, offering innovative approaches to complex challenges."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="reveal"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Our Tokenomics"
          description="Transparency and efficiency in all aspects."
          kpiItems={[
            { value: "100M", description: "Total Supply", longDescription: "The maximum supply of our tokens.", icon: null },
            { value: "10M", description: "Circulating Supply", longDescription: "How many tokens are currently in circulation.", icon: null }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Solutions Logo"
          logoText="Xeven"
          columns={[
            { items: [{ label: 'Privacy Policy', onClick: () => console.log('Privacy Policy') }, { label: 'Terms of Service', onClick: () => console.log('Terms of Service') }] },
            { items: [{ label: 'Contact Us', onClick: () => console.log('Contact Us') }, { label: 'About Us', onClick: () => console.log('About Us') }] },
            { items: [{ label: 'Support', onClick: () => console.log('Support') }, { label: 'FAQ', onClick: () => console.log('FAQ') }] }
          ]}
          copyrightText="© 2024 Xeven Solutions"
          onPrivacyClick={() => console.log('Privacy Policy Clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}