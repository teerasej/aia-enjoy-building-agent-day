---
layout: home

hero:
  name: Two-Agent Workshop
  text: สร้าง Agent สองตัวด้วยรูปแบบเดียวกัน
  tagline: ลองทำ หยุดคุย เปรียบเทียบ แล้วนำความเข้าใจไปใช้กับงานใหม่
  actions:
    - theme: brand
      text: เริ่ม Meeting Action Agent
      link: /exercises/01-create-meeting-action-agent
    - theme: alt
      text: ดาวน์โหลดไฟล์ทั้งหมด
      link: https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/two-agent-workshop-sample-files.zip

features:
  - title: Meeting Action Follow-up Agent
    details: จัดบันทึกประชุม เพิ่ม Project Knowledge และสร้าง follow-up brief ที่พร้อมให้คนตรวจ
    link: /exercises/01-create-meeting-action-agent
  - title: Claims Document Readiness Agent
    details: ตรวจรายการเอกสารจาก fictional checklist โดยไม่ตัดสินผลของ claim
    link: /exercises/02-create-claims-document-readiness-agent
  - title: Pattern ที่ใช้ร่วมกัน
    details: Instruction กำหนดงาน Knowledge ให้บริบท Prompt Tool จัดผลลัพธ์ และคนเป็นผู้ตัดสินใจ
    link: /resources/two-agent-test-cases
---

## ก่อนเริ่ม

- เข้า Microsoft Copilot Studio และเลือก Environment ที่ผู้สอนกำหนด
- สร้าง Agent ผ่าน `Agents` > `New agent` > `Create blank agent` แล้วรอ provisioning ก่อนใส่ `Instructions`
- ใช้บัญชีสำหรับการอบรมที่สร้าง Agent, เพิ่ม Knowledge และสร้าง Prompt Tool ได้
- ดาวน์โหลด [ไฟล์ประกอบทั้งหมด](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/two-agent-workshop-sample-files.zip)
- ใช้เฉพาะข้อมูลสมมติ ห้ามใช้ข้อมูลประชุม ข้อมูลลูกค้า ข้อมูลสุขภาพ หรือเอกสาร claim จริง

> **Readiness:** Knowledge และ Prompt Tool ต้องผ่านการตรวจ learner account, Dataverse search, file upload, supported region, maker permission และ Copilot Credits หากยังไม่พร้อม ให้ติดตาม Instructor demonstration โดยไม่พยายามหลีกเลี่ยงนโยบาย Environment

## Workshop Agenda

| เวลา | กิจกรรม | ผลลัพธ์ของผู้เรียน |
|---|---|---|
| 13:30–13:45 | Introduction | เห็นบทบาทของ `Instruction`, `Knowledge` และ Prompt Tool |
| 13:45–14:45 | Meeting Action Follow-up Agent | สร้างและทดสอบ pattern แบบครบเส้นทาง |
| 14:45–15:30 | Claims Document Readiness Agent | สร้าง pattern เดิมกับงานตรวจเอกสาร |
| 15:30–15:45 | Final Wow Demo | เห็นจุดแข็งและขอบเขตของ Agent ทั้งสองตัว |
| 15:45–16:00 | Conclusion | เลือกงานเล็กที่เหมาะและระบุจุดที่คนต้อง Review |

Workshop ใช้จังหวะ **Show → Try → Pause → Compare → Continue** ไม่มี Connector, external action หรือ production publishing
