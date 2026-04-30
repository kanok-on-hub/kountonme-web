import { defineField, defineType } from 'sanity'

export const contactType = defineType({
  name: 'contactSection',
  title: 'ระบบติดต่อ (Contact Section)',
  type: 'document',
  groups: [
    { name: 'header', title: 'ส่วนหัว' },
    { name: 'form', title: 'ชื่อช่องกรอก (Labels)' },
    { name: 'feedback', title: 'ปุ่มและข้อความแจ้งเตือน' },
    { name: 'line', title: 'ปุ่ม LINE' },
  ],
  fields: [
    // --- Header ---
    defineField({ name: 'headline_th', title: 'หัวข้อ (TH)', type: 'text', rows: 2, group: 'header' }),
    defineField({ name: 'headline_en', title: 'Headline (EN)', type: 'text', rows: 2, group: 'header' }),
    defineField({ name: 'subheadline_th', title: 'คำบรรยาย (TH)', type: 'text', rows: 3, group: 'header' }),
    defineField({ name: 'subheadline_en', title: 'Subheadline (EN)', type: 'text', rows: 3, group: 'header' }),

    // --- Form Labels ---
    defineField({ name: 'label_name_th', title: 'Label ชื่อ (TH)', type: 'string', group: 'form', initialValue: 'ชื่อ-สกุล*' }),
    defineField({ name: 'label_name_en', title: 'Label Name (EN)', type: 'string', group: 'form', initialValue: 'Full name*' }),
    defineField({ name: 'label_email_th', title: 'Label อีเมล (TH)', type: 'string', group: 'form', initialValue: 'อีเมล*' }),
    defineField({ name: 'label_email_en', title: 'Label Email (EN)', type: 'string', group: 'form', initialValue: 'Email*' }),
    defineField({ name: 'label_tel_th', title: 'Label เบอร์โทร (TH)', type: 'string', group: 'form', initialValue: 'เบอร์โทรศัพท์*' }),
    defineField({ name: 'label_tel_en', title: 'Label Tel (EN)', type: 'string', group: 'form', initialValue: 'Phone number*' }),
    defineField({ name: 'label_msg_th', title: 'Label ข้อความ (TH)', type: 'string', group: 'form', initialValue: 'ข้อความ' }),
    defineField({ name: 'label_msg_en', title: 'Label Message (EN)', type: 'string', group: 'form', initialValue: 'Message' }),

    // --- Feedback & Buttons ---
    defineField({ name: 'btn_th', title: 'ปุ่มส่ง (TH)', type: 'string', group: 'feedback', initialValue: 'ส่งข้อมูลหาทีมงาน' }),
    defineField({ name: 'btn_en', title: 'Submit Button (EN)', type: 'string', group: 'feedback', initialValue: 'Send it over' }),
    defineField({ name: 'btn_submitting_th', title: 'ข้อความตอนกำลังส่ง (TH)', type: 'string', group: 'feedback', initialValue: 'กำลังส่งข้อมูล...' }),
    defineField({ name: 'btn_submitting_en', title: 'Submitting Text (EN)', type: 'string', group: 'feedback', initialValue: 'Sending...' }),
    defineField({ name: 'err_email_th', title: 'เตือนอีเมลผิด (TH)', type: 'string', group: 'feedback' }),
    defineField({ name: 'err_email_en', title: 'Email Error (EN)', type: 'string', group: 'feedback' }),
    defineField({ name: 'err_tel_th', title: 'เตือนเบอร์ผิด (TH)', type: 'string', group: 'feedback' }),
    defineField({ name: 'err_tel_en', title: 'Tel Error (EN)', type: 'string', group: 'feedback' }),
    defineField({ name: 'msg_success_th', title: 'แจ้งเตือนส่งสำเร็จ (TH)', type: 'text', rows: 2, group: 'feedback' }),
    defineField({ name: 'msg_success_en', title: 'Success Alert (EN)', type: 'text', rows: 2, group: 'feedback' }),
    defineField({ name: 'msg_error_th', title: 'แจ้งเตือนส่งพลาด (TH)', type: 'text', rows: 2, group: 'feedback' }),
    defineField({ name: 'msg_error_en', title: 'Error Alert (EN)', type: 'text', rows: 2, group: 'feedback' }),

    // --- LINE ---
    defineField({ name: 'line_text_th', title: 'ปุ่ม LINE (TH)', type: 'string', group: 'line' }),
    defineField({ name: 'line_text_en', title: 'LINE Button (EN)', type: 'string', group: 'line' }),
    defineField({ name: 'line_link', title: 'ลิงก์ LINE', type: 'url', group: 'line' }),
  ],
})