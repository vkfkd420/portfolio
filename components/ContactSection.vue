<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">Contact</h2>
      <div class="contact-info" v-reveal>
        <p class="contact-text">새로운 기회에 대해 이야기 나누고 싶습니다.</p>

        <div class="contact-item">
          <span class="label">Email</span>
          <a href="mailto:vkfkd420@naver.com" class="email-link">vkfkd420@naver.com</a>
        </div>

        <div class="contact-item">
          <span class="label">Phone</span>
          <a href="tel:010-2982-9609" class="phone-link">010-2982-9609</a>
        </div>

        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-row">
            <label for="contact-name">이름</label>
            <input id="contact-name" v-model="name" type="text" required placeholder="이름을 입력해주세요" />
          </div>
          <div class="form-row">
            <label for="contact-email">회신받을 이메일</label>
            <input id="contact-email" v-model="email" type="email" required placeholder="you@example.com" />
          </div>
          <div class="form-row">
            <label for="contact-message">메시지</label>
            <textarea id="contact-message" v-model="message" required rows="4" placeholder="전달하고 싶은 내용을 남겨주세요"></textarea>
          </div>
          <button type="submit" class="btn">메일로 보내기</button>
          <p class="form-hint">전송 버튼을 누르면 입력하신 내용으로 메일 클라이언트가 열립니다.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  const subject = encodeURIComponent(`[포트폴리오 문의] ${name.value}님으로부터`)
  const body = encodeURIComponent(`${message.value}\n\n보낸 사람: ${name.value} (${email.value})`)
  window.location.href = `mailto:vkfkd420@naver.com?subject=${subject}&body=${body}`
}
</script>

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

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 480px;
  margin-top: 1rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-row label {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.form-row input,
.form-row textarea {
  font-family: inherit;
  font-size: 0.95rem;
  color: var(--text-color);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 10px 14px;
  resize: vertical;
}

.form-row input:focus,
.form-row textarea:focus {
  outline: none;
  border-color: var(--accent-color);
}

.contact-form .btn {
  align-self: flex-start;
}

.form-hint {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
    .phone-link, .address-text, .email-link {
        font-size: 1.2rem;
    }
}
</style>
