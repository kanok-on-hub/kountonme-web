import { defineField, defineType } from 'sanity'

export const ctaType = defineType({
  name: 'ctaSection',
  title: 'ส่วนกระตุ้นการตัดสินใจ (CTA)',
  type: 'document',
  fields: [
    // เปลี่ยนจาก string เป็น text เพื่อให้กด Enter ใน CMS ได้ครับพี่
    defineField({ name: 'headline_th', title: 'หัวข้อหลัก (TH)', type: 'text', rows: 3 }), 
    defineField({ name: 'headline_en', title: 'Headline (EN)', type: 'text', rows: 3 }),
    defineField({ name: 'button_th', title: 'ข้อความบนปุ่ม (TH)', type: 'string' }),
    defineField({ name: 'button_en', title: 'Button Text (EN)', type: 'string' }),
  ],
})