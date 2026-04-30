import { defineField, defineType } from 'sanity'

export const problemType = defineType({
  name: 'problemSection',
  title: 'ปัญหาที่พบ (Problem Section)',
  type: 'document',
  fields: [
    defineField({
      name: 'mainTitle_th',
      title: 'หัวข้อหลัก (ภาษาไทย)',
      type: 'string',
    }),
    defineField({
      name: 'mainTitle_en',
      title: 'Main Title (English)',
      type: 'string',
    }),
    defineField({
      name: 'problems',
      title: 'รายการปัญหา (Pain Points)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title_th', title: 'หัวข้อปัญหา (ไทย)', type: 'string' },
            { name: 'title_en', title: 'Title (English)', type: 'string' },
            { name: 'content_th', title: 'คำอธิบายปัญหา (ไทย)', type: 'text' },
            { name: 'content_en', title: 'Content (English)', type: 'text' },
          ]
        }
      ]
    }),
    defineField({
      name: 'footer_th',
      title: 'คำสรุปท้ายส่วน (ภาษาไทย)',
      type: 'string',
    }),
    defineField({
      name: 'footer_en',
      title: 'Footer Punchline (English)',
      type: 'string',
    }),
  ],
})