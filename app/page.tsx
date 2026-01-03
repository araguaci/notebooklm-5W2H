"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText, Video, Music, Image as ImageIcon,
  Download, ExternalLink, BookOpen, FileCheck, Link as LinkIcon, Notebook,
  Target, TrendingUp, Shield, AlertTriangle, Zap, Globe, Github, Heart,
  Share2, Facebook, Twitter, Linkedin, MessageCircle, Copy, Check
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- COMPONENTS ---

// 1. HERO SECTION
const Hero = () => (
  <section className="flex flex-col items-center justify-center pt-32 pb-20 px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-6"
    >
      <BookOpen size={14} /> Guia Prático NotebookLM
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-5xl md:text-8xl font-bold tracking-tighter text-center bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent"
    >
      5W2H <br /> Do Planejamento <br /> à Execução
    </motion.h1>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mt-6 text-gray-400 text-lg max-w-3xl text-center leading-relaxed space-y-3"
    >
      <p>
        Transforme suas ideias em ações concretas com a metodologia 5W2H.
        Este guia prático explora ferramentas estruturadas de gestão e planejamento estratégico.
      </p>
      <p>
        Aprenda a diferença entre o <strong className="text-indigo-400">5 Porquês</strong>, focado em investigar causas raiz,
        e o <strong className="text-cyan-400">5W2H</strong>, utilizado para elaborar planos de ação detalhados.
      </p>
      <p>
        Descubra como integrar essas ferramentas para transformar diagnósticos precisos em execuções estratégicas bem-sucedidas.
      </p>
    </motion.div>
  </section>
);

// 2. SOBRE A ANÁLISE 5W2H SECTION
const About5W2HSection = () => {
  const cards = [
    {
      title: "O Que é a Ferramenta 5W2H?",
      description: "Metodologia de planejamento e execução que funciona como um checklist detalhado de atividades, prazos e responsabilidades. Surgiu no Japão na década de 1950, desenvolvida por Taiichi Ohno e Eiji Toyoda no contexto do sistema de produção da Toyota.",
      icon: "📋"
    },
    {
      title: "As 7 Perguntas-Chave",
      description: "O método se baseia em responder sete perguntas essenciais: O quê? (What), Por quê? (Why), Quem? (Who), Onde? (Where), Quando? (When), Como? (How) e Quanto custará? (How much). Juntas, eliminam ambiguidades e criam um mapa claro para a ação.",
      icon: "❓"
    },
    {
      title: "Como Aplicar o 5W2H",
      description: "Processo em 4 passos: 1) Reunir a equipe e definir o objetivo, 2) Preencher a planilha respondendo às 7 perguntas, 3) Escolher a ferramenta (papel, planilha digital ou app), 4) Acompanhar, revisar e atualizar constantemente.",
      icon: "🚀"
    },
    {
      title: "Dicas de Ouro",
      description: "Seja específico e concreto, atribua responsabilidades individuais e defina prazos e custos realistas. Evite criar o plano sozinho, não acompanhar a execução e não revisar periodicamente. A disciplina na aplicação é fundamental.",
      icon: "💡"
    },
    {
      title: "5 Vantagens Principais",
      description: "1) Clareza e Foco, 2) Organização e Delegação, 3) Aumento da Eficiência, 4) Melhora na Tomada de Decisão, 5) Simplicidade e Versatilidade. A ferramenta se adapta a empresas de todos os portes e qualquer tipo de desafio.",
      icon: "⭐"
    },
    {
      title: "Origem e História",
      description: "Desenvolvida no contexto do toyotismo, o 5W2H foi criado para elevar a qualidade no processo de produção e evitar desperdícios. Continua sendo um pilar da gestão eficiente até hoje, transformando estratégias em ações práticas.",
      icon: "📚"
    }
  ];

  const conclusion = {
    title: "Conclusão: Transforme o Planejamento em Resultado",
    description: "O 5W2H é mais do que uma simples lista de tarefas; é uma ferramenta acessível e altamente eficaz que serve como a ponte entre a ideia e a ação efetiva. Ele oferece a estrutura necessária para transformar qualquer objetivo em um plano claro e executável. Lembre-se: um bom plano não é aquele que fica no papel, mas sim aquele que é executado com disciplina e ajustado com inteligência."
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Sobre a Análise 5W2H
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Conheça os fundamentos, aplicação e benefícios desta poderosa ferramenta de planejamento estratégico
        </p>
      </motion.div>

      {/* 6 Cards em Grid 3x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-3xl bg-white/[0.02] border border-white/10 p-6 hover:border-indigo-500/50 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Card de Conclusão - Largura Total */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="rounded-3xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 p-8"
      >
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-3xl">✨</span>
          {conclusion.title}
        </h3>
        <p className="text-gray-300 text-base leading-relaxed">{conclusion.description}</p>
      </motion.div>
    </section>
  );
};

// 3. MATERIALS SECTION
const MaterialCard = ({
  title,
  description,
  type,
  file,
  icon,
  delay,
  notebookUrl,
  tags
}: {
  title: string;
  description: string;
  type: "document" | "video" | "audio" | "image";
  file: string;
  icon: React.ReactNode;
  delay: number;
  notebookUrl?: string;
  tags?: string[];
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTypeColor = () => {
    switch (type) {
      case "document": return "from-indigo-500/20 to-purple-500/20";
      case "video": return "from-red-500/20 to-pink-500/20";
      case "audio": return "from-green-500/20 to-emerald-500/20";
      case "image": return "from-blue-500/20 to-cyan-500/20";
      default: return "from-gray-500/20 to-gray-600/20";
    }
  };

  // Verificar se é um arquivo markdown
  const isMarkdown = file.endsWith('.md');
  const fileSlug = isMarkdown ? file.replace('.md', '') : null;
  const viewUrl = isMarkdown ? `/markdown/${fileSlug}` : `/${file}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl bg-white/[0.02] border border-white/10 p-6 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor()} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
            {icon}
          </div>
          {isMarkdown ? (
            <Link
              href={viewUrl}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <ExternalLink size={18} className="text-gray-400" />
            </Link>
          ) : (
            <a
              href={`/${file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              onClick={(e) => {
                if (type === "image") {
                  e.preventDefault();
                  window.open(`/${file}`, "_blank");
                }
              }}
            >
              <ExternalLink size={18} className="text-gray-400" />
            </a>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <a
            href={`/${file}`}
            download
            className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-lg text-sm font-medium transition-colors"
          >
            <Download size={16} />
            Baixar
          </a>
          {isMarkdown ? (
            <Link
              href={viewUrl}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg text-sm font-medium transition-colors"
            >
              <FileText size={16} />
              Ver Formatado
            </Link>
          ) : (
            <a
              href={`/${file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg text-sm font-medium transition-colors"
            >
              <ExternalLink size={16} />
              Abrir
            </a>
          )}
          {notebookUrl && (
            <a
              href={notebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg text-sm font-medium transition-colors"
              title="Abrir no NotebookLM"
            >
              <LinkIcon size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

interface Material {
  id: string;
  title: string;
  description: string;
  type: "document" | "video" | "audio" | "image";
  file: string;
  category: string;
  notebookUrl?: string;
  tags?: string[];
}

const MaterialsSection = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/materials.json")
      .then((res) => res.json())
      .then((data) => {
        setMaterials(data.materials || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar materiais:", err);
        setLoading(false);
      });
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText size={24} />;
      case "video":
        return <Video size={24} />;
      case "audio":
        return <Music size={24} />;
      case "image":
        return <ImageIcon size={24} />;
      default:
        return <FileCheck size={24} />;
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Materiais Disponíveis
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore guias práticos, infográficos, vídeos e áudios sobre metodologias 5W2H e 5 Porquês
        </p>
      </motion.div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-400"></div>
          <p className="mt-4 text-gray-400">Carregando materiais...</p>
        </div>
      ) : materials.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400">Nenhum material encontrado.</p>
          <p className="text-gray-500 text-sm mt-2">
            Adicione materiais editando o arquivo <code className="bg-white/5 px-2 py-1 rounded">public/materials.json</code>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Ou use o comando: <code className="bg-white/5 px-2 py-1 rounded">npm run add-material</code>
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material, index) => (
            <MaterialCard
              key={material.id}
              title={material.title}
              description={material.description}
              type={material.type}
              file={material.file}
              icon={getIcon(material.type)}
              delay={index * 0.1}
              notebookUrl={material.notebookUrl}
              tags={material.tags}
            />
          ))}
        </div>
      )}
    </section>
  );
};

// 4. MEDIA PREVIEW SECTION
const MediaPreview = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/materials.json")
      .then((res) => res.json())
      .then((data) => {
        setMaterials(data.materials || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar materiais:", err);
        setLoading(false);
      });
  }, []);

  const videos = materials.filter((m) => m.type === "video");
  const audios = materials.filter((m) => m.type === "audio");
  const images = materials.filter((m) => m.type === "image");

  if (loading) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Visualizações
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Video Players */}
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-3xl bg-white/[0.02] border border-white/10 p-6 overflow-hidden"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Video size={24} className="text-red-400" />
              {video.title}
            </h3>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black/20">
              <video
                controls
                className="w-full h-full"
                src={`/${video.file}`}
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </motion.div>
        ))}

        {/* Audio Players */}
        {audios.map((audio, index) => (
          <motion.div
            key={audio.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (videos.length + index) * 0.1 }}
            className="rounded-3xl bg-white/[0.02] border border-white/10 p-6"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Music size={24} className="text-green-400" />
              {audio.title}
            </h3>
            <div className="relative rounded-xl overflow-hidden bg-black/20 p-4">
              <audio
                controls
                className="w-full"
                src={`/${audio.file}`}
              >
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>
          </motion.div>
        ))}

        {/* Image Previews */}
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (videos.length + audios.length + index) * 0.1 }}
            className="lg:col-span-3 rounded-3xl bg-white/[0.02] border border-white/10 p-6"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <ImageIcon size={24} className="text-blue-400" />
              {image.title}
            </h3>
            <div className="relative w-full h-[600px] rounded-xl overflow-hidden bg-black/20">
              <Image
                src={`/${image.file}`}
                alt={image.title}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// 5. SHARE SECTION
const ShareSection = () => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const shareTitle = "📋 5W2H: Transforme suas ideias em ações concretas com metodologias de planejamento estratégico";
  const shareText = "Explore todos os materiais e artefatos gerados pelo Google NotebookLM sobre Análise 5W2Hs.";

  const getShareUrl = (url: string) => {
    if (!mounted || !url) {
      return "#";
    }
    return url;
  };

  const handleCopyLink = async () => {
    if (!mounted || !currentUrl) return;
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  const handleShare = async () => {
    if (!mounted || !currentUrl || typeof navigator === "undefined" || !navigator.share) return;
    try {
      await navigator.share({
        title: shareTitle,
        text: shareText,
        url: currentUrl,
      });
    } catch (err) {
      console.log("Compartilhamento cancelado");
    }
  };

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-500/10",
      getHref: () => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl || "")}`,
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "hover:text-cyan-400",
      bgColor: "hover:bg-cyan-500/10",
      getHref: () => `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(currentUrl || "")}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/10",
      getHref: () => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl || "")}`,
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-500/10",
      getHref: () => `https://wa.me/?text=${encodeURIComponent(shareTitle + " " + (currentUrl || ""))}`,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Compartilhe este Conteúdo
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Ajude outros a descobrirem este recurso sobre Análise 5W2H
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {shareLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              href={mounted ? link.getHref() : "#"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!mounted) {
                  e.preventDefault();
                }
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.02] border border-white/10 ${link.color} ${link.bgColor} transition-all duration-300 hover:border-current`}
            >
              <Icon size={20} />
              <span className="font-medium">{link.name}</span>
            </motion.a>
          );
        })}

        {mounted && typeof navigator !== "undefined" && navigator.share && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: shareLinks.length * 0.1 }}
            onClick={handleShare}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.02] border border-white/10 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 hover:border-indigo-500/50"
          >
            <Share2 size={20} />
            <span className="font-medium">Compartilhar</span>
          </motion.button>
        )}

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: (shareLinks.length + 1) * 0.1 }}
          onClick={handleCopyLink}
          disabled={!mounted}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.02] border border-white/10 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 hover:border-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {copied ? (
            <>
              <Check size={20} />
              <span className="font-medium">Copiado!</span>
            </>
          ) : (
            <>
              <Copy size={20} />
              <span className="font-medium">Copiar Link</span>
            </>
          )}
        </motion.button>
      </div>
    </section>
  );
};

// 6. FOOTER
const Footer = () => (
  <footer className="border-t border-white/10 pt-20 pb-10 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
        📋5W2H: Guia Prático
      </h3>
      <p className="text-gray-400 mb-6 text-sm">
        Transforme suas ideias em ações concretas com metodologias de planejamento estratégico
      </p>
      <p className="text-gray-500 text-xs mb-4">
        Materiais gerados pelo <a href="https://notebooklm.google.com/notebook/b7c32ecc-f087-4cfc-899f-123715afc7e5" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">Google NotebookLM</a>
      </p>
      <div className="border-t border-white/5 pt-6 mt-6">
        <p className="text-gray-500 text-xs mb-2">
          Baseado no template{" "}
          <a href="https://github.com/araguaci/notebooklm-showcase" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">
            notebooklm-showcase
          </a>
        </p>
        <p className="text-gray-500 text-xs">
          Criado por{" "}
          <a href="https://github.com/araguaci" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">
            @araguaci
          </a>
          {" "}by{" "}
          <a href="https://artesdosul.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
            @artesdosul
          </a>
        </p>
      </div>
      <p className="text-gray-500 text-xs mt-4">
        © {new Date().getFullYear()} - Template open source para a comunidade
      </p>
    </div>
  </footer>
);

// --- MAIN PAGE ---
export default function Page() {
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30">
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <About5W2HSection />
        <MaterialsSection />
        <MediaPreview />
        <ShareSection />
        <Footer />
      </div>
    </div>
  );
}

