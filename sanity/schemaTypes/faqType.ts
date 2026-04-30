import { defineField, defineType } from 'sanity'

export const faqType = defineType({
  name: 'faqSection',
  title: 'คำถามที่พบบ่อย (FAQ)',
  type: 'document',
  fields: [
    defineField({ name: 'headline_th', title: 'หัวข้อหลัก (TH)', type: 'string' }),
    defineField({ name: 'headline_en', title: 'Headline (EN)', type: 'string' }),
    defineField({
      name: 'faqs',
      title: 'รายการคำถาม-คำตอบ',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'question_th', title: 'คำถาม (TH)', type: 'string' },
          { name: 'question_en', title: 'Question (EN)', type: 'string' },
          { name: 'answer_th', title: 'คำตอบ (TH)', type: 'text' },
          { name: 'answer_en', title: 'Answer (EN)', type: 'text' },
        ]
      }]
    }),
  ],
})