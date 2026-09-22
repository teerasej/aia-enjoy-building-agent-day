# แบบฝึกหัดที่ 2 เพิ่ม Project Knowledge ให้ Agent

เราจะเพิ่ม Project Brief, Roles และ Follow-up Guidelines ให้ Agent ใช้อธิบายบริบทที่บันทึกประชุมไม่ได้เขียนซ้ำทุกครั้ง เปรียบเหมือนให้ผู้ช่วยมีแฟ้มโครงการอยู่ข้างตัว แต่ยังต้องแยกสิ่งที่อยู่ในแฟ้มออกจากสิ่งที่เกิดขึ้นในการประชุมครับ

> **License:** ต้องมีสิทธิ์เพิ่มไฟล์เป็น `Knowledge` และต้องตรวจสอบก่อนเริ่มอบรมว่า Environment มี Dataverse, เปิด Dataverse search และอนุญาต file upload แล้ว

## Prerequisites

- ทำ [แบบฝึกหัดที่ 1](./01-create-meeting-action-agent.md) แล้ว
- ดาวน์โหลดไฟล์ต่อไปนี้
  - [Project Northstar Brief](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-project-brief.docx)
  - [Project Northstar Roles](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-project-roles.docx)
  - [Meeting Follow-up Guidelines](https://teerasej.github.io/aia-enjoy-building-agent-day/downloads/fictional-follow-up-guidelines.docx)
- ใช้เฉพาะไฟล์สมมติที่เตรียมไว้

---

## Scenario เปิดแฟ้มโครงการก่อนตอบ

Agent ต้องใช้ `Knowledge` เพื่ออธิบายเป้าหมาย ขอบเขต และบทบาทของ Project Northstar แต่ต้องไม่ใช้ข้อมูลในแฟ้มเพื่อแต่ง decision หรือ action ที่ไม่อยู่ในบันทึกประชุม

### Practice 1 เพิ่มไฟล์เป็น Knowledge

**Primary target:** เพิ่มเอกสารสมมติสามไฟล์เป็น Agent-level Knowledge ที่พร้อมค้นหา

1. เปิด `Meeting Action Follow-up Assistant [ชื่อเล่น]`
2. ไปที่ `Knowledge`
3. เลือก `Add knowledge`
4. เลือกพื้นที่อัปโหลดไฟล์ แล้วเพิ่มไฟล์ทั้งสามไฟล์
5. ตั้งชื่อแหล่งข้อมูลให้สื่อความหมาย
   - `Project Northstar Brief`
   - `Project Northstar Roles`
   - `Meeting Follow-up Guidelines`
6. เลือก `Add to agent`
7. รอจนทั้งสามแหล่งแสดงสถานะพร้อมใช้งาน แล้วเลือก `Save`

#### Checkpoint

- หน้า `Knowledge` แสดงเอกสารสามแหล่งโดยไม่มีสถานะ Error

### Practice 2 ทดสอบ Grounded Answer และขอบเขตของแหล่งข้อมูล

**Primary target:** พิสูจน์ว่า Agent ใช้ Knowledge อธิบายบริบท แต่ไม่ใช้บทบาททั่วไปเพื่อเติม owner ที่หายไป

1. เปิด `Test your agent` และเริ่มบทสนทนาใหม่ก่อนแต่ละกรณี
2. ถามเป้าหมายของโครงการ

   ```text
   Project Northstar มีเป้าหมายและขอบเขตอะไรบ้าง ตอบจาก Knowledge และบอกชื่อแหล่งข้อมูลที่ใช้เมื่อทำได้
   ```

3. ตรวจว่าคำตอบตรงกับ `Project Northstar Brief`
4. ถามเรื่องบทบาท

   ```text
   ใครเป็น Project Lead และใครดูแลการสื่อสารตาม Knowledge
   ```

5. ตรวจว่าคำตอบตรงกับ `Project Northstar Roles`
6. ทดสอบขอบเขตระหว่าง Knowledge กับ meeting notes

   ```text
   จากบันทึกประชุม ใครเป็น owner ของการเตรียม participant FAQ
   ถ้า meeting notes ไม่ได้ระบุ ห้ามใช้ชื่อตามบทบาททั่วไปมาเดาแทน
   ```

7. ตรวจว่า Agent ตอบว่า owner ยังไม่ระบุและต้องให้คนยืนยัน

> **⚠️ Environment blocked:** หากอัปโหลดหรือประมวลผลไฟล์ไม่ได้ ให้บันทึกข้อความที่พบและติดตาม Instructor demonstration ห้ามใช้ไฟล์ภายในจริงหรือพยายามหลีกเลี่ยงนโยบาย Environment

#### Checkpoint

- Agent อ้างอิงบริบทจาก Knowledge ได้ และยังคงรายการที่ไม่มี owner ไว้เป็น Missing information

## Summary

เราได้ Agent ที่รู้บริบทของโครงการจากแหล่งข้อมูลที่กำหนด แต่ไม่ปะปน Knowledge กับหลักฐานจากการประชุม ขั้นต่อไปเราจะสร้าง Prompt Tool ที่จัดสรุปให้เป็น follow-up brief รูปแบบมาตรฐาน

[แบบฝึกหัดก่อนหน้า](./01-create-meeting-action-agent.md) | [กลับหน้าหลัก](../index.md) | [แบบฝึกหัดถัดไป สร้าง Follow-up Brief](./03-create-follow-up-brief-tool.md)
