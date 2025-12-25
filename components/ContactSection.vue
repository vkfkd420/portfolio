<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">Contact</h2>
      <div class="contact-info">
        <p class="contact-text">새로운 기회에 대해 이야기 나누고 싶습니다.</p>
        
        <div class="contact-item">
          <span class="label">Email</span>
          <a href="mailto:vkfkd420@naver.com" class="email-link">vkfkd420@naver.com</a>
        </div>
        
        <div class="contact-item">
          <span class="label">Phone</span>
          <a href="tel:010-2982-9609" class="phone-link">010-2982-9609</a>
        </div>
<!-- 
        <div class="contact-item">
            <span class="label">Address</span>
            <p class="address-text">서울특별시 영등포구 당산동 3가 395-42</p>
        </div> -->
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.phone-link, .address-text {
  font-size: 1.5rem;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
}

.email-link {
    font-size: 1.5rem; /* MATCHING SIZE */
}

@media (max-width: 768px) {
    .phone-link, .address-text, .email-link {
        font-size: 1.2rem;
    }
}
</style>
