import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'th-TH',
  title: 'AIA Enjoy Building Agent Day',
  description: 'Workshop ภาษาไทยสำหรับสร้าง Meeting Action Follow-up Assistant ด้วย Microsoft Copilot Studio',
  base: '/aia-enjoy-building-agent-day/',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://teerasej.github.io/aia-enjoy-building-agent-day/'
  },
  head: [
    ['meta', { name: 'theme-color', content: '#D31145' }],
    ['meta', { name: 'robots', content: 'index, follow' }]
  ],
  themeConfig: {
    logo: {
      light: '/agent-mark.svg',
      dark: '/agent-mark.svg',
      alt: 'Meeting Action Assistant'
    },
    nav: [
      { text: 'เริ่ม Workshop', link: '/exercises/01-create-meeting-action-agent' },
      { text: 'ไฟล์ประกอบ', link: '/resources/' },
      { text: 'GitHub', link: 'https://github.com/teerasej/aia-enjoy-building-agent-day' }
    ],
    sidebar: [
      {
        text: 'เริ่มต้น',
        items: [
          { text: 'ภาพรวม Workshop', link: '/' },
          { text: 'ไฟล์ประกอบและ Resources', link: '/resources/' }
        ]
      },
      {
        text: 'สร้าง Agent ตัวเดียวไปด้วยกัน',
        items: [
          { text: '1. Instruction — สร้าง Agent', link: '/exercises/01-create-meeting-action-agent' },
          { text: '2. Knowledge — เพิ่มข้อมูลโครงการ', link: '/exercises/02-add-project-knowledge' },
          { text: '3. Tools — สร้าง Outlook Draft', link: '/exercises/03-create-outlook-draft' },
          { text: '4. Review — ทดสอบและตรวจงาน', link: '/exercises/04-test-and-review' }
        ]
      },
      {
        text: 'เอกสารช่วยตรวจ',
        collapsed: true,
        items: [
          { text: 'บันทึกประชุมตัวอย่าง', link: '/resources/fictional-meeting-notes' },
          { text: 'ตัวอย่างผลลัพธ์', link: '/resources/expected-meeting-summary' },
          { text: 'ชุดทดสอบ Agent', link: '/resources/meeting-action-test-cases' },
          { text: 'Readiness Checklist', link: '/resources/agent-readiness-checklist' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: 'ในหน้านี้'
    },
    editLink: {
      pattern: 'https://github.com/teerasej/aia-enjoy-building-agent-day/edit/main/docs/:path',
      text: 'แก้ไขหน้านี้บน GitHub'
    },
    lastUpdated: {
      text: 'อัปเดตล่าสุด',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    docFooter: {
      prev: 'ก่อนหน้า',
      next: 'ถัดไป'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/teerasej/aia-enjoy-building-agent-day' }
    ],
    footer: {
      message: 'ใช้ข้อมูลสมมติสำหรับการอบรมเท่านั้น',
      copyright: 'AIA Enjoy Building Agent Day'
    }
  }
})
