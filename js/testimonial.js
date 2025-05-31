const testimonials = [
  {
    name: "Ana Beatriz Rebello Ponde",
    description: "Eu gostaria de compartilha minha experiência com a Dra. Samantha Rodrigues. Desde a primeira consulta, fui extremamente bem atendida. A Dra. Samantha é uma profissíonal muito competente e atenciosa. Ela explicou cada etapa do tratamento de maneira clara e respondeu todas as minhas perguntas com paciência e precisão.",
  },
  {
    name: "Joana Fontenelle",
    description: "Excelente profissional!!! Ambiente acolhedor, atendimento humanizado, sempre tenho resultados incríveis nos procedimentos feitos pela Dra Samantha!"
  },
  {
    name: "Paula Caires Santos",
    description: "A Dr. Samantha é uma profissional excepcional. Além de muito profissional, nos faz sentir muito acolhido em todo o tratamento! Confio de olhos fechados."
  },
  {
    name: "Jaciara Ribeiro",
    description: "Samanhta é uma profissional muito calma, atenciosa e carinhosa e faz um trabalho impecável. Sem contar que o consultório é lindo e aconchegante."
  },
  {
    name: "Melissa Gesuele",
    description: "Profissional maravilhosa. Explica todo o tratamento antes do atendimento. Muito detalhista e competente. Recomendadíssima ❤️ ❤️ ❤️. Obrigada, Dra!"
  },
  {
    name: "Luis Rabello",
    description: "Dentista com muita experiência em periodontia e implantodotia. Estou muito satisfeito com os resultados do meu tratamento. Excelente atendimento e técnica. Recomendo."
  },
  {
    name: "Bianca Tauil",
    description: "Minha Periodontista maravilhosa! Dedicada estudiosa e preocupada em fazer o melhor sempre. Estaremos sempre juntas 👏🏻 👏🏻 👏🏻."
  },
]

// testimonial 

const container = document.querySelector(".testimonials-container")
testimonials.forEach(testimonial => {
    const div = document.createElement("div")
    div.classList.add("testimonials-content")
    div.classList.add("col-md-6")
    div.classList.add("mb-4")

    div.innerHTML = `
      <div class="testimonial-card">
        <h4 class="uppercase-bold">${testimonial.name}</h4>
        <div class="rating">
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
        </div>
        <p>${testimonial.description}</p>
      </div>
        `;

    container.appendChild(div)
})