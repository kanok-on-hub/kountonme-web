import { defineField, defineType } from 'sanity'

export const workforceType = defineType({
  name: 'workforceSection',
  title: 'ทีมงานดิจิทัล (Workforce)',
  type: 'document',
  fields: [
    defineField({ name: 'title_th', title: 'หัวข้อหลัก (TH)', type: 'string' }),
    defineField({ name: 'title_en', title: 'Main Title (EN)', type: 'string' }),
    defineField({ name: 'description_th', title: 'คำอธิบาย (TH)', type: 'text' }),
    defineField({ name: 'description_en', title: 'Description (EN)', type: 'text' }),
    defineField({
      name: 'workforce',
      title: 'รายการทีมงาน',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'ชื่อเล่น (e.g. Cashie)', type: 'string' },
          { name: 'role_th', title: 'บทบาท (TH)', type: 'string' },
          { name: 'role_en', title: 'Role (EN)', type: 'string' },
          { name: 'image', title: 'รูปภาพ', type: 'image', options: { hotspot: true } },
          { name: 'items_th', title: 'รายการสิ่งที่ทำได้ (TH)', type: 'array', of: [{ type: 'string' }] },
          { name: 'items_en', title: 'Capabilities (EN)', type: 'array', of: [{ type: 'string' }] },
          { name: 'badge_th', title: 'Badge ข้อความเน้น (TH)', type: 'string' },
          { name: 'badge_en', title: 'Badge Text (EN)', type: 'string' },
        ]
      }]
    }),
  ],
})