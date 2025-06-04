const testimonials = [
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
   {
    name: "Ana Beatriz Rebello Ponde",
    description: "Eu gostaria de compartilha minha experiência com a Dra. Samantha Rodrigues. Desde a primeira consulta, fui extremamente bem atendida. A Dra. Samantha é uma profissíonal muito competente e atenciosa. Ela explicou cada etapa do tratamento de maneira clara e respondeu todas as minhas perguntas com paciência e precisão.",
  }
]

// testimonial 

const container = document.querySelector(".google-reviews-container")
testimonials.forEach(testimonial => {
  const div = document.createElement("div")
  div.classList.add("google-review-card")
  // div.classList.add("col-md-6")
  // div.classList.add("mb-4")

  div.innerHTML = `
       <div class="google-review-card">
          <div class="review-header">
              <div class="reviewer-info">
                  <div class="reviewer-avatar">${testimonial.name[0]}</div>
                  <div class="reviewer-name-date">
                      <div class="reviewer-name">${testimonial.name}</div>
                      <div class="review-date">1 avaliação</div>
                  </div>
              </div>
          </div>
          <div class="review-rating">
              <div class="review-stars">★★★★★</div>
              <img src="images/google/verified-badge.png" alt="Verificado" class="verified-badge">
          </div>
          <div class="review-text">
              ${testimonial.description}
          </div>
      </div>
        `;

  container.appendChild(div)
})