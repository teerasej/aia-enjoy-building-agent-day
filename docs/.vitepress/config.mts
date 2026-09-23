import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'th-TH',
  title: 'AIA Enjoy Building Agent Day',
  description: 'Workshop ภาษาไทยสำหรับสร้าง Meeting Action Follow-up Agent และ Claims Document Readiness Agent ด้วย Microsoft Copilot Studio',
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
      alt: 'Two-Agent Workshop'
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
        text: 'สร้าง Agent สองตัวไปด้วยกัน',
        items: [
          { text: '1. Meeting Action Follow-up Agent', link: '/exercises/01-create-meeting-action-agent' },
          { text: '2. Claims Document Readiness Agent', link: '/exercises/02-create-claims-document-readiness-agent' }
        ]
      },
      {
        text: 'เอกสารช่วยตรวจ',
        collapsed: true,
        items: [
          { text: 'บันทึกประชุมตัวอย่าง', link: '/resources/fictional-meeting-notes' },
          { text: 'ตัวอย่างผลลัพธ์', link: '/resources/expected-meeting-summary' },
          { text: 'ตัวอย่าง Claims Readiness Brief', link: '/resources/expected-claims-readiness-brief' },
          { text: 'ชุดทดสอบ Agent ทั้งสองตัว', link: '/resources/two-agent-test-cases' },
          { text: 'Two-Agent Readiness Checklist', link: '/resources/two-agent-readiness-checklist' }
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
