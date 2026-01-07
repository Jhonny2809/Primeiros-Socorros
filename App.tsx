
import React, { useState, useEffect, useMemo } from 'react';
import { 
  CheckCircle, 
  Clock, 
  FileText, 
  Edit3, 
  Presentation, 
  ShieldCheck, 
  ArrowRight,
  AlertCircle,
  PlayCircle,
  Download,
  Star
} from 'lucide-react';

// --- DEFINIÇÃO VISUAL (DESIGN SYSTEM) ---
const COLORS = {
  primary: '#D32F2F',    // Vermelho (Atenção/Saúde)
  background: '#FFFFFF', // Branco (Limpeza/Clínico)
  accent: '#FFD700',     // Amarelo Maranata
  textDark: '#1A202C',   // Texto principal
};

const BASE_BUY_LINK = "https://pay.wiapy.com/_80A9snJYg";
const LOGO_URL = "https://i.ibb.co/pBBNGBLx/Logo.png";

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Função para garantir que todos os parâmetros de URL sejam passados para o checkout
  const getFinalBuyLink = useMemo(() => {
    if (typeof window === 'undefined') return BASE_BUY_LINK;
    const search = window.location.search;
    if (!search) return BASE_BUY_LINK;
    
    const separator = BASE_BUY_LINK.includes('?') ? '&' : '?';
    const cleanSearch = search.startsWith('?') ? search.substring(1) : search;
    
    return `${BASE_BUY_LINK}${separator}${cleanSearch}`;
  }, []);

  const carouselImages = [
    {
      title: "Capa Impactante",
      desc: "Design profissional que prende a atenção dos seus Desbravadores desde o primeiro minuto.",
      url: "https://i.ibb.co/kgfTyK19/1.png"
    },
    {
      title: "Didática Facilitada",
      desc: "Slides de 'Estado de Choque' com fluxogramas simples para fácil entendimento.",
      url: "https://i.ibb.co/fzQdzDP4/2.png"
    },
    {
      title: "Ilustração Prática",
      desc: "Passo a passo visual de Bandagens e Curativos sem imagens 'fortes' ou nojentas.",
      url: "https://i.ibb.co/chRPVh8M/3.png"
    },
    {
      title: "Prova Pronta",
      desc: "Avaliação completa seguindo os requisitos da DSA. É só imprimir!",
      url: "https://i.ibb.co/xt7yMnhG/4.png"
    },
    {
      title: "Gabarito Direto",
      desc: "Facilidade total para o instrutor: Gabaritos prontos para correção rápida.",
      url: "https://i.ibb.co/ZRHL4wZw/5.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Função para rolagem suave manual caso o âncora nativo falhe por interferência de scripts
  const handleScrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Paramos a propagação para evitar que scripts de rastreamento externos 
    // tentem ler o elemento React e causem erro de estrutura circular
    e.stopPropagation(); 
    const target = document.getElementById('comprar');
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Nav */}
      <nav className="bg-white border-b py-3 px-6 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="DBV Novaera Logo" className="h-10 md:h-12 w-auto object-contain" />
            <span className="font-bold text-xl tracking-tighter uppercase text-gray-900">
              DBV <span className="text-red-600">Novaera</span>
            </span>
          </div>
          <a 
            href="#comprar"
            onClick={handleScrollToOffer}
            className="hidden md:flex bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-all text-sm uppercase items-center justify-center no-underline cursor-pointer"
          >
            Baixar Agora
          </a>
        </div>
      </nav>

      {/* SEÇÃO 1: HERO SECTION */}
      <section className="bg-white pt-16 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-bold uppercase mb-6 tracking-wide">
            Especialidade DSA 100% Completa
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 px-4">
            Sua Aula de <span className="text-red-600 underline">Primeiros Socorros</span> Pronta em 5 Minutos!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto px-4">
            Material visual premium, 100% editável e alinhado aos requisitos da DSA. Pare de sofrer montando slides e foque em investir na vida dos seus Desbravadores.
          </p>
          
          <div className="mb-12 px-2">
             <div className="bg-gray-50 rounded-3xl w-full max-w-3xl mx-auto border-4 border-red-600 shadow-2xl overflow-hidden relative aspect-[3/4] md:aspect-video flex items-center justify-center">
                <img 
                  src="https://i.ibb.co/qMrtwhh6/Primeiros-socorros.png" 
                  alt="Capa do Kit Primeiros Socorros" 
                  className="w-full h-full object-contain p-2 md:p-6" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent pointer-events-none"></div>

                <div className="absolute bottom-6 right-6 z-10 hidden md:block">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-red-100 shadow-xl">
                    <div className="flex gap-3 items-center">
                      <div className="bg-red-600 p-2 rounded-lg">
                        <Presentation className="text-white" size={24} />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-black text-gray-900 uppercase leading-tight tracking-wider">Kit Completo</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase">Slides • Provas • Gabarito</p>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
             <div className="mt-4 text-xs text-gray-400 font-bold uppercase tracking-widest italic">
               Material 100% editável no PowerPoint pela DBV Novaera
             </div>
          </div>

          <a 
            href="#comprar" 
            onClick={handleScrollToOffer}
            className="bg-[#FFD700] hover:bg-[#E6C200] text-gray-900 font-black py-5 md:py-6 px-10 md:px-14 rounded-2xl text-lg md:text-2xl shadow-xl transform transition-all hover:scale-105 flex items-center gap-4 mx-auto uppercase no-underline max-w-fit cursor-pointer"
          >
            Quero Baixar Minha Aula Agora
            <ArrowRight size={24} />
          </a>
        </div>
      </section>

      {/* SEÇÃO 2: O PROBLEMA */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug text-red-500">
                Cansado da "Correria do Sábado à Noite" tentando montar aula?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <AlertCircle className="text-red-500 shrink-0" size={28} />
                  <p className="text-lg text-gray-300">
                    Gastar horas no Google buscando imagens que não sejam "nojentas" ou complexas demais para crianças.
                  </p>
                </div>
                <div className="flex gap-4">
                  <AlertCircle className="text-red-500 shrink-0" size={28} />
                  <p className="text-lg text-gray-300">
                    O trabalho chato de digitar provas e conferir cada requisito manual da DSA.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700">
              <p className="italic text-gray-400 mb-6 font-light text-lg">"Maranata, líder! Eu sei como é... o tempo é curto e você quer dar o seu melhor para seus desbravadores. Esse material nasceu para te salvar."</p>
              <div className="flex items-center gap-4">
                <img src={LOGO_URL} alt="DBV Novaera" className="w-12 h-12 object-contain" />
                <div>
                  <p className="font-bold">Equipe DBV Novaera</p>
                  <p className="text-sm text-gray-500 italic">Soluções para o Clube</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: CARROSSEL */}
      <section className="py-20 px-6 bg-white overflow-hidden text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Dê uma espiada no material:</h2>
        <div className="max-w-4xl mx-auto relative group">
          <div className="aspect-video rounded-3xl overflow-hidden bg-gray-100 shadow-2xl relative border-2 border-gray-100">
            {carouselImages.map((img, idx) => (
              <div 
                key={idx} 
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <img src={img.url} alt={img.title} className="w-full h-full object-contain bg-white" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-6 md:p-10 text-white text-left">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">{img.title}</h3>
                  <p className="text-sm md:text-lg text-gray-200">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {carouselImages.map((_, idx) => (
              <button 
                key={idx} 
                onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-red-600 w-8' : 'bg-gray-300'} cursor-pointer`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: O QUE ESTÁ INCLUSO */}
      <section className="py-20 px-6 bg-gray-50 border-y">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 underline decoration-red-600 underline-offset-8 uppercase tracking-tight">O que você recebe no Kit:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-red-600">
              <Presentation className="text-red-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">35 Slides Premium</h3>
              <p className="text-gray-600 text-sm">Design moderno focado em prender a atenção das crianças e adolescentes.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-red-600">
              <FileText className="text-red-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">Prova & Gabarito</h3>
              <p className="text-gray-600 text-sm">Avaliação pronta seguindo os requisitos oficiais da DSA.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-red-600">
              <Edit3 className="text-red-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">100% Editável</h3>
              <p className="text-gray-600 text-sm">Altere cores, textos ou adicione o logo do seu Clube no PowerPoint.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 & 6: OFERTA IRRESISTÍVEL */}
      <section id="comprar" className="py-16 md:py-24 px-4 md:px-6 bg-white text-center scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
            Invista em seu desbravador hoje!
          </h2>
          
          <div className="bg-red-50 border-2 border-dashed border-red-200 rounded-[2.5rem] p-6 md:p-12 mb-10 shadow-inner">
            <p className="text-sm md:text-lg text-gray-500 mb-4 uppercase font-bold tracking-[0.2em]">Preço Especial</p>
            
            <div className="flex flex-col items-center justify-center gap-1 mb-8">
              <span className="text-2xl md:text-4xl text-gray-400 line-through font-medium opacity-60">R$ 29,90</span>
              <div className="flex items-center gap-2">
                <span className="text-6xl md:text-8xl font-black text-red-600 tracking-tight">R$ 5,00</span>
              </div>
            </div>

            <p className="text-lg md:text-2xl font-bold text-gray-800 mb-8 px-2 leading-snug">
              "Custa menos que um <span className="text-red-600 block md:inline underline decoration-wavy underline-offset-4">salgado na cantina do campori</span>!"
            </p>

            <p className="text-sm md:text-lg text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed font-light">
              O tempo economizado vale muito mais. Garanta uma aula de excelência e foque no que importa: <strong>ser um líder mentor</strong>.
            </p>

            <div className="px-2 md:px-0">
              <a 
                href={getFinalBuyLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full bg-[#FFD700] hover:bg-[#E6C200] active:scale-95 text-gray-900 font-black py-5 md:py-8 px-6 md:px-8 rounded-2xl md:rounded-[40px] shadow-2xl transition-all flex flex-col items-center justify-center gap-2 uppercase cursor-pointer group no-underline decoration-transparent"
              >
                <div className="flex items-center justify-center gap-3 md:gap-5 w-full">
                  <Download size={24} className="md:w-12 md:h-12 shrink-0" />
                  <span className="text-lg md:text-4xl leading-[1.1] text-center">
                    Quero Baixar Minha Aula Agora
                  </span>
                </div>
                <p className="text-[10px] md:text-base font-semibold normal-case opacity-70 tracking-normal italic leading-tight">
                  Acesso imediato pela DBV Novaera após a confirmação
                </p>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 text-left max-w-2xl mx-auto px-4 md:px-0">
            <div className="flex gap-4 items-start">
              <ShieldCheck className="text-green-600 shrink-0" size={32} md:size={48} />
              <div>
                <h4 className="font-bold text-lg leading-tight mb-1">Garantia Maranata</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Se o material não for útil, devolvemos seu dinheiro em 7 dias.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
              <PlayCircle className="text-blue-600 shrink-0" size={32} md:size={48} />
              <div>
                <h4 className="font-bold text-lg leading-tight mb-1">Suporte ao Líder</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Dúvidas? Nossa equipe está pronta para te ajudar via campo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-500 py-12 px-6 border-t border-gray-800 text-center">
        <div className="flex justify-center mb-6">
           <img src={LOGO_URL} alt="DBV Novaera Logo" className="h-14 md:h-20 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
        </div>
        <p className="mb-4 text-sm md:text-base">© 2024 DBV Novaera - Feito por quem ama o lenço amarelo.</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] md:text-xs uppercase tracking-widest font-bold">
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
