import { defineField, defineType } from 'sanity'

export const philosophyType = defineType({
  name: 'philosophySection',
  title: 'ปรัชญาของเรา (Philosophy)',
  type: 'document',
  fields: [
    defineField({ name: 'subHeader_th', title: 'หัวข้อย่อย (ไทย)', type: 'string' }),
    defineField({ name: 'subHeader_en', title: 'Sub Header (EN)', type: 'string' }),
    
    // แยกส่วนขีดเส้นใต้เพื่อให้ดีไซน์ยังอยู่
    defineField({ name: 'titleNormal_th', title: 'หัวข้อหลัก-ส่วนปกติ (ไทย)', type: 'string' }),
    defineField({ name: 'titleHighlight_th', title: 'หัวข้อหลัก-ส่วนขีดเส้นใต้ (ไทย)', type: 'string' }),
    
    defineField({ name: 'titleNormal_en', title: 'Title-Normal (EN)', type: 'string' }),
    defineField({ name: 'titleHighlight_en', title: 'Title-Highlight (EN)', type: 'string' }),

    defineField({ name: 'titleLine2_th', title: 'หัวข้อบรรทัดที่ 2 (ไทย)', type: 'string' }),
    defineField({ name: 'titleLine2_en', title: 'Title Line 2 (EN)', type: 'string' }),

    defineField({ name: 'p1_th', title: 'เนื้อหาบรรทัดที่ 1 (ไทย)', type: 'text' }),
    defineField({ name: 'p1_en', title: 'Paragraph 1 (EN)', type: 'text' }),
    defineField({ name: 'p2_th', title: 'เนื้อหาบรรทัดที่ 2 (ไทย)', type: 'text' }),
    defineField({ name: 'p2_en', title: 'Paragraph 2 (EN)', type: 'text' }),
  ],
})