<template>
    <div class="contact-wrapper">
        <!-- groom bride -->
         <div class="top-row">
            <div class="person">
                <div class="role">{{ $t('groom') }}</div>
                <div class="icons">📞 ✉️</div>
            </div>
            <div class="person">
                <div class="role">신부</div>
                <div class="icons">📞 ✉️</div>
            </div>
         </div>
    </div>

    <!-- honju -->
     <div class="honju-toggle-row">
        <div class="honju-label">신랑 측 혼주 <span>↑</span></div>
        <div class="honju-label">신부 측 혼주 <span>↑</span></div>
     </div>

     <div class="honju-detail-row">
        <!-- groom -->
         <div class="honju">
            <div>아버지 <strong>박민수</strong></div>
            <div class="icons">📞 ✉️</div>
            <div>어머니 <strong>김영희</strong></div>
            <div class="icons">📞 ✉️</div>
         </div>
         <!-- bride -->
         <div class="honju">
            <div>아버지 <strong>한희승</strong></div>
            <div class="icons">📞 ✉️</div>
            <div>어머니 <strong>최수연</strong></div>
            <div class="icons">📞 ✉️</div>
         </div>
     </div>
</template>

<style scoped>
.contact-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
}

.top-row, .honju-toggle-row, .honju-detail-row {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.person, .honju {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icons {
    font-size: 1.2rem;
    margin-top: 0.5rem;
}

.honju-label {
    font-weight: bold;
}
</style>