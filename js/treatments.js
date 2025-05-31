const treatments = [
  {
    title: "Extração Dentária",
    description: "Procedimento realizado com técnicas modernas e minimamente invasivas para remoção de dentes comprometidos, garantindo conforto e rápida recuperação."
  },
  {
    title: "Protocolo sobre Implante",
    description: "Solução completa para reabilitação de arcadas totais com implantes, proporcionando uma prótes e fixa e funcional em menor tempo."
  },
  {
    title: "Enxerto ósseo",
    description: "Procedimento para recuperação de volume ósseo necessário para a colocação de implantes utilizando técnicas avançadas e materiais biocompatíveis."
  },
  {
    title: "Overdenture",
    description: "Prótese removível sobre implantes para maior conforto e estabilidade, ideal para pacientes que buscam uma solução mais segura que as próteses convencionais."
  },
  {
    title: "Clareamento",
    description: "Tratamento estético para deixar seus dentes mais brancos e brilhantes, utilizando produtos de alta qualidade e técnicas seguras para resultados naturais."
  },
  {
    title: "Restaurações com Resina Composta",
    description: "Recuperação estética e funcional com materiais de alta qualidade, devolvendo a aparência natural dos dentes com resultados duradouros."
  },
  {
    title: "Periodontia",
    description: "Tratamento especializado para saúde das gengivas e estruturas de suporte, prevenindo e tratando doenças que afetam os tecidos ao redor dos dentes."
  },
  {
    title: "Limpeza Dentária",
    description: "Remoção de placa bacteriana e tártaro para prevenção de doenças, mantendo a saúde bucal e o frescor do hálito com procedimentos indolores."
  },
  {
    title: "Placa de Bruxismo",
    description: "Dispositivo personalizado para proteção dos dentes contra o desgaste causado pelo ranger noturno,proporcionando alívio e preservação da estrutura dental."
  }, 
  {
    title: "Raspagem Subgengival",
    description: "Limpeza profunda abaixo da linha da gengiva para tratar periodontite, removendo bactérias e depósitos que causam inflamação e perda óssea."
  },
  {
    title: "Aumento de Coroa Clínica",
    description: "Procedimento cirúrgico para expor mais estrutura dental, necessário para tratam restauradores ou para melhorar a estética do sorriso."
  },
  {
    title: "Gengivectomia",
    description: "Remodelação do contorno gengival para melhorar a estética do sorriso, corrigindo o excesso de tecido gengival que pode cobrir parte dos dentes."
  },
  {
    title: "Gengivoplastia",
    description: "Correção estética da gengiva para um sorriso mais harmonioso, remodelando o tecido gengival para proporcionar contornos mais naturais e simétricos."
  },
  
]


// testimonial 
const containerTestimonials = document.querySelector(".treatments-grid")

treatments.forEach(treatment => {
    const div = document.createElement("div")
    div.classList.add("treatment-item")

    div.innerHTML = `
       <div>
          <h4 class="uppercase-bold">${treatment.title}</h4>
          <p>${treatment.description}</p>
        </div>
        `;

    containerTestimonials.appendChild(div)
})