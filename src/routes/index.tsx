import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Menu, Search, ShoppingCart, ArrowRight, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import heroAquarium from "@/assets/hero-aquarium.jpg";
import productShrimp from "@/assets/product-shrimp.jpg";
import productRotala from "@/assets/product-rotala.jpg";
import productTetra from "@/assets/product-tetra.jpg";
import productDragonstone from "@/assets/product-dragonstone.jpg";
import fishBlueEmperor from "@/assets/fish-blue-emperor.jpg";
import fishPeugeotTetra from "@/assets/fish-peugeot-tetra.jpg";
import fishFireAnt from "@/assets/fish-fire-ant.jpg";
import fishGreenNeon from "@/assets/fish-green-neon.jpg";

import catExoticFish from "@/assets/exotic-fish.webp";
import catDwarfShrimp from "@/assets/shrimps.webp";
import catLivePlants from "@/assets/live-plants.webp";
import catAquariumToys from "@/assets/Aquarium-toys.webp";
import catEcosystemCombos from "@/assets/ecosystem-combos.webp";
import userLoginImg from "@/assets/user-login.png";

const newArrivals = [
  { name: 'Blue Emperor "Super Blue" (Pair)', price: "Rs. 2,200.00", image: fishBlueEmperor },
  { name: "Peugeot Tetra Small (Pair)", price: "Rs. 4,500.00", image: fishPeugeotTetra },
  { name: "Fire Ant Tetra (Pair)", price: "Rs. 3,500.00", image: fishFireAnt },
  { name: 'Hyphessobrycon cf. melanostichtus "Green" (Pair)', price: "Rs. 2,500.00", image: fishGreenNeon },
  { name: 'Blue Emperor "Super Blue" (School)', price: "Rs. 6,000.00", image: fishBlueEmperor },
  { name: "Peugeot Tetra Large (Pair)", price: "Rs. 5,500.00", image: fishPeugeotTetra },
  { name: "Fire Ant Tetra (School)", price: "Rs. 9,500.00", image: fishFireAnt },
  { name: 'Green Neon Tetra (School)', price: "Rs. 1,500.00", image: fishGreenNeon },
  { name: 'Blue Emperor "Super Blue" (Breeding)', price: "Rs. 4,200.00", image: fishBlueEmperor },
  { name: "Peugeot Tetra Medium (Pair)", price: "Rs. 4,000.00", image: fishPeugeotTetra },
  { name: "Fire Ant Tetra (Jumbo)", price: "Rs. 4,500.00", image: fishFireAnt },
  { name: 'Green Neon Tetra (Breeding)', price: "Rs. 3,500.00", image: fishGreenNeon },
];

export const Route = createFileRoute("/")({
  component: Index,
});

const categories = [
  { n: "01", label: "Exotic Fish", img: catExoticFish },
  { n: "02", label: "Dwarf Shrimp", img: catDwarfShrimp },
  { n: "03", label: "Live Plants", img: catLivePlants },
  { n: "04", label: "Aquarium Toys", img: catAquariumToys },
  { n: "05", label: "Ecosystem Combos", img: catEcosystemCombos },
];

const products = [
  {
    id: "089",
    image: productShrimp,
    name: "Crystal Red Shrimp (SSS Grade)",
    price: "₹849",
    meta: "Caridina cf. cantonensis • Size: 1.2cm",
  },
  {
    id: "112",
    image: productRotala,
    name: "Rotala Rotundifolia 'Blood Red'",
    price: "₹299",
    meta: "Tissue Culture • Difficulty: Moderate",
  },
  {
    id: "042",
    image: productTetra,
    name: "Rummy Nose Tetra (Pack of 6)",
    price: "₹1,250",
    meta: "Hemigrammus rhodostomus • Active Schooling",
  },
  {
    id: "205",
    image: productDragonstone,
    name: "Premium Dragon Stone (5kg Pack)",
    price: "₹1,800",
    meta: "Inert Hardscape • Ph Neutral",
  },
];

const learningTopics = [
  { title: "Water Chemistry", meta: "Basics for Indian Tap Water" },
  { title: "Algae Control", meta: "The Amano approach" },
  { title: "CO2 Injection", meta: "Setup and Safety" },
  { title: "Fertilization", meta: "Micro and Macro Dosing" },
];

function Index() {
  const [visibleArrivals, setVisibleArrivals] = useState(4);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">


      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border px-6 py-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:flex md:justify-between">
        <div className="text-2xl font-display italic tracking-tight truncate hover:cursor-pointer">Best4Pets</div>
        <div className="hidden md:flex gap-8 items-center">
          {[
            {
              title: "Fish", links: ["Algae Eaters",
                "Angelfish",
                "Apistogramma",
                "Betta",
                "Barbs",
                "Cichlids",
                "Catfish",
                "Rare Fish",
                "Guppy",
                "Tetras",
                "Rainbowfish",
                "Rasbora",
                "Platy",
                "Ramirezi",
                "Nano Fish",
                "Arowana"]
            },
            { title: "Shrimps & Crabs", links: ["Neocaridina", "Caridina", "Vampire Crabs", "Snails"] },
            { title: "Aquatic Plants", links: ["Foreground", "Midground", "Background", "Floating"] },
            { title: "Terrarium", links: ["Plants", "Substrate", "Hardscape", "Kits"] },
            { title: "Accessories", links: ["Filters", "Lighting", "Heaters", "Tools"] },
            { title: "Learning Center", links: ["Beginner Guides", "Advanced Aquascaping", "Water Chemistry"] },
            { title: "Policies", links: ["Shipping", "Returns", "Live Arrival Guarantee"] }
          ].map((item) => (
            <div key={item.title} className="relative group">
              <a
                href={`#${item.title.toLowerCase().replace(/ /g, '-')}`}
                className="text-xs font-medium uppercase tracking-widest hover:text-primary transition-colors cursor-pointer"
              >
                {item.title}
              </a>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute top-full left-0 pt-2 z-50">
                <ul className="w-48 p-2 bg-background border border-border shadow-md rounded-md flex flex-col">
                  {item.links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${item.title.toLowerCase().replace(/ /g, '-')}`}
                        className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <div className="relative hidden sm:block group">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border border-border rounded-md pl-8 pr-4 py-1.5 text-xs focus:outline-none focus:border-primary/50 transition-all w-50 focus:w-50 placeholder:text-muted/50"
            />
            <svg
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted w-3.5 h-3.5 group-focus-within:text-primary transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <img src={userLoginImg} alt="User Login" className="hidden md:block w-7 h-7 bg-white rounded-full" />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Menu" className="p-1">
                  <Menu className="w-10 h-10" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="[&>button]:hidden bg-[#141315] text-white w-full border-none sm:max-w-md p-0 flex flex-col">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <SheetClose className="text-white/80 hover:text-white transition-colors">
                      <X className="w-6 h-6 stroke-[1.5]" />
                    </SheetClose>
                    <button
                      aria-label="Toggle search"
                      onClick={() => setMobileSearchOpen((v) => !v)}
                      className={`transition-colors ${mobileSearchOpen ? "text-white" : "text-white/80 hover:text-white"}`}
                    >
                      <Search className="w-6 h-6 stroke-[1.5]" />
                    </button>
                  </div>
                  <div className=" px-3 py-1 rounded text-white font-bold text-sm tracking-tight flex items-center gap-1">

                    <div className="text-2xl font-display italic tracking-tight truncate hover:cursor-pointer">Best4Pets</div>

                  </div>

                  <ShoppingCart className="w-6 h-6 text-white/80 stroke-[1.5]" />
                </div>

                {/* Mobile Search Box */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileSearchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                    } border-b border-white/10`}
                >
                  <div className="px-4 py-3 flex items-center gap-3">
                    <Search className="w-4 h-4 text-white/50 shrink-0" />
                    <input
                      autoFocus={mobileSearchOpen}
                      type="text"
                      placeholder="Search products..."
                      className="flex-1 bg-transparent text-white placeholder:text-white/40 text-sm outline-none"
                    />
                    <button
                      aria-label="Close search"
                      onClick={() => setMobileSearchOpen(false)}
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col px-4 py-2 overflow-y-auto">
                  <a href="#" className="flex items-center justify-between px-3 py-4 text-lg font-medium text-green-500 rounded-lg transition-all duration-150 hover:bg-white/10 hover:text-white active:bg-white/20 active:text-white border-b border-white/5">
                    Sale 🔥
                  </a>
                  <a href="#" className="flex items-center justify-between px-3 py-4 text-lg font-medium text-green-500 rounded-lg transition-all duration-150 hover:bg-white/10 hover:text-white active:bg-white/20 active:text-white border-b border-white/5">
                    Combo
                    <ArrowRight className="w-5 h-5 text-white/60 stroke-[1.5]" />
                  </a>
                  <a href="#livestock" className="flex items-center justify-between px-3 py-4 text-lg font-medium text-green-500 rounded-lg transition-all duration-150 hover:bg-white/10 hover:text-white active:bg-white/20 active:text-white border-b border-white/5">
                    Fish
                    <ArrowRight className="w-5 h-5 text-white/60 stroke-[1.5]" />
                  </a>
                  <a href="#aquascaping" className="flex items-center justify-between px-3 py-4 text-lg font-medium text-green-500 rounded-lg transition-all duration-150 hover:bg-white/10 hover:text-white active:bg-white/20 active:text-white border-b border-white/5">
                    Shrimps &amp; Crabs
                    <ArrowRight className="w-5 h-5 text-white/60 stroke-[1.5]" />
                  </a>
                  <a href="#equipment" className="flex items-center justify-between px-3 py-4 text-lg font-medium text-green-500 rounded-lg transition-all duration-150 hover:bg-white/10 hover:text-white active:bg-white/20 active:text-white border-b border-white/5">
                    Aquarium Plants
                    <ArrowRight className="w-5 h-5 text-white/60 stroke-[1.5]" />
                  </a>
                  <a href="#learning" className="flex items-center justify-between px-3 py-4 text-lg font-medium text-green-500 rounded-lg transition-all duration-150 hover:bg-white/10 hover:text-white active:bg-white/20 active:text-white border-b border-white/5">
                    Terrarium
                    <ArrowRight className="w-5 h-5 text-white/60 stroke-[1.5]" />
                  </a>
                  <a href="#learning" className="flex items-center justify-between px-3 py-4 text-lg font-medium text-green-500 rounded-lg transition-all duration-150 hover:bg-white/10 hover:text-white active:bg-white/20 active:text-white border-b border-white/5">
                    Accessories
                    <ArrowRight className="w-5 h-5 text-white/60 stroke-[1.5]" />
                  </a>
                  <a href="#learning" className="flex items-center justify-between px-3 py-4 text-lg font-medium text-green-500 rounded-lg transition-all duration-150 hover:bg-white/10 hover:text-white active:bg-white/20 active:text-white border-b border-white/5">
                    Learning Centre
                  </a>
                  <a href="#learning" className="flex items-center justify-between px-3 py-4 text-lg font-medium text-green-500 rounded-lg transition-all duration-150 hover:bg-white/10 hover:text-white active:bg-white/20 active:text-white">
                    Policies
                    <ArrowRight className="w-5 h-5 text-white/60 stroke-[1.5]" />
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[560px] flex items-end overflow-hidden border-b border-border">
        <img
          src={heroAquarium}
          alt="Lush ADA-style planted nature aquarium with schooling tetras"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="relative z-10 p-8 md:p-20 max-w-4xl animate-reveal">
          <h1 className="text-5xl md:text-7xl font-display italic text-balance mb-6 leading-[1.05]">
            The art of the <span className="text-primary">living</span> landscape.
          </h1>
          <p className="text-lg text-muted max-w-[50ch] mb-8 font-light">
            India's premier collection of rare aquatic flora, vibrant livestock, and
            professional-grade hardscape tools. Curated for the serious hobbyist.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all">
              Shop Collection
            </button>
            <button className="px-8 py-3 rounded-md border border-foreground/20 text-foreground font-medium text-sm hover:bg-foreground/5 transition-all">
              Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Category Tiles */}
      <section id="livestock" className="grid grid-cols-2 md:grid-cols-5 border-b border-border">
        {categories.map((c, i) => (
          <button
            key={c.n}
            className={`group relative aspect-square p-6 flex flex-col justify-end text-left overflow-hidden ${i !== categories.length - 1 ? "border-r border-border" : ""
              } ${i < categories.length - 2 ? "border-b md:border-b-0 border-border" : ""}`}
          >
            <img
              src={c.img}
              alt={c.label}
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="text-[10px] font-mono text-muted mb-2 drop-shadow-md">{c.n}</div>
              <div className="font-display italic text-xl group-hover:text-primary transition-colors drop-shadow-lg">
                {c.label}
              </div>
            </div>
          </button>
        ))}
      </section>

      {/* Featured Product Grid */}
      <section id="aquascaping" className="p-8 md:p-20">
        <div className="flex flex-wrap gap-4 justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-display italic mb-2">Current Arrivals</h2>
            <p className="text-muted text-sm">Freshly imported and quarantined stock.</p>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary">
            ● Live Arrival Guaranteed
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {products.map((p) => (
            <article key={p.id} className="bg-background p-6 group">
              <div className="relative aspect-square w-full bg-stone-900 mb-6 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 text-[9px] uppercase tracking-widest text-foreground/40 font-mono">
                  Item {p.id}
                </span>
              </div>
              <div className="flex justify-between items-start gap-3 mb-2">
                <h3 className="text-sm font-medium min-w-0">{p.name}</h3>
                <span className="font-mono text-xs text-primary shrink-0">{p.price}</span>
              </div>
              <p className="text-[11px] text-muted mb-4">{p.meta}</p>
              <button className="w-full py-2 border border-border rounded-md text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors">
                Add to Cart
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* New Arrivals - Vibrant Livestock */}
      <section className="bg-[#0a0909d3] text-white py-16 md:py-24 px-6 md:px-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary block mb-3">
                Just Landed
              </span>
              <h2 className="text-4xl md:text-5xl font-display italic">New Arrivals</h2>
            </div>
            <p className="text-white/60 text-sm max-w-sm">
              Vibrant, quarantined livestock — hand-picked and shipped with Live Arrival Guarantee.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 rounded-md">
            {newArrivals.slice(0, visibleArrivals).map((p) => (
              <article
                key={p.name}
                className="bg-[#3a0d7a] rounded-2xl overflow-hidden border border-white/10 flex flex-col group hover:border-white/30 transition-colors"
              >
                <div className="relative aspect-square bg-black overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button aria-label="Add to wishlist" className="size-8 rounded-full bg-black/40 backdrop-blur border border-white/20 grid place-items-center text-white/80 hover:text-primary transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                    </button>
                    <button aria-label="Quick view" className="size-8 rounded-full bg-black/40 backdrop-blur border border-white/20 grid place-items-center text-white/80 hover:text-primary transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                    </button>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-sm font-medium leading-snug hover:underline cursor-pointer min-h-[2.5rem]">
                    {p.name}
                  </h3>
                  <div className="font-mono text-sm text-white/90">{p.price}</div>
                  <button className="mt-2 w-full py-3 border border-white/40 rounded-md text-xs uppercase tracking-widest hover:bg-white hover:text-[#2a0a5e] transition-colors">
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center mt-12 gap-4">
            {visibleArrivals < newArrivals.length && (
              <button
                onClick={() => setVisibleArrivals(prev => Math.min(prev + 8, newArrivals.length))}
                className="px-8 py-3 bg-white text-[#2a0a5e] rounded-full text-xs uppercase tracking-widest font-medium hover:bg-white/90 transition-colors"
              >
                View more
              </button>
            )}
            {visibleArrivals > 4 && (
              <button
                onClick={() => setVisibleArrivals(4)}
                className="px-8 py-3 bg-white/10 border border-white/20 text-white rounded-full text-xs uppercase tracking-widest font-medium hover:bg-white/20 transition-colors"
              >
                View less
              </button>
            )}
          </div>
        </div>
      </section>



      {/* Learning Center Teaser */}
      <section id="learning" className="border-y border-border flex flex-col md:flex-row">
        <div className="md:w-1/2 p-12 md:p-24 border-b md:border-b-0 md:border-r border-border">
          <span className="text-[10px] font-mono text-primary mb-6 block uppercase tracking-widest">
            Knowledge Base
          </span>
          <h2 className="text-4xl font-display italic mb-6 leading-tight">
            The 'Walstad' Method: A Guide to Natural Tanks.
          </h2>
          <p className="text-muted mb-8 leading-relaxed">
            Learn how to create a self-sustaining ecosystem using soil substrate and heavy
            planting. Our master-class for Indian water conditions.
          </p>
          <a href="#" className="text-xs font-mono uppercase tracking-widest border-b border-primary pb-1">
            Read the Journal →
          </a>
        </div>
        <div className="md:w-1/2 bg-white/5 grid grid-cols-2">
          {learningTopics.map((t, i) => (
            <div
              key={t.title}
              className={`p-8 md:p-12 ${i % 2 === 0 ? "border-r border-border" : ""} ${i < 2 ? "border-b border-border" : ""
                }`}
            >
              <h4 className="font-display italic text-lg mb-2">{t.title}</h4>
              <p className="text-[11px] text-muted uppercase tracking-widest">{t.meta}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="equipment" className="p-12 md:p-20 bg-background text-foreground">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="text-3xl font-display italic mb-6">Best4Pets</div>
            <p className="text-muted text-sm max-w-sm mb-6">
              Elevating the Indian aquascaping hobby through quality, education, and ethical
              livestock sourcing.
            </p>
            <div className="flex gap-4">
              <div className="size-10 border border-border grid place-items-center text-xs font-mono">IG</div>
              <div className="size-10 border border-border grid place-items-center text-xs font-mono">YT</div>
              <div className="size-10 border border-border grid place-items-center text-xs font-mono">FB</div>
            </div>
          </div>
          <div>
            <h5 className="text-[10px] font-mono uppercase text-primary mb-6 tracking-widest">Shop</h5>
            <ul className="space-y-3 text-sm text-muted">
              <li className="hover:text-foreground cursor-pointer">Live Plants</li>
              <li className="hover:text-foreground cursor-pointer">Hardscape</li>
              <li className="hover:text-foreground cursor-pointer">Substrates</li>
              <li className="hover:text-foreground cursor-pointer">Maintenance</li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-mono uppercase text-primary mb-6 tracking-widest">Support</h5>
            <ul className="space-y-3 text-sm text-muted">
              <li className="hover:text-foreground cursor-pointer">Live Arrival Policy</li>
              <li className="hover:text-foreground cursor-pointer">Shipping Zones</li>
              <li className="hover:text-foreground cursor-pointer">Wholesale</li>
              <li className="hover:text-foreground cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] font-mono text-muted">© 2026 BEST4PETS INDIA PVT LTD</div>
          <div className="flex gap-6 text-[10px] font-mono text-muted uppercase">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
