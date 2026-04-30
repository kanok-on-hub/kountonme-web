import { defineField, defineType } from 'sanity'

export const howItWorksType = defineType({
  name: 'howItWorksSection',
  title: 'ขั้นตอนการทำงาน (How it Works)',
  type: 'document',
  fields: [
    defineField({ name: 'headline_th', title: 'หัวข้อหลัก (TH)', type: 'string' }),
    defineField({ name: 'headline_en', title: 'Headline (EN)', type: 'string' }),
    defineField({ name: 'description_th', title: 'คำอธิบาย (TH)', type: 'text' }),
    defineField({ name: 'description_en', title: 'Description (EN)', type: 'text' }),
    defineField({
      name: 'steps',
      title: 'ขั้นตอนการทำงาน',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'number', title: 'ลำดับ (e.g. 01)', type: 'string' },
          { name: 'title_th', title: 'หัวข้อขั้นตอน (TH)', type: 'string' },
          { name: 'title_en', title: 'Step Title (EN)', type: 'string' },
          { name: 'content_th', title: 'รายละเอียด (TH)', type: 'text' },
          { name: 'content_en', title: 'Details (EN)', type: 'text' },
        ]
      }]
    }),
  ],
})