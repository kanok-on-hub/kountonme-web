import { defineField, defineType } from 'sanity'

export const footerType = defineType({
  name: 'footerSection',
  title: 'ข้อมูลท้ายเว็บไซต์ (Footer)',
  type: 'document',
  fields: [
    defineField({ name: 'company_th', title: 'ชื่อบริษัท (TH)', type: 'string' }),
    defineField({ name: 'company_en', title: 'Company Name (EN)', type: 'string' }),
    defineField({ name: 'address_th', title: 'ที่อยู่ (TH)', type: 'text' }),
    defineField({ name: 'address_en', title: 'Address (EN)', type: 'text' }),
    defineField({ name: 'phone', title: 'เบอร์โทรศัพท์', type: 'string' }),
    defineField({ name: 'email', title: 'อีเมล', type: 'string' }),
  ],
})