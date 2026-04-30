// sanity/schemaTypes/heroType.ts
import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'หน้าหลัก (Hero Section)',
  type: 'document',
  fields: [
    defineField({ name: 'title1_th', type: 'string', title: 'หัวข้อ 1 (ไทย)' }),
    defineField({ name: 'title2_th', type: 'string', title: 'หัวข้อ 2 - สีเขียว (ไทย)' }),
    defineField({ name: 'title1_en', type: 'string', title: 'Title 1 (English)' }),
    defineField({ name: 'title2_en', type: 'string', title: 'Title 2 - Green (English)' }),
    defineField({ name: 'subtitle_th', type: 'text', title: 'คำอธิบาย (ไทย)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'คำอธิบาย (English)' }),
    defineField({ name: 'button_th', type: 'string', title: 'ข้อความปุ่ม (ไทย)' }),
    defineField({ name: 'button_en', type: 'string', title: 'Button Text (English)' }),
  ],
})