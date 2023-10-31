<template>
  <main class="contact">
    <div class="w-full px-4 lg:px-0 lg:w-2/3 blex">

      <div class="w-full blex-left">
        <div class="w-full lg:w-1/2 blex-left">
          <div class="contact-title">
            CONTACT US
          </div>
          <div class="contact-sub-title">
            FIND YOUR DIFFERENCE<br>
            WITH ELSE
          </div>
        </div>
        <div class="w-full lg:w-1/2 blex justify-start lg:justify-end text-white text-xs lg:text-base pt-4 lg:pt-0">
          문의 메일 : ask@else.red
        </div>
        <div class="line"></div>
        <div class="w-full blex-right text-white pt-4 lg:pt-10 text-xs lg:text-base">
          *표시는 필수 사항입니다
        </div>
      </div>

      <!--  inputs    -->
      <div class="w-full blex-between">
        <div class="w-full blex-between flex-wrap lg:flex-no-wrap">
          <el-input
              label="성함"
              required
              v-model="form.name"
              placeholder="성함을 입력해주세요"
              class="mr-0 lg:mr-12"
          />
          <el-input
              label="연락처"
              required
              v-model="form.contact"
              placeholder="연락처를 입력해주세요"
          />
        </div>
        <div class="w-full blex-between flex-wrap lg:flex-no-wrap">
          <div class="bp-input-wrapper mr-0 lg:mr-12">
            <div class="flex flex-no-wrap items-center">
              <div class="bp-input-label">이메일</div>
              <div class="required">*</div>
            </div>
            <input class="bp-input"
                   v-model="form.email"
                   type="" :required="false" placeholder="이메일을 입력해주세요"/>
          </div>
          <el-input
              label="직책"
              required
              v-model="form.position"
              placeholder="직책을 입력해주세요"
          />
        </div>
        <div class="w-full blex-between flex-wrap lg:flex-no-wrap">
          <el-input
              label="회사명"
              required
              v-model="form.company_name"
              placeholder="회사명을 입력해주세요"
              class="mr-0 lg:mr-12"
          />

          <el-input
              label="예산 범위"
              required
              v-model="form.budget"
              placeholder="예산 범위를 입력해주세요"
          />
        </div>
        <div class="w-full blex-left flex-wrap lg:flex-no-wrap">
          <el-input
              label="프로젝트 기간"
              required
              v-model="form.duration"
              placeholder="프로젝트 기간을 입력해주세요"
              class="pr-0 mr-0 lg:pr-6"
          />
        </div>
        <div class="w-full">
          <div class="input-label">
            프로젝트 종류 <span class="text-xs ml-2">*</span>
          </div>
          <div class="w-full blex justify-between lg:justify-start">
            <el-check-box
                v-for="(type, index) in types"
                :key="index"
                :vs-option="type"
                v-model="form.types"
            />
          </div>
        </div>
        <el-text-area
            label="문의 내용"
            required
            :row="10"
            v-model="form.content"
            placeholder="문의 내용을 입력해주세요"
            class="w-full"
        />
      </div>

      <!--  개인정보처리방침 동의    -->
      <div class="w-full blex-left mt-4">
        <input
            @click="isTermsCheck = !isTermsCheck"
            type="checkbox"
            class="check-box"
        >
        <div class="cursor-pointer text-white">
          개인정보처리방침에 동의합니다
        </div>
        <div
            @click="isTermsModal = true"
            class="pl-4 cursor-pointer"
        >
          약관 보기
        </div>
      </div>

      <!-- submit 버튼   -->
      <el-button
          class="mt-20"
          title="SUBMIT"
          @click="signUp"
      />
      <el-modal
          :active.sync="isTermsModal"
      />

    </div>
  </main>
</template>

<script>
import ElInput from '@/components/ElInput.vue'
import ElCheckBox from '@/components/ElCheckBox.vue'
import ElTextArea from '@/components/ElTextArea.vue'
import ElButton from '@/components/ElButton.vue'
import ElModal from '@/components/ElModal.vue'

export default {
  name      : "index",
  components: {
    ElInput,
    ElCheckBox,
    ElTextArea,
    ElButton,
    ElModal
  },
  data      : () => ({
    isTermsModal: false,
    isTermsCheck: false,
    types       : [
      '홈페이지',
      '쇼핑몰',
      '모바일',
      '유지/보수',
      '이벤트 페이지',
      '원 페이지',
      '기타'
    ],
    form        : {
      name        : '',
      contact     : '',
      email       : '',
      position    : '',
      company_name: '',
      budget      : '',
      duration    : '',
      type        : null,
      content     : '',
      types       : []
    },
    msg         : null
  }),
  methods   : {
    validateNotify(text) {
      this.$vs.notify({
                        title   : '정보',
                        text,
                        position: 'top-right',
                        color   : 'danger',
                      })
      return false
    },
    validate() {
      if (!this.form.name || this.form.name.length < 2) {
        return this.validateNotify('이름을 입력해 주세요')
      }
      if (!this.form.contact || this.form.contact.length < 10) {
        return this.validateNotify('연락처를 입력해 주세요')
      }
      if (!this.form.email) {
        return this.validateNotify('이메일을 입력해 주세요')
      }
      if (this.form.email.length < 8 || this.form.email.indexOf('@') === -1) {
        return this.validateNotify('이메일 형식이 올바르지 않습니다')
      }
      if (!this.form.position || this.form.position.length < 2) {
        return this.validateNotify('직책을 입력해 주세요')
      }
      if (!this.form.company_name || this.form.company_name.length < 2) {
        return this.validateNotify('회사명을 입력해 주세요')
      }
      if (!this.form.budget || this.form.budget.length < 2) {
        return this.validateNotify('예산 범위를 입력해 주세요')
      }
      if (!this.form.duration || this.form.duration.length < 2) {
        return this.validateNotify('프로젝트 기간을 입력해 주세요')
      }
      if (!this.form.types || this.form.types.length < 1) {
        return this.validateNotify('프로젝트 종류를 선택해 주세요')
      }
      if (!this.form.content || this.form.content.length < 2) {
        return this.validateNotify('문의 내용을 입력해 주세요')
      }
      if (!this.isTermsCheck) {
        return this.validateNotify('개인 정보 처리 방침에 동의해 주세요')
      }
      return true
    },
    signUp() {
      // 임시로 http 주소 적어 놓았습니다. 배포 시 수정
      if (this.validate()) {

        this.$http.post('https://web.else.blue/api/contact', this.form)
            .then(res => {
              this.$vs.notify({
                                title   : '문의 완료',
                                text    : '감사합니다. 문의가 완료되었습니다',
                                color   : 'success',
                                position: 'top-right',
                              })
              this.$router.push('/')
            })
            .catch(err => {
              this.$vs.notify({
                                title   : '문의 실패',
                                text    : '죄송합니다. 관리자에게 문의 부탁 드립니다.',
                                color   : 'danger',
                                position: 'top-right',
                              })
            })
      }
    }
  },
  mounted() {
    this.$emit('router-mounted')
  }
}
</script>

<style
    scoped
    lang="scss"
>
.bp-input-wrapper::v-deep {
  width: 50%;
  margin-top: 40px;

  @media screen and (max-width: 1024px) {
    margin-top: 30px;
    width: 100%;
  }


  &.disabled {
    opacity: .5;
    pointer-events: none;
  }


  .bp-input-label {
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
    color: #EFEFEF;

    @media screen and (max-width: 1024px) {
      font-size: 14px;
      line-height: 17px;
    }
  }

  input::placeholder {
    font-weight: 600;
    font-family: 'suit', sans-serif;
  }

  @media screen and (max-width: 1024px) {
    input::placeholder {
      font-size: 14px;
    }
  }

  .required {
    color: #fff;
    padding-left: 6px;
  }


  .bp-input {
    width: 100%;
    font-weight: 500;
    height: 40px;
    background: #000;
    border: 1px solid #474747;
    color: #fff;
    padding: 12px 20px;
    transition: all .2s;
    margin-top: 20px;

    @media screen and (max-width: 1024px) {
      margin-top: 10px;
      padding: 10px 16px;
    }

    &:hover {
      border-color: #b20000;
      transition: all .2s;
    }

    &:focus {
      border-color: #b20000;
    }
  }

}

.contact::v-deep {
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 9.375vw 0; //180px

  @media screen and (max-width: 1024px) {
    padding: 60px 0;
  }


  .contact-title {
    width: 100%;
    color: #fff;
    font-size: 4.167vw; //80px;
    font-weight: 700;
    @media screen and (max-width: 1024px) {
      font-size: 32px;
    }
  }

  .contact-sub-title {
    width: 100%;
    color: #fff;
    font-size: 1.823vw; //35px;
    font-weight: 700;
    line-height: 2.083vw; //40px;
    padding-top: 12px;

    @media screen and (max-width: 1024px) {
      line-height: 16px;
      font-size: 16px;
    }
  }

  .line {
    width: 220px;
    height: 1px;
    background-color: #fff;
    margin-top: 40px;

    @media screen and (max-width: 1024px) {
      margin-top: 20px;
      width: 100px;
    }
  }

  .check-box {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    appearance: none;
    border: 1px solid #fff;
    background-color: #000;

    &:hover {
      cursor: pointer;
    }

    &:checked {
      background: url('~@/assets/images/icon/redCheck.svg') no-repeat center center/contain;
    }
  }

  .input-label {
    margin-top: 40px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    padding-bottom: 10px;

    @media screen and (max-width: 1024px) {
      margin-top: 30px;
      font-size: 14px;
      line-height: 17px;
      padding-bottom: 10px;
    }
  }
}

</style>
