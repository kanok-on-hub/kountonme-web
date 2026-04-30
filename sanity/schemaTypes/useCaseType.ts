import { defineField, defineType } from 'sanity'

export const useCaseType = defineType({
  name: 'useCaseSection',
  title: 'เคสตัวอย่างจริง (Use Cases)',
  type: 'document',
  fields: [
    defineField({ name: 'headline_th', title: 'หัวข้อหลัก (TH)', type: 'string' }),
    defineField({ name: 'headline_en', title: 'Headline (EN)', type: 'string' }),
    defineField({ name: 'description_th', title: 'คำอธิบาย (TH)', type: 'text' }),
    defineField({ name: 'description_en', title: 'Description (EN)', type: 'text' }),
    defineField({
      name: 'cases',
      title: 'รายการ Use Cases',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'ชื่อโปรเจกต์ (e.g. Logistics tracking)', type: 'string' },
          { name: 'subtitle_th', title: 'คำบรรยายสั้น (TH)', type: 'string' },
          { name: 'subtitle_en', title: 'Subtitle (EN)', type: 'string' },
          { name: 'image', title: 'รูปภาพประกอบ', type: 'image', options: { hotspot: true } },
          { name: 'problems_th', title: 'รายการปัญหา (TH)', type: 'array', of: [{ type: 'string' }] },
          { name: 'problems_en', title: 'Problems List (EN)', type: 'array', of: [{ type: 'string' }] },
          { name: 'results_th', title: 'รายการผลลัพธ์ (TH)', type: 'array', of: [{ type: 'string' }] },
          { name: 'results_en', title: 'Results List (EN)', type: 'array', of: [{ type: 'string' }] },
          { name: 'label_prob_th', title: 'ป้ายกำกับปัญหา (e.g. ปัญหา)', type: 'string' },
          { name: 'label_prob_en', title: 'Label Problem (e.g. Problems)', type: 'string' },
          { name: 'label_res_th', title: 'ป้ายกำกับผลลัพธ์ (e.g. ผลลัพธ์)', type: 'string' },
          { name: 'label_res_en', title: 'Label Result (e.g. Results)', type: 'string' },
        ]
      }]
    }),
  ],
})